import Footer from "@/components/footer"
import FooterRes from "@/components/footerres"
import Navbar from "@/components/navbar"
import Navbaresponsive from "@/components/navbarres"

const AppLayout = ({children}: any) => {
    return (
        <div className='flex flex-col bg-[#0f4146]'>
            <Navbar />
            <Navbaresponsive />
            <main>{children}</main>
            <Footer />
            <FooterRes />
        </div>
    )
}

export default AppLayout;