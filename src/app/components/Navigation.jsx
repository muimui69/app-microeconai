'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

import {
    AiOutlineHome,
    AiOutlineQuestionCircle,
    AiOutlineHistory
} from 'react-icons/ai';

import {
    LuLogOut
} from 'react-icons/lu';

const links = [
    {
        label: 'Buscador',
        route: '/model',
        icon: <AiOutlineHome className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
        label: 'Historial',
        route: '/model/history',
        icon: <AiOutlineHistory className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
        label: 'Sobre nosotros',
        route: '/model/about',
        icon: <AiOutlineQuestionCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    },
]

export default function Navigation() {

    const pathname = usePathname();
    const [select, setSelect] = useState(pathname);

    useEffect(() => {
        setSelect(pathname)
    }, [pathname]);

    return (
        <div className="bg-c-negro px-2 lg:px-4 py-2 lg:min-h-screen min-h-0 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
            <nav className="flex items-start lg:items-stretch flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                {
                    links.map(({ label, route, icon }) => (
                        <Link
                            key={label}
                            href={route}
                            onClick={() => setSelect(pathname)}
                            className={`text-white p-4 inline-flex justify-center rounded-md ${select === route ? 'bg-c-guindo' : 'hover:bg-c-guindo'} `}>
                            {icon}
                        </Link>
                    ))
                }
            </nav>
            <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                <button type="submit">
                    <LuLogOut className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </button>
            </div>
        </div >
    )
}