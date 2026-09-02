import pino from 'pino';
import pinoHttp from 'pino-http';
import { randomUUID } from 'node:crypto';

export const logger = pino({ level: process.env.LOG_LEVEL ?? 'info' });
export const httpLogger = pinoHttp({
  logger,
  genReqId: (req) => req.headers['x-correlation-id']?.toString() || randomUUID(),
  customProps: (req) => ({ correlationId: req.id }),
});
