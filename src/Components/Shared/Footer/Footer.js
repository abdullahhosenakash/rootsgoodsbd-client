import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assets/new_logo.jpeg';

const Footer = () => {
  return (
    <div>
      <div className='px-[5rem] bg-[#151414] pt-10 pb-6'>
        <div className='flex gap-8'>
          <div className=''>
            <Link to='/'>
              <img src={icon} alt='' width={100} />
            </Link>
            <p className='text-2xl font-bold text-white pt-4 text-start pb-2'>
              Follow Us
            </p>
            <div className='flex items-center text-white gap-4 text-xl'>
              <a href='https://www.facebook.com'>
                <div className='bg-blue-900 px-5 py-3 rounded-full'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </a>
              <a href='https://www.twitter.com'>
                <div className='bg-sky-500 px-4 py-3 rounded-full'>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </a>
              <a href='https://www.instagram.com'>
                <div className='bg-[#405de6] px-[1.2rem] py-3 rounded-full'>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
              <a href='https://www.youtube.com'>
                <div className='bg-[#ff0000] px-[0.9rem] py-[0.7rem] rounded-full'>
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </a>
            </div>
          </div>
          <div className='w-[45%] text-white'>
            <div className=''>
              <h2 className='text-start text-3xl'>AboutUs</h2>
              <div className='block w-20 h-[0.15rem] bg-primary mt-2 mb-3' />
              <div className='text-justify text-slate-400 text-sm'>
                <p className='mb-2'>
                  Root's Goods BD বিশ্ববিদ্যালয় পড়ুয়া অদম্য মেধাবী শিক্ষার্থীদের
                  দ্বারা পরিচালিত একটি অনলাইন মার্কেট প্লেস। এই প্লাটফর্মের
                  মাধ্যমে দেশের বিভিন্ন এলাকায় বসবাসকারী শিক্ষার্থীরা তাদের
                  এলাকার বিখ্যাত পন্য বিক্রি করে থাকে। বিশ্ববিদ্যালয় পর্যায়ের
                  ছাত্রছাত্রীদের “নৈতিক ব্যবসা” শেখা এবং তার মাধ্যমে পড়াশুনার
                  খরচ চালানোর উদ্দেশ্যে Root's Goods BD প্ল্যাটফর্মটির সৃষ্টি।
                </p>
                <p className='mb-2'>
                  শিক্ষার্থীরা তার পন্যের বিবরণ এখানে সাজিয়ে রাখে এবং ক্রেতার
                  চাহিদামত তা মূল উৎস হতে সংগ্রহ করে পাঠায়। এখানে
                  ক্রেতা-বিক্রেতার মধ্যে সরাসরি যোগাযোগের মাধ্যমে পন্য ও অর্থ
                  লেনদেন হয়। পন্য ক্রয় করার পর ক্রেতা উক্ত পন্যের মান এবং
                  সার্ভিস সম্পর্কে মূল্যায়ন নম্বর এবং মন্তব্য দিতে পারেন যা উক্ত
                  পন্যের পাশে দেখানো হয়।
                </p>
                <p>
                  Root's Goods BD প্লাটফর্মটি নৈতিক ব্যবসার মূল নীতি (নৈতিকতা ও
                  সবচ্ছতা) রক্ষায় দৃঢ় প্রতিজ্ঞ। আসুন, দেশের বিভিন্ন এলাকার
                  বিখ্যাত ও খাঁটি পন্য কেনার মাধ্যমে অদম্য মেধাবী শিক্ষার্থীদের
                  সহায়তায় এগিয়ে আসি! ধন্যবাদ!
                </p>
              </div>
            </div>
          </div>
          <div className='text-start'>
            <h2 className='text-3xl text-white'>Useful Links</h2>
            <div className='block w-20 h-[0.15rem] bg-primary mt-2 mb-3' />
            <div className='grid grid-cols-2 gap-x-12 gap-y-3 text-slate-400'>
              <div className='hover:text-primary'>
                <Link to='/pages/products'>Products</Link>
              </div>
              <div className='hover:text-primary'>
                <Link to='/pages/category'>Category</Link>
              </div>
              <div className='hover:text-primary'>
                <Link to='/pages/termsAndConditions'>Terms & Conditions</Link>
              </div>
              <div className='hover:text-primary'>
                <Link to='/pages/privacyPolicy'>Privacy Policy</Link>
              </div>
              <div className='hover:text-primary'>
                <Link to='/pages/shippingPolicy'>Shipping Policy</Link>
              </div>
              <div className='hover:text-primary'>
                <Link to='/pages/returnPolicy'>Return Policy</Link>
              </div>
              <div className='hover:text-primary'>
                <Link to='/pages/aboutUs'>About Us</Link>
              </div>
              <div className='hover:text-primary'>
                <Link to='/pages/contactUs'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-slate-400 py-5 bg-[#202020]'>
        <p>Copyright © 2023, All Right Reserved Moral Parent</p>
      </div>
    </div>
  );
};

export default Footer;
