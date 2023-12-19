import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import { useState } from "react";

export default function SignIn({ providers }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn('credentials', {
            email,
            password
        })
    }

    return (
        <div style={{
            background: 'lightgrey',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
        }}>
            <form
                onSubmit={(e) => handleSubmit(e)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <br />
                    <input type="text" id="email" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Log in</button>
            </form>
            or
            <div>
                {Object.values(providers).map((provider) => {
                    if (provider.name === 'Credentials') return null;
                    return (
                        <div div key={provider.name} >
                            <button onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div >
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