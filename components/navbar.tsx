import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
   return (
      <nav className="hidden lg:flex flex-row justify-between p-10 md shadow-lg">
         <div>
            <Link href='/'>
                  <Image 
                     src='/next.svg'
                     width={170}
                     height={65} 
                     alt="Logo greenfy"
                  />
            </Link>
         </div>
         <ul className='flex flex-row justify-end items-center'>
            <Route name='Nosotros' route='/us'/>
            <Route name='Marcas' route='/trademarks'/>
            <li>
               <Link href='/recyclepage'>
                  <button className='w-35 px-3 py-1 border border-slate-400 rounded-xl text-gray-300 font-bold shadow-md hover:shadow-lg hover:scale-105'>! A Reciclar !</button>
               </Link>
            </li>
         </ul>
      </nav>
   )
}

const Route = ({route, name}: any) => {
   return (
      <Link href={route}>
         <li className='lg:mr-16 font-bold text-gray-200 hover:text-gray-50 hover:cursor-pointer'>{name}</li>
      </Link>
   )
}

export default Navbar;