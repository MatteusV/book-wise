/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Router from 'next/router'
import logo from '@/assets/Logo.png'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'

export function Sidebar() {
  const session = useSession()

  const user = session.data?.user

  const arrName = user?.name!.split(' ')
  const firstName = arrName![0]
  return (
    <aside className="flex flex-col text-white justify-between items-center w-56 h-screen p-2 m-2 rounded-md bg-gradient-to-t to-green-300 from-gray-600">
      <div>
        <div className="-ml-4">
          <Image src={logo} width={150} alt="" />
        </div>

        <nav className="flex flex-col justify-start items-start gap-8 mt-16">
          <a
            href="#"
            className=" flex justify-center items-center gap-2  hover:text-green-100 "
          >
            <ChartLineUp size={25} /> Início
          </a>
          <a
            href="#"
            className="flex justify-center items-center gap-2  hover:text-green-100"
          >
            <Binoculars size={25} /> Explorar
          </a>

          {user ? (
            <a
              href="#"
              className="flex justify-center items-center gap-2  hover:text-green-100"
            >
              <User size={25} /> Perfil
            </a>
          ) : (
            ''
          )}
        </nav>
      </div>
      {user ? (
        <div
          onClick={() => Router.push('/')}
          className="flex justify-between gap-4 items-center"
        >
          <Image
            className="rounded-full border border-white"
            src={user?.image ? user.image : ''}
            width={30}
            height={30}
            alt=""
          />
          <span>{firstName}</span>
          <SignOut
            onClick={() => signOut()}
            fill="red"
            className="text-red hover:cursor-pointer"
            size={30}
          />
        </div>
      ) : (
        <button className="flex justify-between items-center gap-4">
          Fazer login
          <SignIn onClick={() => Router.push('/')} className="" size={30} />
        </button>
      )}
    </aside>
  )
}
