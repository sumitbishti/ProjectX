import { useSession, signIn, signOut } from 'next-auth/react';
import Layout from '@/components/layout';

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <Layout includeLayout={true}>
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ margin: 'auto' }}>
          <h1>Hello, {session ? session.user.name : 'User'} </h1>

          {!session && (
            <div>
              <button onClick={() => signIn()}>Sign in</button>
            </div>
          )}  

          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;
