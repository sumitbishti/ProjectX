import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignIn({ providers }) {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}
export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);
    const providers = await getProviders();

    if (session) {
        return { redirect: { destination: "/" } };
    }

    return {
        props: { providers: providers ?? [] },
    }
}