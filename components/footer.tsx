import Image from "next/image";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className="flex flex-row justify-between m-5 p-5">
         <div>
            <span className='lg:mr-16 font-bold text-gray-200 hover:text-gray-50 hover:cursor-pointer'>Proyecto Algoritmia I</span>
         </div>
         <ul className='flex flex-row justify-end items-center'>
            <Route name='Privacidad' route='/us'/>
            <Route name='Marcas' route='/trademarks'/>
            <li>
               <button className='w-35 px-3 py-1 border border-slate-400 rounded-xl text-gray-300 font-bold shadow-md hover:shadow-lg hover:scale-105'>! A Reciclar !</button>
            </li>
         </ul>
      </footer>
   )
}

const Route = ({route, name}: any) => {
   return (
      <Link href={route}>
         <li className='lg:mr-16 font-bold text-gray-200 hover:text-gray-50 hover:cursor-pointer'>{name}</li>
      </Link>
   )
}

export default Footer;