import { useSession, signIn, signOut } from "next-auth/react"
import clientPromise from "../db"

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise
    const db = client.db('sample_mflix');
    const collection = db.collection('movies')
    const docs = await collection.find().toArray();

    return {
      props: {
        isConnected: true,
        docs: JSON.parse(JSON.stringify(docs))
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

const HomePage = ({ isConnected, docs }) => {
  const { data: session } = useSession()
  // console.log(docs)

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ margin: 'auto' }}>

        {isConnected ? (
          <h2 >You are connected to MongoDB</h2>
        ) : (
          <h2 >
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}

        <h1>Hello, {session ? session.user.name : 'User'} </h1>

        {session ? (
          <div>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}

      </div>
    </div>
  )
}
export default HomePage