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
      src="https://2.bp.blogspot.com/-ZdsN8oKerqk/WMNHqVM-B9I/AAAAAAAAK7o/p5UV5tjuPvsWbBPHq2JHJy_FpnVEo9B3wCLcB/s1600/Apollo%2BDhaka.JPG" alt=''
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.madrehealthcare.com/wp-content/uploads/2021/08/BANGLADESHI-PRIVATE-HOSPITALS-INFORMATION-min.png"  alt=''
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;