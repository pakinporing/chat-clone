import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { isLoading, error, user } = useUser()

  if (isLoading) { return <div>Loading...</div> }
  if (error) { return <div>{error.message}</div> }
  console.log('user', user)

  return (
    <>
      <Head>
        <title>ChatGPT login or logout</title>
      </Head>

      <div className='flex justify-center items-center min-h-screen w-full bg-gray-800 text-white text-center'>
        <div>
          {!!user && <Link href="/api/auth/logout">LogOut</Link>}
          {!user && (
            <>
              <Link href="/api/auth/login" className=' rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600'>Login</Link>
              <Link href="/api/auth/signup" className=' rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600'>Sign up</Link>
            </>
          )}
        </div>

      </div>
    </>
  )
}
