import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Navbaresponsive from '../components/navbarres'
//import Footeresponsive from '../components/Footeresponsive'

const MainLayout = ({children}: any) => {
  return (
      <div className='flex flex-col bg-[#0f4146]'>
         <Navbar />
         <Navbaresponsive />
         <main className='h-sc'>{children}</main>
      </div>
   )
};

export default MainLayout;