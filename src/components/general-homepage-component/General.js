import React,{useState} from 'react'
import Buttons from '../Buttons'
import '../css/Hotel.css'
import NavBar from '../NavBar'
import Carousals from './Carousals'
import Footer1 from './Footer1'

const General = ()  => {
  const navItem = [{id:1,item:""}]
const[data,setdata]=useState(navItem);
  return (
    <>
    <NavBar Navi={data}/>
    
    
    <div className="general_container1">
        <Buttons/>
    </div>
    <br />
    <Carousals/>
    <Footer1/>
    </>
  )
}

export default General