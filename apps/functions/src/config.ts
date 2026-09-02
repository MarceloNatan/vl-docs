import { z } from 'zod';

const isEmulator = process.env.FUNCTIONS_EMULATOR === 'true';

const schema = z.object({
  APP_ENV: z.enum(['dev', 'hml', 'prod']),
  GCP_PROJECT_ID: z.string().min(1),
  MONGODB_URI: z.string().min(1),
  MONGODB_DATABASE: z.string().min(1),
  LOG_LEVEL: z.string().default('info'),
});

export const config = schema.parse({
  APP_ENV: process.env.APP_ENV ?? (isEmulator ? 'dev' : undefined),
  GCP_PROJECT_ID: process.env.GCP_PROJECT_ID ?? (isEmulator ? 'demo-vl-docs' : undefined),
  MONGODB_URI: process.env.MONGODB_URI ?? (isEmulator ? 'mongodb://127.0.0.1:27017' : undefined),
  MONGODB_DATABASE: process.env.MONGODB_DATABASE ?? (isEmulator ? 'vl_docs_dev' : undefined),
  LOG_LEVEL: process.env.LOG_LEVEL,
});
