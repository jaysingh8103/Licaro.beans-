import './CustomersR.css';
import { motion } from "framer-motion";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomersR = ({ customerReviews, setCustomerReviews }) => {
  // Sort customerReviews by rating in descending order
  const sortedReviews = [...customerReviews].sort((a, b) => b.rating - a.rating);

  const handleDeleteReview = (index) => {
    // Remove review from the state
    const updatedReviews = sortedReviews.filter((_, i) => i !== index);
    setCustomerReviews(updatedReviews);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0  ,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <motion.div
      className="testimonials curved-box"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        {sortedReviews.map((customer, index) => (
          <div className="card-r" key={index}>
            <div className="icon-circle">
              {customer.name.charAt(0).toUpperCase()}
            </div>
            <div className="content">
              <h6>- {customer.name.charAt(0).toUpperCase() + customer.name.slice(1)}</h6>
              <p>{customer.review}</p>
              <h3>{customer.rating} ★</h3>
              <button className="delete-button" onClick={() => handleDeleteReview(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};
