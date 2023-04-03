import React from 'react'
import Buttons from '../Buttons'
import '../css/Hotel.css'
import NavBar from '../NavBar'
import Carousals from './Carousals'


const General = () => {
  return (
    <>
    <NavBar/>
    <div className="container1">
        <Buttons/>
    </div>
    <br />
    <Carousals/>
    
    </>
  )
}

export default General