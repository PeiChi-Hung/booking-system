import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { GoogleProfile } from "next-auth/providers/google"

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile) {
        console.log(profile)
        return {
          ...profile,
          id: profile.sub,
          role: profile.role ?? "user",
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    },
  },
}
