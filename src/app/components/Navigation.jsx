import Link from 'next/link';
import { CiLogout } from 'react-icons/ci';

const links = [
    {
        label: 'Buscador',
        route: '/model'
    },
    {
        label: 'Historial',
        route: '/model/history'
    },
    {
        label: 'Sobre nosotros',
        route: '/model/about'
    },
]

export default function Navigation() {
    return (
        <header>
            <nav className='mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8'>
                <div className='flex  gap-x-12 pr-35'>
                    {
                        links.map(({ label, route }) => (
                            <Link
                                key={label}
                                href={route}
                                className='text-xl font-semibold leading-6 text-white border-b-2 border-transparent hover:border-white'
                            >
                                {label}
                            </Link>
                        ))
                    }
                    <button type="button" className="transition bg-c-gris-c duration-200 p-2 text-c-negro font-semibold leading-6 rounded-lg text-xl shadow-sm hover:shadow-md">
                        <CiLogout className="w-5 h-5 inline-block align-text-top p-0 mr-2" />
                        Cerrar Sesion
                    </button>
                </div>
            </nav>
        </header>
    )
}