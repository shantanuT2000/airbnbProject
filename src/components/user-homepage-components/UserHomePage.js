import { useState } from "react";

import Footer2 from './Footer2';

// import Login from './Login';
// import { list, list2 } from "./Images/cards-list";
import Cards2 from './Cards2';
// import "./css/Hotel.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const UserHomePage = () => {
  
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
},{  id:5,
img:"images/homestay.jpeg",
title:"HomeStays",
desc:"Homestay is a private property with rooms, a kitchen, and a living               room. They are budget-friendly and offer a local experience to travellers."
},{
id:6,
img:"images/villa.jpeg",
title:"Villas",
desc:"A villa is a luxurious property, featuring many rooms and spaces               such as a lounge area, kitchen, lawn, and often, a pool.Villas can be multitier"
},{
  id:4,
  img:"images/apartmrnts.jpeg",
  title:"Apartments",
  desc:"An apartment is an independent unit in a residential complex.               Ranging from studios to 3 BHK units, these come with rooms, a kitchen, a living area, etc."
},{  id:5,
img:"images/homestay.jpeg",
title:"HomeStays",
desc:"Homestay is a private property with rooms, a kitchen, and a living               room. They are budget-friendly and offer a local experience to travellers."
},{
id:6,
img:"images/villa.jpeg",
title:"Villas",
desc:"A villa is a luxurious property, featuring many rooms and spaces               such as a lounge area, kitchen, lawn, and often, a pool.Villas can be multitier"
}];

const[data,setData] = useState(arr2);
  return (
    <>
    
    <Cards2 data={data}/>
    <Footer2/>
    


   </>
  );
};

export default UserHomePage;