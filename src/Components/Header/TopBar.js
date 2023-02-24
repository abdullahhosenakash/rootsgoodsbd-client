import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className='bg-primary py-2 text-white hidden lg:block'>
      <div className='flex justify-between px-[5rem]'>
        <div className='flex items-center gap-3'>
          <p>
            <a href='tel:+8801976544088'>
              <span className='mr-1'>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              01976544088
            </a>
          </p>
          <p>
            <a href='mailto:rootsgoodsbd@gmail.com'>
              <span className='mr-1'>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              rootsgoodsbd@gmail.com
            </a>
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <span>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </span>
          <span>
            <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>
          <span>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </span>
          <span>
            <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </span>
          <Link to='/pages/contactUs'>Contact Us</Link>
          <Link to='/pages/faqs'>FAQs</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
