import Image from 'next/image';
import logo from '@/app/assets/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { CiLock } from 'react-icons/ci';


export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="flex flex-col items-center justify-center text-2xl mb-5">
          <Image src={logo} width={70} height={10} />
          <h1 className='py-4'>MicroEconAI</h1>
        </div>
        <div className="px-5 py-7">
          <label className="font-semibold text-sm text-c-blanco pb-1 block">Correo electronico</label>
          <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-black text-sm w-full" />
          <label className="font-semibold text-sm text-c-blanco pb-1 block">Contraseña</label>
          <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-black text-sm w-full" />
          <button type="button" className="transition duration-200 bg-c-guindo hover:bg-c-guindo-h focus:bg-c-guindo-h1 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            Iniciar sesion
          </button>
        </div>
        <div className="p-4">
          <p className='flex py-2 text-c-blanco items-center justify-center'>O inicia sesion con:</p>
          <button type="button" className="transition bg-c-gris-c duration-200  text-c-negro w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">
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
              Aun no tienes cuenta? <span className="border-b-2 border-white">Registrate aqui</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}