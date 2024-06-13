import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './Constants/Hero.jsx'
import Homepage from './Screens/Homepage.jsx'
import Header from './Screens/Header.jsx'
import Contact from './Screens/Contact.jsx'
import AboutUs from './Screens/AboutUs.jsx'
import Resources from './Screens/Resources.jsx'
import Services from './Screens/Services.jsx'
import Audit from './Screens/Audit.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<Homepage />}/>
      <Route  path='/hello' element={<Homepage/>}/>
      <Route  path='/header' element={<Header />}/>
      <Route  path='/hero' element={<Hero />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/aboutus' element={<AboutUs />}/>
      <Route  path='/audit' element={<Audit />}/>
      <Route  path='/resources' element={<Resources />}/>
      <Route  path='/services' element={<Services />}/>

      </Route>
)
)