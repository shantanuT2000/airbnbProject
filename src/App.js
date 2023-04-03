import React,{useState} from 'react'
import HotelManagement from './components/HotelManagement';
import {Routes,Route} from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Header from './components/user-homepage-components/Header';
import General from './components/general-homepage-component/General'
import HotelManagementApp from './components/HotelManagementApp';



function App() {
  const navItems=[{id:1,path:"/signup",item:"Register"},{id:2,path:"/login",item:"Login"}];
  const[Navi,setNav] = useState(navItems);
  return (
    <div className="App">

    <NavBar Navi={Navi} />

    <Routes>
            <Route exact path='/' element={<HotelManagement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>

    </Routes>
    <hr />
   <Footer/>
  
    

  <Routes>
    <Route exact path='/' element={<General/>}></Route>
    <Route path='/Hotelpage' element={<HotelManagementApp/>}></Route>
  </Routes>
     
    </div>
  );
}

export default App;
