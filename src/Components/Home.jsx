import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
  const [showFinalText, setShowFinalText] = useState(false);

  // Function to show the final text after the welcome message
  const handleTypeComplete = (count) => {
    // Show the thought line only after the welcome message has completed typing
    if (count === 1) { // Adjust according to your loop or length of strings
      setShowFinalText(true); // Show the thought line after the welcome text
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="welcome-container">
        <h1 className="welcome-text">
          <Typewriter
            options={{
              strings: ['Welcome to Licaro.Beans'],
              autoStart: true,
              loop: true, // Loop for continuous typing
              delay: 90, // Typing speed (milliseconds)
              pauseFor: 2000, // Delay before starting next string
              cursor: '!',
              onStringTyped: (count) => handleTypeComplete(count), // Call function when string is typed
            }}
          />
        </h1>
       
        <p className='thought-line'>Everything is brewtiful here !!</p>
      </div>
    </section>
  );
};

export default Home;
