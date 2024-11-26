import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Products.css';

const products = [
  {
    name: 'WHISKEY FERMENTED FLAVOURS',
    description: 'These flavors can add a rich, complex profile to beverages, often characterized by notes of oak, vanilla, caramel, and spices. They can come from the fermentation process of whiskey barrels or be introduced during brewing.',
    price: 'Sour Bitter Wiskey Taste',
    image: '/src/assets/images/p-4.jpg' 
  },
  {
    name: 'PINEAPPLE FERMENTED FLAVOURS',
    description: 'Pineapple can impart a tropical sweetness and acidity to beverages. When fermented, it may develop additional fruity notes and a refreshing tartness, making it a popular choice for cocktails or specialty coffees.',
    price: 'Mild Sweet Bitter',
    image: '/src/assets/images/p-5.jpg' 
  },
  {
    name: 'HONEY SUN DRIED FERMENTED',
    description: 'This flavor profile combines the sweetness of honey with the unique characteristics of sun-dried fruits. The fermentation process can enhance the honey floral notes while providing a rich, complex sweetness that pairs well with various beverages.',
    price: 'Sweet Bitter',
    image: '/src/assets/images/p-6.jpg' 
   } ,
   
 
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle rotation
  };

  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <motion.div
            className={`product ${activeIndex === index ? 'flipped' : ''}`}
            key={index}
            onClick={() => handleCardClick(index)} // Rotate card on click
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="product-inner">
              <div className="product-front">
                <div
                  className="product-bg-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="product-overlay">
                    <h3>{product.name}</h3>
                    {/* <p className="product-price">{product.price}</p> */}
                  </div>
                </div>
              </div>
              <div className="product-back">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
