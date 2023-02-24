import React from 'react';
import { Outlet } from 'react-router-dom';

const Pages = () => {
  return (
    <div className='mx-[5rem]'>
      <Outlet />
    </div>
  );
};

export default Pages;
