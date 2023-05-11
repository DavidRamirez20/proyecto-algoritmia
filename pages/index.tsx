import InfoCards from '@/components/infoCards'
import MainLayout from '@/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <section className='flex flex-row h-2/6'>
        <div className='flex w-3/4 bg-green-800 mt-5 p-5'>
          <Image 
            src='/Recycling_Isometric.svg'
            width={800}
            height={1000} 
            alt="Logo greenfy"
          />
        </div>
        <></>
      </section>
      <section className='flex flex-row-reverse h-2/6 bg-gray-100'>
        <div className='flex'>
          <Image 
            src='/Artifical inteligence_Isometric.svg'
            width={800}
            height={1000}
            alt='Recycle'
            />
        </div>
        <div className='text-center'>
 
        </div>
      </section>
      <section className='flex h-2/6 bg-slate-200'>
        <div className='flex'>
          <ul className='flex flex-row content-center'>
            <InfoCards
              name='TUN'
              image='/next.svg'
              width={300}
              height={260} 
              detail='Trámite Único Notarial'
              backGround='green'
              backColor={500}
            />
            <InfoCards
              name='TUN'
              image='/next.svg'
              width={300}
              height={260} 
              detail='Trámite Único Notarial'
              backGround='green'
              backColor={500}
            
            />
            <InfoCards
              name='TUN'
              image='/next.svg'
              width={300}
              height={260} 
              detail='Trámite Único Notarial'
              backGround='green'
              backColor={500}
            />
          </ul>
        </div>
      </section>
    </MainLayout>
  )
}