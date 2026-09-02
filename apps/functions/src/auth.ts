import { getAuth, DecodedIdToken } from 'firebase-admin/auth';
import { Request, Response, NextFunction } from 'express';

export type AuthenticatedRequest = Request & { user?: DecodedIdToken; tenantId?: string };

export async function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const header = req.header('authorization');
  if (!header?.startsWith('Bearer ')) return res.status(401).json({ error: 'unauthorized' });
  try {
    req.user = await getAuth().verifyIdToken(header.slice(7), true);
    const tenantId = req.user.tenantId ?? (req.user as DecodedIdToken & { tenant_id?: string }).tenant_id;
    if (!tenantId) return res.status(403).json({ error: 'tenant_context_required' });
    req.tenantId = tenantId;
    return next();
  } catch {
    return res.status(401).json({ error: 'unauthorized' });
  }
}
