import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Navbaresponsive from "@/components/navbarres"

const AppLayout = ({children}: any) => {
    return (
        <div className='flex flex-col bg-[#0f4146]'>
            <Navbar />
            <Navbaresponsive />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default AppLayout;