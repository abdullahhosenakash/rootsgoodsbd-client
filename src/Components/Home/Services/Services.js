import {
  faArrowsRotate,
  faPhoneVolume,
  faShieldHeart,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
  return (
    <div className='flex flex-col w-full lg:flex-row bg-primary text-white py-4'>
      <div className='grid flex-grow h-32 w-1/4 card rounded-box place-items-center'>
        <div className='flex items-center gap-4 px-8'>
          <FontAwesomeIcon icon={faTruckFast} className='text-4xl' />
          <div className=''>
            <p className='text-lg'>Free Shipping</p>
            <p className='text-sm text-slate-300'>
              Free Shipping at your door step.
            </p>
          </div>
        </div>
      </div>
      <div className='divider lg:divider-horizontal' />
      <div className='grid flex-grow h-32 w-1/4 card rounded-box place-items-center'>
        <div className='flex items-center gap-4 px-8'>
          <FontAwesomeIcon icon={faArrowsRotate} className='text-4xl' />
          <div className=''>
            <p className='text-lg'>Free Returns</p>
            <p className='text-sm text-slate-300'>
              Free return if products are damaged.
            </p>
          </div>
        </div>
      </div>
      <div className='divider lg:divider-horizontal' />
      <div className='grid flex-grow h-32 w-1/4 card rounded-box place-items-center'>
        <div className='flex items-center gap-4 px-8'>
          <FontAwesomeIcon icon={faPhoneVolume} className='text-4xl' />
          <div className=''>
            <p className='text-lg'>Support 24/7</p>
            <p className='text-sm text-slate-300'>
              Technical : 01764328959 (Mobasher) Suggestion : 01990331099 (Dr.
              Mahbub)
            </p>
          </div>
        </div>
      </div>
      <div className='divider lg:divider-horizontal' />
      <div className='grid flex-grow h-32 w-1/4 card rounded-box place-items-center'>
        <div className='flex items-center gap-4 px-8'>
          <FontAwesomeIcon icon={faShieldHeart} className='text-4xl' />
          <div className=''>
            <p className='text-lg'>100% Safe & Secure</p>
            <p className='text-sm text-slate-300'>100% safe & secure.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
