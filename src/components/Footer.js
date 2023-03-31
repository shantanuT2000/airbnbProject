import React from "react";


const Footer = () => {
  return (
    <>
    <div className="container4">
     
      <div className="part">
      <p className="footerTitle">
      Want to list your property with us
      </p>
      <h6>Scan to download the App now!</h6>
        <a href="https://play.google.com/store/apps/details?id=com.airbnb.android&hl=en_IN&gl=US"><img className="img1" src="images/googlePlay2.png" alt="play Store" /></a>
        <a href="https://apps.apple.com/us/app/airbnb/id401626263"><img  src= "images/Appstore2.png" alt="" /></a>
      </div>
      <div className="part">
        <img className="img2" src="images/airbnbqr.png" alt="QRcode" />
      </div>
    </div>
   </>
    
  );
};

export default Footer;
