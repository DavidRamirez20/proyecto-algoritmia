import MainLayout from '@/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <section className='flex flex-row h-2/6'>
        <div className='flex w-3/4 bg-slate-500 mt-5 p-5'>
          <Image 
            src='/next.svg'
            width={170}
            height={65} 
            alt="Logo greenfy"
          />
        </div>
        <></>
      </section>
      <section className='flex h-2/6 bg-gray-100'>
        <div>

        </div>
      </section>
      <section className='flex h-2/6 bg-slate-200'>
        <div>
        </div>
      </section>
    </MainLayout>
  )
}