import React from "react";
import Buttons from "./Buttons";
import "./css/Hotel.css";
import Cards from "./Cards";
import GrowSection from "./GrowSection";


const HotelManagement = () => {
  
  const arr2 = [{
    id:1,
    img:"images/hotel2.jpeg",
    title:"Hotels",
    desc:"'Hotel' is a business establishment offering rooms with modern amenities like a flat-screen TV, lockers, en-suite bathrooms etc.also have pools "
},{
   id:2,
   img:"images/homestay.jpeg",
   title:"HomeStays",
   desc:"Homestay is a private property with rooms, a kitchen, and a living               room. They are budget-friendly and offer a local experience to travellers."
},{
  id:3,
  img:"images/villa.jpeg",
  title:"Villas",
  desc:"A villa is a luxurious property, featuring many rooms and spaces               such as a lounge area, kitchen, lawn, and often, a pool.Villas can be multitier"
},{
  id:4,
  img:"images/apartmrnts.jpeg",
  title:"Apartments",
  desc:"An apartment is an independent unit in a residential complex.               Ranging from studios to 3 BHK units, these come with rooms, a kitchen, a living area, etc."
}];
 

  return (
    
    <>
      
      <div className="container1">
        <h1>List your hotels, apartments, villas</h1>
        <h1>Homestays and more!</h1>
        <Buttons />
      </div>

      <div className="container-heading">
      <h2>Types of Properties You can List</h2>
        <p>
          If you own any of the following property types, you can list it with
          us. Just select the property type to get started.
        </p> 
      </div>
    

      <Cards data={arr2}/>
      <GrowSection/>
      <hr />
      
    </>
  );
};

export default HotelManagement;
