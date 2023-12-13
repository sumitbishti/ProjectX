import { useSession, signIn, signOut } from "next-auth/react"

const HomePage = () => {
  const { data: session } = useSession()
  // console.log(session)

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ margin: 'auto' }}>

        <h1>Hello, {session ? session.user.name : 'User'} </h1>
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )
        }

      </div>
    </div>
  )
}
export default HomePage