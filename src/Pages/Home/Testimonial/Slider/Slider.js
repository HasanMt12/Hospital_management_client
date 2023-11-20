
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import { BsHeartFill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaRegAngry } from "react-icons/fa";
import Rating from "react-rating";
import { format } from "timeago.js";
import "./TestimonialSlider.css";
const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };
  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        ref={ref}
        className="testimonial-slider mt-3"
      >
        {data?.map((item) => (
          <Carousel.Item>
            <p className="lh-2 fz-1 mb-5 text-jf">test </p>
            <div className="d-flex align-items-center justify-content-between mt-4 flex-grow-1">
              <div className="d-flex align-items-center">
                <img
                  className="img img-fluid me-3 testimonial-img"
                  src= "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                  alt=""
                />
                <div>
                  <h5 className="testimoneal-name">ryhdz</h5>
                  <span className="testimoneal-email">test@gmail.com</span>
                  <span className="testimoneal-role">30 november</span>
                </div>
              </div>
              <div className="testi-main">
                <Rating
                  className="reviewRating"
                  fractions={5}
                  initialRating={4}
                  readonly
                  emptySymbol={[
                    "fa fa-star-o fa-2x ",
                    "fa fa-star-o fa-2x ",
                    "fa fa-star-o fa-2x ",
                    "fa fa-star-o fa-2x ",
                    "fa fa-star-o fa-2x ",
                  ]}
                  fullSymbol={[
                    "fa fa-star fa-2x",
                    "fa fa-star fa-2x ",
                    "fa fa-star fa-2x ",
                    "fa fa-star fa-2x ",
                    "fa fa-star fa-2x ",
                  ]}
                />
                
                  <p>
                    I just love it. <BsHeartFill />
                  </p>
                
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <div className="button-container d-flex justify-content-end testimonial-slider mt-5">
          <button className="testimonial-arrow me-4" onClick={onPrevClick}>
            <FaArrowLeft />
          </button>
          <button className="testimonial-arrow" onClick={onNextClick}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;