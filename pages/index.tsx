import InfoCards from '@/components/infoCards'
import MainLayout from '@/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <section className='flex flex-row h-2/6'>
        <div className='flex w-3/4 bg-[#196756] p-5'>
          <Image 
            src='/Recycling_Isometric.svg'
            width={800}
            height={800}
            alt="Logo greenfy"
          />
        </div>
      </section>
      <section className='flex flex-row-reverse h-2/6 bg-[#ddddd5] p-10'>
        <div className='flex mr-10'>
          <Image 
            src='/Artifical inteligence_Isometric.svg'
            width={600}
            height={800}
            alt='Recycle'
            />
        </div>
        <div className='text-center'>
        </div>
      </section>
      <section className='h-2/6 bg-[#196756] p-8'>
        <ul className='flex flex-row justify-evenly mb-5'>
          <InfoCards
            name='phone'
            image='/resultrecog3.png'
            width={300}
            height={200} 
          />
          <InfoCards
            name='phone'
            image='/resultrecog3.png'
            width={300}
            height={200}          
          />
          <InfoCards
            name='phone'
            image='/resultrecog3.png'
            width={300}
            height={200}
          />
        </ul>
        <p className='py-1 px-5 lg:text-center text-justify font-serif text-gray-200 lg:text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis nostrum quae soluta non dolorum ea earum corporis minus alias accusantium tempora vero ex esse rem, voluptatum omnis sapiente mollitia!
        </p>
      </section>
    </MainLayout>
  )
}