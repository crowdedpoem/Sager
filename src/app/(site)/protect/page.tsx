'use client'

import {useSession, signOut} from 'next-auth/react'
import {  useEffect } from "react"
import { useRouter } from "next/navigation"

const protect = () => {
    
    const { data: session, status } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/') 
          }
    })
    return(
        <div>
            <h1> Dashboard</h1>
            <p>Hi {session?.user?.name}</p>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )
}

export default protect