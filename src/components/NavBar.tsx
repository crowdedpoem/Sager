"use client"
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Layout() {
    const { data:session } = useSession()
    return (
        <nav className="fixed w-full border-b border-gray-700">
            <div className="flex items-center justify-start justify-between">
                <a href="/dashboard">
                    <h2 className="text-4xl font-bold tracking-light text-gray-700 p-5 pl-20">Sager</h2>
                </a>
                <h1>Hi there {session?.user?.name ?? "no user available"}</h1>
                {session === null ? <Link href='/login'>Log in now</Link> : <button onClick={() => signOut()}>Sign Out</button> } 
                {/* {session === null ? <button onClick={() => signOut()}>Sign Out</button> : <Link href='/login'>Log in now</Link>}     */}
                <button type="button" className="rounded-full pr-10" >
                <img className="w-10 h-10 rounded-full" src={session?.user?.image ?? "https://flowbite.com/docs/images/people/profile-picture-1.jpg"} alt="user photo" />
                </button>
            </div>
        </nav>
    )


}