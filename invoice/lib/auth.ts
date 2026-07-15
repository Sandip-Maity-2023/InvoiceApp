import NextAuth,{DefaultSession} from "next-auth"
import Resend from "next-auth/providers/resend"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./mongodb-client"

//const client = new MongoClient(process.env.MONGODB_URI!)

declare module "next-auth" {
    interface Session{
        user: {
firstName: string;
lastName: string;
currency: string;
        } & DefaultSession["user"]
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [Resend({
    from:"Generate-Invoice <info@resend.sandipmaity.co.in>" 
  })],

  pages: {
    signIn: "/login",
    verifyRequest: "/verify-email",
    error: "/login",
  },
})