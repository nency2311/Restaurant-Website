import React from 'react';
import Header from './Components/Header';
import "../src/assets/css/style.css";
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import Blog from './Components/Blog';
import Shop from './Components/Shop';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Scroll from './Components/ScrollTop';



export default function App() {
  return (
    <>
   <Header/>
   <Scroll />
   <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/aboutus' element={ <AboutUs/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
   </Routes>
   
  
   
   
  
   <Footer/>
     
    </>
  )
}
