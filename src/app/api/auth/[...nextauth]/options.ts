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
          id: profile.sub.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.picture,
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
    // to use the role in client component
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    },
  },
}
