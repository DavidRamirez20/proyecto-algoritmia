import React, {useState} from 'react'
import Link from 'next/link';

const Navbaresponsive = () => {
   const [navegation, setNavegation] = useState(false);
      return (
         <div 
            className='lg:hidden bg-[#0f4146]'
               onClick={() => {
                  setNavegation(!navegation);
               }}
         >
            <i 
               className={`mx-3 my-3 fas fa-${
                  navegation ? 'times' : 'bars'
               } hover:text-gray-200 cursor-pointer`}
            />
            <p className='text-center text-xl font-bold italic text-gray-200'>RECICLAJE</p>
               {navegation && (
                  <ul className='mx-10 my-5 flex flex-col'>
                     <Link href='/'>
                        <li className='text-center'><i className="fas fa-light fa-recycle text-gray-200"></i></li>
                     </Link>
                     <ResponsiveRoute name='Nosotros' route='/us'/>
                     <ResponsiveRoute name='Marcas' route='/trademarks'/>
                  </ul>
               )}
         </div>
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