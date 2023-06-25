import Link from 'next/link';

const links = [
    {
        label: 'Inicio',
        route: '/'
    },
    {
        label: 'Sobre nosotros',
        route: '/about'
    }
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
                </div>
            </nav>
        </header>
    )
}