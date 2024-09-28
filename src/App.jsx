import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import './App.css';
import Footer from './Components/Footer';



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;
