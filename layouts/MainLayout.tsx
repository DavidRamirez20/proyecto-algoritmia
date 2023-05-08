import Navbar from '../components/navbar'
import Footer from '../components/footer'
//import Navbaresponsive from '../components/Navbaresponsive'
//import Footeresponsive from '../components/Footeresponsive'

const MainLayout = ({children}: any) => {
  return (
      <div className='flex flex-col bg-[#0f4146]'>
         <Navbar />
         <main>{children}</main>
         <Footer />
      </div>
   )
};

export default MainLayout;