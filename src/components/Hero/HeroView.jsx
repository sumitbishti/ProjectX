'use client'
import { Code, Text } from '@radix-ui/themes'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const HeroView = () => {
  return (
    <>
      <Text as="p"></Text>
      <Code>console.log('Hero View')</Code>
      <Button onClick={() => signOut()}>Sign Out</Button>
      <Alert variant="destructive">
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Project work in progress
        </AlertDescription>
      </Alert>
    </>
  )
}
export default HeroView
