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
      {
        ...data, redirect: false
      })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error)
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Logged in successfully!')
        }
      })
  }

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url('https://steamuserimages-a.akamaihd.net/ugc/1678120729579339650/40A46978EF29C7099912D8CA459BBC9FAC764F2E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')`,
          height: "972px",
        }}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Log in
            </h2>

            <button
              type="button"
              onClick={() => signIn('google')}
              className="flex mx-auto mt-10 text-purple bg-white hover:bg-white/90 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-md px-6 py-3.5 text-center items-center">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
              </svg>
                Sign in with Google
            </button>
          </div>
        </div>

      </div>

    </>
  )
}