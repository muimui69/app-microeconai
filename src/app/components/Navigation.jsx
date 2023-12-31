'use client'
import Link from 'next/link';
import Logo from '../assets/logo.webp'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContextProvider } from '../context/ContextProvider';
import { useRouter } from 'next/navigation';

const links = [
    {
        label: 'Inicio',
        anchor: '#home',
    },
    {
        label: 'Características',
        anchor: '#features',
    },
    {
        label: 'Nuestro equipo',
        anchor: '#aboout-us',
    },
];

const linksUser = [
    {
        label: 'Buscador',
        to: '/model'
    },
    {
        label: 'Historial',
        to: '/model/history'
    }
];

export default function Navigation() {

    const pathname = usePathname();
    const navigation = useRouter();
    const { user, logout } = useContextProvider();

    if (pathname === '/auth/login' || pathname === '/auth/register') {
        return null;
    }

    const handleLogout = async()=>{
        await logout();
        navigation.push('/');
    }

    return (
        <header>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div href="https://flowbite.com" className="flex items-center">
                        <Image src={Logo} className="mr-3 h-10 w-10 sm:h-9 " alt="microeconai logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">MicroeEconAi</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        {
                            !user ?
                                <Link href="/auth/login" className="text-white hover:bg-c-gris-c focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none hover:text-black">Iniciar Sesion</Link>
                                :
                                <button onClick={() => handleLogout()} className="text-white hover:bg-c-gris-c focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none hover:text-black">Cerrar Sesion</button>
                        }

                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden focus:outline-none  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                !user ?
                                    links.map(({ label, anchor }, index) => (
                                        <li key={index}>
                                            <Link href={anchor} scroll={false} className="block py-2 pr-4 pl-3 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400  hover:text-white  border-gray-700">
                                                {label}
                                            </Link>
                                        </li>
                                    ))
                                    :
                                    linksUser.map(({ label, to }, index) => (
                                        <li key={index}>
                                            <Link href={to} scroll={false} className="block py-2 pr-4 pl-3 border-b hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400  hover:text-white  border-gray-700">
                                                {label}
                                            </Link>
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}