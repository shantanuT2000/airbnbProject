import React from 'react'

import {Routes,Route} from 'react-router-dom';


import Header from './components/user-homepage-components/Header';
import General from './components/general-homepage-component/General'
import HotelManagementApp from './components/HotelManagementApp';
import Signup from './components/Signup';
import Login from './components/Login';
import { createContext } from 'react';
export const AppContext = createContext();

function App() {
  const navItems=[{id:1,path:"/signup",item:"Register"},{id:2,path:"/login",item:"Login"}];
  
  return (
  <AppContext.Provider value={{navItems}}>
  <div className="App">
  <Routes>
    <Route exact path='/' element={<General/>}></Route>
    <Route path='/Hotelpage' element={<HotelManagementApp/>}></Route>
    <Route path='/userpage'element={<Header/>}></Route>
    <Route path='/signup'element={<Signup/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
    
  </Routes>
     
    </div>
    </AppContext.Provider>
  );
}

export default App;