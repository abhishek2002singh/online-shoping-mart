import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Nav from './Nav';

import Footer from './Footer';

const Body = () => {
  return (
    <div>
      <Nav />
     
      <Outlet /> 
      <Footer />
    </div>
  );
}

export default Body;
