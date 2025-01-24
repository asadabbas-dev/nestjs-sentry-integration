import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import * as dotenv from 'dotenv';
dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  profilesSampleRate: 1.0, // Relative to tracesSampleRate
});