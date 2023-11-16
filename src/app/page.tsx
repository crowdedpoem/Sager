'use client'
import User from './components/user'

import { useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data:session } = useSession()
  return (
  <section>
        <div>
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
    <User/>
  </section>
  )
}
