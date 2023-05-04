import Navbar from '../components/navbar'
//import Footer from '../components/Footer'
//import Navbaresponsive from '../components/Navbaresponsive'
//import Footeresponsive from '../components/Footeresponsive'

const MainLayout = ({children}: any) => {
  return (
      <div className='flex flex-col'>
         <Navbar />
         <main>{children}</main>
      </div>
   )
};

export default MainLayout;