import React from "react"
import { Banner } from "../../Components/HomeComponents/Banner"
import { Footer } from "../../Components/HomeComponents/Footer"
import { NavBar } from "../../Components/HomeComponents/NavBar"
export const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Footer/>
        </div>
    )
}