import React,{useState} from 'react'
import Buttons from '../Buttons'
import '../css/Hotel.css'
import NavBar from '../NavBar'
import Carousals from './Carousals'


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
    
    </>
  )
}

export default General