import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomBar = () => {
  const location = useLocation();
  return (
    <div className='navbar bg-base-100 px-[5rem]'>
      <div className='navbar-start hidden'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className='justify-between'>
                Parent
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        {/* <a className='btn btn-ghost normal-case text-xl'>daisyUI</a> */}
      </div>
      <div className=' hidden lg:block'>
        <ul className='menu menu-horizontal'>
          <li tabIndex={0}>
            <Link className='bg-primary uppercase text-white'>
              <FontAwesomeIcon icon={faBars} />
              <span className='pr-16'>Category</span>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </Link>
            <ul className='p-2 bg-blue-200 w-full rounded'>
              <li>
                <Link to='/pages/products/category/sweets'>Sweet</Link>
              </li>
              <li>
                <Link to='/pages/products/category/fruits'>Fruits</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li
            className={
              location.pathname === '/pages/products' ? 'bg-gray-200' : ''
            }
          >
            <Link to='/pages/products'>Products</Link>
          </li>
          <li
            className={
              location.pathname === '/pages/sellers' ? 'bg-gray-200' : ''
            }
          >
            <Link to='/pages/sellers'>Sellers</Link>
          </li>
          <li
            className={
              location.pathname === '/pages/contactUs' ? 'bg-gray-200' : ''
            }
          >
            <Link to='/pages/contactUs'>Contact Us</Link>
          </li>
          <li
            className={
              location.pathname === '/pages/aboutUs' ? 'bg-gray-200' : ''
            }
          >
            <Link to='/pages/aboutUs'>About Us</Link>
          </li>
          <li
            className={location.pathname === '/pages/faqs' ? 'bg-gray-200' : ''}
          >
            <Link to='/pages/faqs'>FAQs</Link>
          </li>
          <li
            className={
              location.pathname === '/pages/blogs' ? 'bg-gray-200' : ''
            }
          >
            <Link to='/pages/blogs'>Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;
