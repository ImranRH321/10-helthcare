import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Footer.css'

import { NavLink } from "react-router-dom";

const Footer = () => {

  return (
    <div>
         <Container fluid className="footer">
        <Row>
          <Col md={5}>
            <div className="text-center ">
              <img width="150px" src="https://kit.pndrnt.com/medific/wp-content/uploads/sites/5/2020/10/Medific_logo_02.png" alt="" />
            </div>
            <p className="pt-4">Endocrinology is a branch of biology and medicine which deals with the diagnosis and treatment of the diseases related to hormones that covers most of the human functions related to the co-ordination of metabolism, reproduction etc.</p>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
            <h4> Explore</h4>
              <li>
                <a href="/home">home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="">Doctors</a>
              </li>
              <li>
                <a href="services"> Service</a>
              </li>
              <li>
                 <a href="">FAQ</a>
              </li>
            </ul>
          </Col>

          <Col md={2}>
            <ul className="list-unstyled">
            <h4>Service</h4>
             
              <li>
                <a href="">Birthing Care</a>
              </li>
              <li>
                <a href="">  Cancer Care</a>
              </li>
              <li>
                <a href="">  Heart Care</a>
              </li>

              <li>
                  <a href="">Family medicine</a>
              </li>

            </ul>
          </Col>
          <Col md={3}>
            <h4>Subscribe</h4>
            <p>Stay in the know with news and promotions</p> 
             
             <input  type="text" className="form-control w-50 mx-auto" placeholder="text......" />
             <a href="/login"> <Button className="btn bg-primary my-4 px-5">Sign Up</Button></a>
          </Col> 
           <p className="mt-3">Copyright &copy; All Reserved by
        in 2021</p>
        <hr style={{width: "110px", margin: "auto"}} />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
