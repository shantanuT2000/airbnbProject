import React from 'react'
import HotelManagement from './HotelManagement';
import {Routes,Route} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import NavBar from './NavBar';
import Footer from './Footer';

const HotelManagementApp = () => {
  return (<>
    <NavBar />
    <Routes>
            <Route exact path='/' element={<HotelManagement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>

    </Routes>
    <hr />
   <Footer/>
   </>
  )
}

export default HotelManagementApp