import CarouselMov from '@/components/Carousel'
import InfoCards from '@/components/infoCards'
import MainLayout from '@/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home(document : any) {
  return (
    <MainLayout>
      <section className='flex lg:flex-row flex-col-reverse h-2/6'>
        <div className='flex lg:w-3/4 bg-[#196756] p-5 justify-center'>
          <Image 
            src='/Recycling_Isometric.svg'
            width={800}
            height={800}
            alt="Logo greenfy"
          />
        </div>
        <div className='flex lg:flex-row flex-col-reverse items-center lg:my-8 mx-16 lg:bg-[url("/PawPrint.png")] bg-no-repeat'>
          <ul className='flex flex-col'>
              <li className='hidden lg:block font-bold lg:text-6xl text-4xl font-cursive text-slate-50 text-center p-2'>GreenFy</li>
              <li className='font-semibold italic lg:text-4xl text-2xl text-green-100 text-center p-2'>Cuida el planeta, recicla con inteligencia.</li>
              <li className='font-semibold lg:text-2xl text-lg font-sans text-stone-200 italic text-end p-2'>con apoyo de intelegencia artificial</li>
          </ul>
        </div>
      </section>
      <section className='flex flex-col-reverse lg:flex-row-reverse h-2/6 bg-[#ddddd5] p-10'>
        <div className='flex justify-center'>
          <Image 
            src='/Artifical inteligence_Isometric.svg'
            width={600}
            height={800}
            alt='Recycle'
            />
        </div>
        <div className='flex lg:flex-row flex-col-reverse lg:my-8 lg:mx-16 lg:w-3/5'>
          <ul className='flex flex-col'>
              <li className='font-bold lg:text-4xl text-2xl font-cursive text-green-50 lg:text-left text-center p-2'>
                Potenciando el reciclaje con Inteligencia Artificial: Una guía inteligente para un futuro sostenible
              </li>
              <li className='font-semibold italic lg:text-xl text-lg text-slate-600 text-justify p-2'>
                Nuestra aplicación utiliza inteligencia artificial para brindarte una guía personalizada y precisa en el reciclaje, 
                permitiéndote identificar los materiales, conocer los puntos de reciclaje cercanos y recibir consejos inteligentes para maximizar 
                tu impacto ambiental. ¡Reciclar nunca había sido tan fácil y efectivo!
              </li>
          </ul>
        </div>
      </section>
      <section className='h-2/6 bg-[#196756]'>
        <div className='bg-[url("/Bush.png")] bg-cover overflow-hidden' data-value='1'>
          <ul className='hidden lg:flex flex-row justify-evenly items-center'>
            <InfoCards
              name='phone'
              image='/resultrecog3.png'
              width={230}
              height={200} 
            />
            <InfoCards
              name='tablet'
              image='/resultrecog2.png'
              width={450}
              height={300}          
            />
            <InfoCards
              name='pc'
              image='/resultrecog1.png'
              width={590}
              height={200}
            />
          </ul>
          <CarouselMov />
        </div>
        <p className='py-2 px-5 lg:text-center text-justify font-serif text-gray-800 lg:text-lg bg-white/75'>
          Descubre la libertad de reciclar en cualquier momento y en cualquier lugar con nuestra aplicación de reciclaje: la herramienta fácil de 
          usar y compatible con todos los dispositivos que te permite aprender, practicar y contribuir activamente al cuidado del medio ambiente desde 
          la comodidad de tu teléfono móvil, tablet o computadora.
        </p>
      </section>
    </MainLayout>
  )
}