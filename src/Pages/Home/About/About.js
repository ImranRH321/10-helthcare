import React from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
const About = () => {
  return (
    <div
      //   style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5 bg-dark"
    >
      <Container>
        <div>
          <h2 className="text-center text-white mb-5">
          THE HOSPITAL
          </h2>
        </div>
        <Row>
          <Col md className="pe-3">
            <div bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-white my-4">Eswar Medical Foundation is a multi-specialty hospital established in August 2010 at Kolathur near Anna Silai Stop, Paper Mills Road. Eswar Medical Foundation is well equipped and provides best medical & surgical service for the community. The hospital comes with an aim of offering state of the art health care under a single roof. </p>
              <p className="text-white">
                Eswar Medical Foundation, Chennai was well planned, designed, built and equipped to meet all the standards of healthcare. We operate to these standards, every day, and in everything we do. All of the physicians credentialed and we have ensured that we have the expertise to fulfill our patients’ medical requirements in comfortable and reassuring surroundings.</p>
              <img src="https://www.usnews.com/dims4/USNEWS/cc5ef52/2147483647/thumbnail/303x202/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fb9%2F5b%2F35ac92554e49b49ef31185f999b0%2F210409-editorial.public.health.jpg" alt="" />
            </div>
          </Col>
          <Col md className="pe-3">
            <div bottom>

              <img className="img-fluid" src="https://venusindus.com/wp-content/uploads/2018/01/shutterstock_1359661851.jpg" alt="" />

              <p className="text-warning my-3 text-center">
                As the world enters its second year of the coronavirus pandemic, having a strong public health care system is as important as ever.
                Developed countries use various approaches to provide universal coverage. Some rely on the government, as in a single-payer approach. Other nations depend on private insurers and a third group of countries, such as the United States, have a mixture of both.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <div bottom>
              <h6
                className="text-right p-2 text-info">
               A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </h6>
            </div>
          </Col>
          <Col md className="d-flex align-items-center">

             <div className="mx-auto">
             <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Enter Your Password" />
              </Form.Group>
              <Button className="btn btn-warning" variant="primary" type="submit">
                <a href="/login">SignUp</a>
              </Button>
            </Form>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
