'use client'
import Image from 'next/image';
import logo from '@/app/assets/logo.webp';
import { FcGoogle } from 'react-icons/fc';
import { CiLock } from 'react-icons/ci';
import { useState } from 'react';
import { useContextProvider } from '../../context/ContextProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {

  const navigate = useRouter();

  const { login ,loginWithGoogle} = useContextProvider();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log({ [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const buttonSelectId = e.nativeEvent.submitter.id;
    if (buttonSelectId === 'register') {
      navigate.push('/auth/register');
    } else {
      try {
        await login(user.email, user.password);
        navigate.push('/model');
      } catch (err) {
        console.log(err)
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12">
      <form onSubmit={handleSubmit} className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="flex flex-col items-center justify-center text-2xl mb-5">
          <Image alt='logo' src={logo} width={70} height={10} priority />
          <h1 className='py-4'>MicroEconAI</h1>
        </div>
        <div className="px-5 py-7">
          <label className="font-semibold text-sm text-c-blanco pb-1 block">Correo electronico</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-black text-sm w-full" />
          <label className="font-semibold text-sm text-c-blanco pb-1 block">Contraseña</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-black text-sm w-full" />
          <button type="submit" className="transition duration-200 bg-c-guindo hover:bg-c-guindo-h focus:bg-c-guindo-h1 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            Iniciar sesion
          </button>
        </div>
        <div className="p-4">
          <p className='flex py-2 text-c-blanco items-center justify-center'>O inicia sesion con:</p>
          <button type="button" onClick={()=>loginWithGoogle()} className="transition bg-c-gris-c duration-200  text-c-negro w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
            <FcGoogle className="w-5 h-5 inline-block align-text-top p-0" />
            Google
          </button>
        </div>
        <div className="py-4">
          <div className="text-center whitespace-nowrap">
            <CiLock className="w-5 h-5 inline-block align-text-top" />
            <span className="text-c-blanco inline-block ml-1">Olvido su Contraseña?</span>
          </div>
        </div>
        <div className="py-4">
          <div className="text-center whitespace-nowrap">
            <span className="text-c-blanco ml-1">
              Aun no tienes cuenta? <Link href="/auth/register" className="border-b-2 border-white">Registrate aqui</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}