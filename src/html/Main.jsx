// Main.jsx
import React, { useRef, forwardRef } from 'react';
import Navbar from './Navbar';

const Main = forwardRef(({ children }, ref) => {
  return (
    <div>
      <Navbar ref={ref} />
      {children}
    </div>
  );
});

export default Main;
