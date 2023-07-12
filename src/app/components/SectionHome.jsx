import HomeImage from '@/app/assets/Home.png';
import Image from 'next/image';
import Link from 'next/link';

export default function SectionHome() {
    return (
        <>
            <section id="home">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-monospace tracking-tight leading-none md:text-5xl xl:text-6xl ">Explora y descubre con MicroeconAi</h1>
                        <p className="max-w-2xl mb-6 font-monospace lg:mb-8 md:text-lg lg:text-xl text-gray-400">Nuestra aplicación te permite explorar y descubrir información económica y financiera de manera rápida y precisa. Utilizando nuestro buscador avanzado, puedes obtener datos actualizados y relevantes para tus necesidades de investigación y análisis.</p>
                        <Link href="/auth/login" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border  rounded-lg  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                            Inicia sesion aqui
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image className='rounded-full' src={HomeImage} alt="home image"/>
                    </div>
                </div>
            </section>
        </>
    )
}