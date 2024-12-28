import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container1 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="c1 p-4 rounded shadow-lg">
        <h1 className="text-center">Welcome to the Home Page</h1>
        <p className="text-center">This is a simple home page layout.</p>
      </div>
    </div>
  );
};

export default Home;
