'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import g_logo from './g_login.svg';



export default function Login() {
    const session = useSession()
    const router = useRouter()
    const [data, setData] = useState({
            email: '',
            password: ''
            })


            useEffect(() => {
                if (session?.status === 'authenticated') {
                   router.push('/dashboard') 
                }
            })

            const loginUser = async (e: { preventDefault: () => void }) => {
                e.preventDefault()
                signIn('credentials',
                 {...data, redirect: false
                })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error(callback.error)
                    }

                    if(callback?.ok && !callback?.error) {
                        toast.success('Logged in successfully!')
                    }
                } )
            }

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Into Your Account With Google
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1>Sign into Google</h1>
            <button onClick={() => signIn('google')} className="flex items-center bg-gray-400 text-white w-full p-2">
  <img src={g_logo.src} alt="Google Login" className="mr-6" />
  Sign in with Google
</button>

          </div>
        </div>
      </>
    )
  }