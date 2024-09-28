import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { CustomersR } from './CustomersR';

export const ReviewCustomers = () => {
  const [customerReviews, setCustomerReviews] = useState(() => {
    const savedReviews = localStorage.getItem('customerReviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  useEffect(() => {
    localStorage.setItem('customerReviews', JSON.stringify(customerReviews));
  }, [customerReviews]);

  return (
    <>
      <CustomersR customerReviews={customerReviews} setCustomerReviews={setCustomerReviews} />
      <Footer setCustomerReviews={setCustomerReviews} />
    </>
  );
};
