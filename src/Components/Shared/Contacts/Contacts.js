import {
  faEnvelopeOpen,
  faLocationDot,
  faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contacts = () => {
  return (
    <div className='px-[5rem] bg-[#151414]'>
      <div className='flex flex-col w-full lg:flex-row text-white py-1 text-start'>
        <div className='grid flex-grow h-32 w-1/4 card rounded-box place-items-center'>
          <div className='flex items-center gap-4 px-8'>
            <FontAwesomeIcon
              icon={faLocationDot}
              className='text-4xl text-primary'
            />
            <div className=''>
              <p className='text-lg'>Find Us</p>
              <p className='text-sm text-slate-400'>
                8/2 Indira Road, West Raja Bazar, Farmgate, Dhaka 1215
              </p>
            </div>
          </div>
        </div>
        <div className='grid flex-grow h-32 w-1/4 card rounded-box place-items-center'>
          <a href='tel:+8801976544088'>
            <div className='flex items-center gap-4 px-8'>
              <FontAwesomeIcon
                icon={faPhoneFlip}
                className='text-4xl text-primary'
              />
              <div className=''>
                <p className='text-lg'>Call Us</p>
                <p className='text-sm text-slate-400'>01976544088</p>
              </div>
            </div>
          </a>
        </div>
        <div className='grid flex-grow h-32 w-1/4 card rounded-box place-items-center'>
          <a href='mailto:rootsgoodsbd@gmail.com'>
            <div className='flex items-center gap-4 px-8'>
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className='text-4xl text-primary'
              />
              <div className=''>
                <p className='text-lg'>Mail Us</p>
                <p className='text-sm text-slate-400'>rootsgoodsbd@gmail.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='block w-full h-[1px] bg-gray-700' />
    </div>
  );
};

export default Contacts;
