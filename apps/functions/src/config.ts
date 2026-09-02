import { z } from 'zod';

const schema = z.object({
  APP_ENV: z.enum(['dev', 'hml', 'prod']),
  GCP_PROJECT_ID: z.string().min(1),
  MONGODB_URI: z.string().min(1),
  MONGODB_DATABASE: z.string().min(1),
  LOG_LEVEL: z.string().default('info'),
});

export const config = schema.parse({
  APP_ENV: process.env.APP_ENV,
  GCP_PROJECT_ID: process.env.GCP_PROJECT_ID,
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DATABASE: process.env.MONGODB_DATABASE,
  LOG_LEVEL: process.env.LOG_LEVEL,
});
