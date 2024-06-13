import React from 'react'
import Hero from "./Hero"
import Header from "../Constants/Header"
import Services from "./Services"
import Resources from "./Resources"
import AboutUs from "./AboutUs"
import Contact from "../Constants/Contact"

const Homepage = () => {
 

return (
    <>
    <Header/>
    <Hero/>
    <AboutUs />
    <Services/>
    <Resources/>
    <Contact/>
    </>
  )
}
export default Homepage