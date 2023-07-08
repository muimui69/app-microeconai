import Image from 'next/image';

import holker from '@/app/assets/holker.webp'
import josecarlos from '@/app/assets/josecarlos.webp'
import moiso from '@/app/assets/moiso.webp'
import sebas from '@/app/assets/sebas.webp'

export default function AbaoutPage() {
    const avatar = [
        {
            img: moiso,
            name: "Moises Reinaldo Reyes Flores",
            subtitle: "Estudiante de Ingenieria en Sistemas",
            paragraph: "Cursando 6to semestre de la carrera en la FICCT."
        },
        {
            img: sebas,
            name: "Sebastian Salvador Blanco Vaca",
            subtitle: "Estudiante de Ingenieria en Sistemas",
            paragraph: "Cursando 6to semestre de la carrera en la FICCT."
        },
        {
            img: holker,
            name: "Holker Yeshib Rocha Peña",
            subtitle: "Estudiante de ingenieria en sistemas",
            paragraph: "Cursando 7mo semestre de la carrera en la FICCT."
        },
        {
            img: josecarlos,
            name: "Jose Carlos Hurtado Ardaya",
            subtitle: "Estudiante de ingenieria en sistemas",
            paragraph: "Cursando 5to semestre de la carrera en la FICCT."
        },
    ]

    return (
        <>
            <section className='mx-auto'>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestro Equipo de Trabajo</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore y disfrute la experiencia de probar nuestro buscador MicroEconAi,echo con las tecnolgoias de: la api de Open Ai,Next js de Vercel,Node y Firebase.
                        </p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {
                            avatar.map(({ img, name, subtitle, paragraph }, index) => (
                                <div key={index} className="items-center bg-gray-700 rounded-lg shadow sm:flex">
                                    <div className="w-full">
                                        <Image
                                            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                                            src={img}
                                            alt={name}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {name}
                                        </h3>
                                        <span className="text-gray-500 dark:text-gray-400">{subtitle}</span>
                                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                            {paragraph}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}