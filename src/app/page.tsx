'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button, Heading, Flex } from '@radix-ui/themes'

export default function HomePage() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div>
        <Button onClick={() => signIn()}>Sign In</Button>
      </div>
    )
  }
  return (
    <div style={{ height: '70vh', display: 'flex' }}>
      <div style={{ margin: 'auto' }}>
        <Flex className="py-10 px-10 rounded-md border border-solid border-black" direction='column' gap='3' align='center'>
          <Heading size='6'>Hello, {session ? session.user.name : 'User'} </Heading>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </Flex>
      </div>
    </div>
  )
}
