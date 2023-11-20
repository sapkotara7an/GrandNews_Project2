import { Outlet } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

const HomePageLayout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}

export default HomePageLayout;