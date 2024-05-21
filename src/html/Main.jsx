// Main.jsx
import React, { useRef, forwardRef } from 'react';
import Navbar from './Navbar';

const Main = forwardRef(({ children, setIsAbout }, ref) => {
  return (
    <div>
      <Navbar setIsAbout={setIsAbout} ref={ref} />
      {children}
    </div>
  );
});

export default Main;
