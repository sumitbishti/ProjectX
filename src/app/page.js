'use client'
import { useSession } from "next-auth/react"
import HomePage from "./Homepage"

export default function Home() {
  const { data: session } = useSession()

  return (
    <HomePage />
  )
}
