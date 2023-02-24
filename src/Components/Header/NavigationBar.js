import React from 'react';
import { useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={`mx-[5rem] flex justify-between ${
        location.pathname === '/' || location.pathname === '/home'
          ? 'hidden'
          : ''
      }`}
    >
      <div className=''>Current Page Title</div>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
