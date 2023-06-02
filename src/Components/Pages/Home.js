import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css'
import Slide1 from "../Image/Slide1.png" ;
import Slide4 from "../Image/Slide4.png" ;
import slide2 from "../Image/slide2.png" ;
import Thirdsec1 from "../Image/Thirdsec1.jpg";
import Thirdsec2 from "../Image/Thirdsec2.jpeg";
import Thirdsec3 from "../Image/Thirdsec3.jpg";
import Thirdsec4 from "../Image/Thirdsec4.jpeg";
import Thirdsec5 from "../Image/Thirdsec5.jpg";
import Thirdsec6 from "../Image/Thirdsec6.jpg";



function Home() {
  const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
} 
  return (
    <div className="containerSlide">
    <Slide {...proprietes}>
        <div className="each-slide">
            <div>
                <img src={slide2} alt="img1" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={Slide4} alt="img2" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={Slide1} alt="img3" />
            </div>
        </div>
    </Slide>
    <div className="container-Second">
        <div className='ContentSection' style={{padding:"5%"}}>
            <h4>Our very new shades of green.<br/>
                Check out our latest sales and offers.</h4>
        </div>
        <div>
            <button className='viewAllBtn'>View All Offers</button>
        </div>
    </div>
    <div className='Container-Third'>
        <div className='ImageSection'>
            <img src={Thirdsec5}/>
            <p>Best Seller</p>
        </div>
        <div className='ImageSection'>
            <img src={Thirdsec2}/>
            <p>Easy to Care</p>
        </div>
        <div className='ImageSection'>
            <img src={Thirdsec6}/>
            <p>Interior Plant</p>
        </div>
        <div className='ImageSection'>
            <img src={Thirdsec4}/>
            <p>OutDoor Plant</p>
        </div>
        <div className='ImageSection'>
            <img src={Thirdsec1}/>
            <p>Fertilizer</p>
        </div>
        <div className='ImageSection'>
            <img src={Thirdsec3}/>
            <p>Seeds</p>
        </div>
    </div>
    <h2>What are you looking for ?</h2>
    <div className='Container-Fourth'>

    </div>
</div>
)
}
export default Home 