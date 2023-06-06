import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import Slide1 from "../Image/Slide1.png";
import Slide4 from "../Image/Slide4.png";
import slide2 from "../Image/slide2.png";
import Thirdsec1 from "../Image/Thirdsec1.jpg";
import Thirdsec2 from "../Image/Thirdsec2.jpeg";
import Thirdsec3 from "../Image/Thirdsec3.jpg";
import Thirdsec4 from "../Image/Thirdsec4.jpeg";
import Thirdsec5 from "../Image/Thirdsec5.jpg";
import Thirdsec6 from "../Image/Thirdsec6.jpg";
import PlantCare from "../Image/PlantCare.jpg";
import PlantSinfourth from "../Image/Plantsinfourth.jpg";
import potsFourth from "../Image/potsFourth.jpeg";
import SeedsFourth from "../Image/SeedsFourth.jpeg";
import newArrival from "../Image/newArrival.png";
import Navbar from "../NavBar";
import newarrival1 from "../Image/newarrival1.jpg";
import newarrival2 from "../Image/newarrival2.jpeg";
import newarrival3 from "../Image/newarrival3.jpg";
import newarrival4 from "../Image/newarrival4.jpg";
import { useNavigate } from "react-router-dom";
import BestSeller from "../Image/BestSeller.png";
import Bestseller1 from "../Image/Bestseller1.jpg";
import Bestseller2 from "../Image/Bestseller2.jpg";
import Bestseller3 from "../Image/BestSeller3.jpg";
import Bestseller4 from "../Image/Bestseller4.jpg";
import TestimonialSlider from "./TestimonialSlider";
import Testimonial from "../Image/Testimonial.png";
const Home = () => {
  const nevigate = useNavigate();
  const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  return (
    <>
      <Navbar></Navbar>
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
          <div className="ContentSection" style={{ padding: "5%" }}>
            <h4>
              Our very new shades of green.
              <br />
              Check out our latest sales and offers.
            </h4>
          </div>
          <div>
            <button className="viewAllBtn">View All Offers</button>
          </div>
        </div>
        <div className="ImageContainer">
          <div className="ImageSection">
            <img src={Thirdsec5} />
            <p>Best Seller</p>
          </div>
          <div className="ImageSection">
            <img src={Thirdsec2} />
            <p>Easy to Care</p>
          </div>
          <div className="ImageSection">
            <img src={Thirdsec6} />
            <p>Interior Plant</p>
          </div>
          <div className="ImageSection">
            <img src={Thirdsec4} />
            <p>Outdoor Plant</p>
          </div>
          <div className="ImageSection">
            <img src={Thirdsec1} />
            <p>Fertilizer</p>
          </div>
          <div className="ImageSection">
            <img src={Thirdsec3} />
            <p>Seeds</p>
          </div>
        </div>
        <h2>What are you looking for ?</h2>
        <div className="ImageContainer">
          <div className="fourthsec">
            <img src={PlantSinfourth} />
            <p>Plants</p>
          </div>
          <div className="fourthsec">
            <img src={SeedsFourth} />
            <p>Seeds</p>
          </div>
          <div className="fourthsec">
            <img src={potsFourth} />
            <p>Pots & Planter</p>
          </div>
          <div className="fourthsec">
            <img src={PlantCare} />
            <p>Plants Care</p>
          </div>
        </div>
        <div className="contentewithicon">
          <img src={newArrival} />
          <h3>New Arrival</h3>
        </div>
        <div className="ImageContainer">
          <div className="fifthsec">
            <img className="jade" src={newarrival1} />
            <h3>Jade Plant</h3>
            <p>From Rs.199</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
          <div className="fifthsec">
            <img className="pinkRose" src={newarrival2} />
            <h3>Pink Rose Plant</h3>
            <p>From Rs.199</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
          <div className="fifthsec">
            <img className="snake" src={newarrival3} />
            <h3>Snake Plant</h3>
            <p>From Rs.199</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
          <div className="fifthsec">
            <img className="cactus" src={newarrival4} />
            <h3>Cactus Plant</h3>
            <p>From Rs.199</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
        </div>
        <div className="contentewithicon">
          <img src={BestSeller} />
          <h3>Best Seller</h3>
        </div>
        <div className="ImageContainer">
          <div className="secSixth">
            <img className="Bestseller1" src={Bestseller1} />
            <h3>Money plant</h3>
            <p>From Rs. 150</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
          <div className="secSixth">
            <img className="Bestseller2" src={Bestseller2} />
            <h3>Jade Mini plant</h3>
            <p>From Rs. 250</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
          <div className="secSixth">
            <img className="Bestseller3" src={Bestseller3} />
            <h3>Broken Heart Plant</h3>
            <p>From Rs. 250</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
          <div className="secSixth">
            <img className="Bestseller4" src={Bestseller4} />
            <h3>Bamboo plant</h3>
            <p>From Rs. 350</p>
            <button className="buyNow">
              <a
                onClick={() => {
                  nevigate("/Pages/Products");
                }}
              >
                Veiw Product
              </a>
            </button>
          </div>
        </div>
        <div className="contentewithicon">
          <img src={Testimonial} />
          <h3>Happy planter </h3>
        </div>
        <TestimonialSlider></TestimonialSlider>
      </div>
    </>
  );
};
export default Home;
