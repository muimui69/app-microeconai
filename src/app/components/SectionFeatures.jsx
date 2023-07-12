import FeaturesImage from '@/app/assets/features.png'
import Image from 'next/image'

export default function SectionFeatures() {
    return (
        <>
            <section id="features">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <Image className="w-full rounded-3xl" src={FeaturesImage} alt="features image" />
                    <Image className="w-full hidden rounded-3xl" src={FeaturesImage} alt="features image" />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-monospace ">Potenciado por tecnologías de vanguardia</h2>
                        <p className="mb-6 font-light font-monospace md:text-lg text-gray-400">
                            MicroeconAi está construido utilizando tecnologías modernas para brindarte la mejor experiencia. Hemos elegido Next.js como framework de desarrollo, que nos permite crear una aplicación de página única (SPA) con un enrutamiento eficiente y una carga rápida. Utilizamos Firebase para el alojamiento y la gestión de datos en tiempo real, lo que garantiza una respuesta ágil y confiable. Además, hemos aprovechado las capacidades de Tailwind CSS para diseñar una interfaz atractiva y receptiva.
                        </p>
                        <h2 className="mb-4 text-4xl tracking-tight font-monospace"> Integración con OpenAI API</h2>
                        <p className="mb-6 font-light font-monospace md:text-lg text-gray-400">
                            Hemos integrado la potente API de OpenAI en MicroeconAi para brindarte características avanzadas de procesamiento del lenguaje natural. Esto nos permite ofrecerte funcionalidades inteligentes y personalizadas, como resúmenes automáticos, generación de texto basada en IA y más.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}