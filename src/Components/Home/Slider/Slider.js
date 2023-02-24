import React, { useEffect, useState } from 'react';
import banner1 from '../../../assets/banner/banner-1.jpg';
import banner2 from '../../../assets/banner/banner-2.jpeg';
import banner3 from '../../../assets/banner/banner-3.jpg';
import banner4 from '../../../assets/banner/banner-4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  const slides = [banner1, banner2, banner3, banner4];
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, [next]);

  return (
    <div className='mx-[5rem]'>
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform ease-out duration-500'
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, index) => {
            return <img src={s} alt='' key={index} />;
          })}
        </div>
        <button
          className='btn btn-ghost text-2xl absolute top-[45%] left-0 text-dark'
          onClick={() => prev()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className='btn btn-ghost text-2xl absolute top-[45%] right-0 text-dark'
          onClick={() => next()}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
