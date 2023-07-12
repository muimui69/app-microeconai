import Image from 'next/image';

import holker from '@/app/assets/holker.webp'
import josecarlos from '@/app/assets/josecarlos.webp'
import moiso from '@/app/assets/moiso.webp'
import sebas from '@/app/assets/sebas.webp'
import marcos from '@/app/assets/marcos.webp'


export default function SectionAbaoutUs() {
    const avatar = [
        {
            img: moiso,
            name: "Moises Reyes",
            ocp: 'Web Developer'
        },
        {
            img: sebas,
            name: "Sebastian Blanco",
            ocp: 'Web Designer'
        },
        {
            img: marcos,
            name: "Marcos Dury",
            ocp: 'SEO & Marketing'
        },
        {
            img: holker,
            name: "Holker Rocha",
            ocp: 'Web Content Writer'
        },
        {
            img: josecarlos,
            name: "Jose Hurtado",
            ocp: 'Web Content Writer'
        },
    ]

    return (
        <>
            <section  id="aboout-us" >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight  font-monospace">Nuestro equipo de trabajo</h2>
                        {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p> */}
                    </div>

                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            avatar.map(({ img, name, ocp }, index) => (
                                <div key={index} className="text-center text-gray-400">
                                    <Image className="mx-auto mb-4 w-36 h-36 rounded-full" src={img} alt="team img" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {name}
                                    </h3>
                                    <p>{ocp}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}