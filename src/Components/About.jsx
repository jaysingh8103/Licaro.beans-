import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className='bg'>
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            At <strong>Licaro.beans</strong>, we are passionate about sourcing the finest coffee beans from around the world. Our mission is to bring the best coffee experience to our customers, offering a variety of rich flavors and unique blends.
          </p>
          <p>
            Whether you're a coffee aficionado or just getting started, we have something for everyone. Our beans are ethically sourced and freshly roasted, ensuring the highest quality in every cup.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
