import React,{useState} from 'react'

import {Routes,Route} from 'react-router-dom';


import Header from './components/user-homepage-components/Header';
import General from './components/general-homepage-component/General'
import HotelManagementApp from './components/HotelManagementApp';


function App() {
  
  return (
    

   
  
    
<div className="App">
  <Routes>
    <Route exact path='/' element={<General/>}></Route>
    <Route path='/Hotelpage' element={<HotelManagementApp/>}></Route>
    <Route path='/userpage'element={<Header/>}></Route>
  </Routes>
     
    </div>
  );
}

export default App;