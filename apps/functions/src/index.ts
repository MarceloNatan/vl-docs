import express from 'express';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { httpLogger } from './logger';
import { requireAuth, AuthenticatedRequest } from './auth';
import { getDb } from './db';

initializeApp();
const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '256kb' }));
app.use(httpLogger);

app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));
app.get('/v1/me', requireAuth, async (req: AuthenticatedRequest, res) => {
  const db = await getDb();
  const user = await db.collection('users').findOne(
    { tenantId: req.tenantId, firebaseUid: req.user?.uid },
    { projection: { _id: 0, firebaseUid: 1, tenantId: 1, role: 1, status: 1 } },
  );
  if (!user) return res.status(404).json({ error: 'user_not_found' });
  return res.json(user);
});

app.use((_err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  return res.status(500).json({ error: 'internal_error' });
});

export const api = onRequest({ region: 'southamerica-east1', cors: false, maxInstances: 3 }, app);
export { app };
