import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShuffle, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/new_logo.jpeg';

const MiddleBar = () => {
  return (
    <div className='mx-[5rem] mt-2'>
      <div className='flex justify-between'>
        <div className='flex gap-6 items-center'>
          <Link to='/'>
            <img src={icon} alt='' className='w-32' />
          </Link>
          <div className='flex justify-center'>
            <div className='relative xl:w-96' data-te-input-wrapper-init>
              <input
                type='text'
                className='peer block min-h-[auto] w-full rounded border-2 border-primary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                id='exampleFormControlInputText'
                placeholder='Search for products'
              />
              <label
                htmlFor='exampleFormControlInputText'
                className='pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate mt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none opacity-100 bg-white peer-focus:px-2'
              >
                Search for products
              </label>
            </div>
          </div>
        </div>
        <div className='flex gap-1 items-center'>
          <div>
            <select className='select font-normal text-base hover:bg-gray-200'>
              <option value='english'>English</option>
              <option value='bangla'>Bangla</option>
            </select>
          </div>
          <div className=''>
            <Link to='/login'>
              <span className='hover:bg-gray-200 p-3'>Login</span>
            </Link>
            /
            <Link to='/register'>
              <span className='hover:bg-gray-200 p-3'>Register</span>
            </Link>
            <Link to='/favorite'>
              <span className='mx-2 text-primary text-lg'>
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </Link>
            <Link to='/compare'>
              <span className='mx-2 text-primary text-lg'>
                <FontAwesomeIcon icon={faShuffle} />
              </span>
            </Link>
            <label htmlFor='my-drawer-4' className=' cursor-pointer'>
              <span className='mx-2 text-primary text-lg'>
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className='drawer drawer-end absolute right-0'>
        <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
        <div className='drawer-side'>
          <label htmlFor='my-drawer-4' className='drawer-overlay' />
          <div className='menu p-4 w-80 bg-base-100 text-base-content'>
            <div className='flex justify-between'>
              <p className='text-xl uppercase'>Shopping Cart</p>
              <label
                htmlFor='my-drawer-4'
                className='drawer-overlay btn btn-sm btn-square btn-outline'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </label>
            </div>
            Your Cart is Empty
            <button className='btn btn-primary my-3'>
              <Link to='/products'>Return to Shop</Link>
            </button>
            <button className='btn btn-primary'>
              <Link to='/cart'>View Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
