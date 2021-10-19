import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/198744374/original/581d777522948f7d5c3bd95b0a11a50da37007bc/do-professional-business-corporate-medical-healthcare-flyer.jpg"
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rcmch.com.bd/images/web-2-o.png"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i2.wp.com/www.finddoctor24.com/wp-content/uploads/2017/11/finddoctor24.png?fit=844%2C465&ssl=1"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;