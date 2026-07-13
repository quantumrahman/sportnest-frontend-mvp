import { betterAuth } from 'better-auth';
import { db, client } from '../config/db.config.js';
import { mongodbAdapter } from '@better-auth/mongo-adapter';

export const auth = betterAuth({
    database: mongodbAdapter(db, client),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});
