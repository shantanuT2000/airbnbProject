import React from 'react'
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
  return (
    <div className="App">

  <Routes>
    <Route exact path='/' element={<General/>}></Route>
    <Route path='/Hotelpage' element={<HotelManagementApp/>}></Route>
  </Routes>
     
    </div>
  );
}

export default App;
