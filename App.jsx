import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="App">
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <div className="content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          {/* Include AboutUs component here if desired */}
        </div>
      )}
    </div>
  );
}

export default App;
