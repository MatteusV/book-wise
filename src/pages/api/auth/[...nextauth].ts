import { env } from '@/env'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_PUBLIC_ID,
      clientSecret: env.GOOGLE_SECRET_ID,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
