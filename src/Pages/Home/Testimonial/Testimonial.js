import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import packages from "../../../assets/testimonial/packaging.png";
import manager from "../../../assets/testimonial/performance.png";
import award from "../../../assets/testimonial/trophy.png";
import "./Testimonial.css";
import TestimonialSlider from "./TestimonialSlider/TestimonialSlider";
const Testimonial = () => {
  const [pageServices, setPageServices] = useState(0);
  const handleHight = () => setPageServices(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleHight);
  }, []);

  return (
    <div className="our-service" style={{ backgroundColor: "#FDF4F4" }}>
      <h3 style={{ transform: `translateX(${(pageServices - 3000) * 0.5}px)` }}>
        TESTIMONIAL
      </h3>
      <Container className="testimonial-section">
        <Row className="gx-4 align-items-center">
          <Col className="col-12 col-md-8">
            <Card className="service-lef border-0 rounded-0">
              <Card.Body>
                <h6 style={{ letterSpacing: "3px" }}>TESTIMONIAL</h6>
                <h1>
                  What Our <br />{" "}
                  <span className="fw-light"> Patients Says</span>
                </h1>
              </Card.Body>
            </Card>
            <Card.Body>
              <TestimonialSlider />
            </Card.Body>
          </Col>
          <Col className="col-12 col-md-4 test-info">
            <div className="testimoneal-right d-flex align-items-center flex-wrap">
              <div className="d-flex text-data">
                <img src={manager} alt="" />
                <div>
                  <h2>2050+</h2>
                  <p className="text-uppercase">Satisfied Patients</p>
                </div>
              </div>
              <div className="d-flex text-data">
                <img src={packages} alt="" />
                <div>
                  <h2>15+</h2>
                  <p className="text-uppercase">Health Sections</p>
                </div>
              </div>
              <div className="d-flex text-data">
                <img src={award} alt="" />
                <div>
                  <h2>45+</h2>
                  <p className="text-uppercase">Awards Won</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;