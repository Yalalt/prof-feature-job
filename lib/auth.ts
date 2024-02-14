import { DrizzleAdapter } from '@auth/drizzle-adapter';
import GithubProvider from 'next-auth/providers/github';
import { db } from '@/lib/db';
import config from '@/lib/config';

export const authOptions = {
  adapter: DrizzleAdapter(db) as any,
  secret: config.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: config.GITHUB_ID,
      clientSecret: config.GITHUB_SECRET,
    }),
  ],
};
