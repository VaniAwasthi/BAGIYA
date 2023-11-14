import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Testimonial1 from "../../../../../Image/Testimonial1.jpg";
import Testimonial2 from "../../../../../Image/Testimonial2.jpg";
import Testimonial3 from "../../../../../Image/Testimonial3.jpg";
import Testimonial4 from "../../../../../Image/Testimonial4.jpg";
import "./Testimonial.css";

const TestimonialSlider = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={Testimonial1} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Good to Go</h4>
            <p>
              A blessing in green! Loved the packaging and the overall health of
              the plant.
            </p>
          </div>
        </div>

        <div>
          <img src={Testimonial2} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Good to go</h4>
            <p>
              As the snake plant is best known for being a low-maintenance plant
              this one brings extra life to my room and fills it with yellow and
              green colored leaves which give me more strength to do work from
              home. It's more like a baby to me. It came in good condition and
              overall the plant is doing well. It's a cute little small plant
              that gives you hope to start your day. I water it once a week and
              I am amazed it is coming up with a new leaf now. Though it's very
              tiny right now. It has not occupied much space also as compared to
              big plants. Good desk plant.A green companion for sure.
            </p>
          </div>
        </div>

        <div>
          <img src={Testimonial3} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Wow amazing nice and thriving plant.</h4>
            <p>
              I received a healthy plant with a small baby snake plant growing
              beside the parent. I am very happy with the plant.
            </p>
          </div>
        </div>
        <div>
          <img src={Testimonial4} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Beauty</h4>
            <p>
              A beautiful plant baby, delivered in a good condition. The plant
              does need special care though, not too much Sun and loads of
              humidity should keep her happy. The lovely red undertones give it
              an ethereal look, a must have for plant parents.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default TestimonialSlider;
