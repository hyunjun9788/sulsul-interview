import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';

type ExtendedUser = User & {
  accessToken: string;
  refreshToken: string;
};

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    KakaoProvider({
      clientId: process.env.AUTH_KAKAO_ID ?? '',
      clientSecret: process.env.AUTH_KAKAO_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? '',
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? '',
    }), // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const extendedUser = user as ExtendedUser;
        return {
          ...token,
          accessToken: extendedUser.accessToken,
          refreshToken: extendedUser.refreshToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
        session.refreshToken = token.refreshToken as string;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };
