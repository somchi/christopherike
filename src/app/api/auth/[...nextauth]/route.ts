import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/app/_libs/prisma';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
        },
      },

      async authorize(credentials, req) {
        const res = await fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
