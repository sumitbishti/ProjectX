import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "sumit" },
                password: { label: "Password", type: "password", placeholder: '1234' }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                console.log(credentials, req)
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // custom pages for your signin/signout flow
    pages: {
        // signIn: '/auth/signin'
    }
}
export default NextAuth(authOptions);