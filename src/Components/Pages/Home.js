import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css'
import Slide1 from "../Image/Slide1.png" ;
import Slide4 from "../Image/Slide4.png" ;
import slide2 from "../Image/slide2.png" 



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
</div>
)
}
export default Home 