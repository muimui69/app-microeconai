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
            ocp: 'Desarrollador Web'
        },
        {
            img: sebas,
            name: "Sebastian Blanco",
            ocp: 'Diseñador UI/UX'
        },
        {
            img: marcos,
            name: "Marcos Dury",
            ocp: 'SEO & Marketing'
        },
        {
            img: holker,
            name: "Holker Rocha",
            ocp: 'Redactor de Contenido Web'
        },
        {
            img: josecarlos,
            name: "Jose Hurtado",
            ocp: 'CO-SEO & Redactor de Contenido Web'
        },
    ]

    return (
        <>
            <section id="aboout-us" >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight  font-monospace">Nuestro equipo de trabajo</h2>
                        <p className="font-monospace sm:text-xl text-gray-400">
                        Nuestro equipo de trabajo está compuesto por brillantes estudiantes de la Facultad de Ingenieria en Ciencias de la Computacion y Telecomunicaciones.
                        Estamos formados por estudiantes apasionados, comprometidos con la excelencia académica y con un deseo incansable de superación. Juntos, combinamos nuestra creatividad, habilidades y conocimientos para abordar desafíos complejos y encontrar soluciones innovadoras. 
                        </p>
                    </div>

                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {
                            avatar.map(({ img, name, ocp }, index) => (
                                <div key={index} className="text-center text-gray-400">
                                    <Image className="mx-auto mb-4 w-36 h-36 rounded-full" src={img} alt="team img" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
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