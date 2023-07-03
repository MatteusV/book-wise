import bannerLogin from '@/assets/bannerLogin.png'
import google from '@/assets/googleIcon.svg'
import github from '@/assets/githubIcon.svg'
import rocket from '@/assets/rocketIcon.svg'

import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import Router from 'next/router'

export default function Login() {
  const session = useSession()

  if (session.status === 'authenticated') {
    Router.push('/home')
  }

  async function handleConnectGoogle() {
    await signIn('google')
    Router.push('/home')
  }
  async function handleConnectGithub() {
    await signIn('github')
    Router.push('/home')
  }

  function handleConnectVisitor() {
    Router.push('/home')
  }
  return (
    <div className="w-screen h-screen flex text-gray-100 ">
      <aside className="w-1/3 flex flex-col justify-center p-3 pr-0 ">
        <Image className="h-screen w-max" src={bannerLogin} alt="" />
      </aside>
      <main className="flex flex-1 justify-center items-center">
        <div className="">
          <h1 className="font-bold mb-1 text-white">Boas vindas!</h1>
          <p className="mb-6 text-gray-100">
            Faça seu login ou acesse como visitante
          </p>

          <nav id="login" className="space-y-8">
            <div
              onClick={handleConnectGoogle}
              className="flex w-96 gap-4 justify-home items-center bg-gray-600 rounded-md p-5 hover:cursor-pointer hover:bg-gray-500"
            >
              <Image src={google} alt="" />
              <h1>Entrar com Google</h1>
            </div>
            <div
              onClick={handleConnectGithub}
              className="flex  gap-4 justify-home items-center bg-gray-600 rounded-md p-5 hover:cursor-pointer hover:bg-gray-500"
            >
              <Image src={github} alt="" />

              <h1>Entrar com Github</h1>
            </div>
            <div
              onClick={handleConnectVisitor}
              className="flex gap-4 justify-home items-center bg-gray-600 rounded-md p-5 hover:cursor-pointer hover:bg-gray-500"
            >
              <Image src={rocket} alt="" />

              <h1>Acessar com visitante</h1>
            </div>
          </nav>
        </div>
      </main>
    </div>
  )
}
