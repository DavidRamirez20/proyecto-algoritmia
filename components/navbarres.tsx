import React, {useState} from 'react'
import Link from 'next/link';

const Navbaresponsive = () => {
   const [navegation, setNavegation] = useState(false);
   return (
      <>
         <div 
            className='lg:hidden bg-[#0f4146] flex flex-row justify-between items-center'
            onClick={() => {
               setNavegation(!navegation);
            }}
            >
            <i 
               className={`m-3 fas fa-${
                  navegation ? 'times' : 'bars'
               } text-gray-200 cursor-pointer`}
               />
            <Link href='/'>
               <p className='text-xl font-bold italic text-gray-200 m-3 pr-2'>GREENFY</p>
            </Link>
         </div>
         {navegation && (
            <ul className='mx-5 mb-2 py-2 flex flex-col rounded-lg shadow-2xl'>
               <Link href='/recyclepage'>
                  <li className='text-center'>
                     <i className="fas fa-light fa-recycle text-gray-200 pr-2"/>
                     <span className='text-gray-200'>A Reciclar</span>
                  </li>
               </Link>
               <ResponsiveRoute name='Nosotros' route='/us'/>
               <ResponsiveRoute name='Marcas' route='/trademarks'/>
            </ul>
         )}
      </>
   )
}

const ResponsiveRoute = ({route, name}: any) => {
   return (
      <Link href={route}>
         <li className='text-gray-200 text-center'>{name}</li>
      </Link>
   )
}

export default Navbaresponsive;