import React from 'react'
import HotelManagement from './components/HotelManagement';
import {Routes,Route} from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
            <Route exact path='/' element={<HotelManagement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>

    </Routes>
    <hr />
   <Footer/>
    
     
    </div>
  );
}

export default App;
