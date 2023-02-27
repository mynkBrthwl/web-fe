import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { GetStarted } from '../components';
import GoToTop from './GoToTop';

const Footer = () => {
  return (
    <footer className='w-full bg-[#0087E0] shadow-lg z-[50]'>
      <div className='m-auto sm:p-2 flex justify-between'>
        <div className='lg:w-3/5 w-11/12 m-auto sm:p-5 pr-0 md:mr-[130px] flex justify-between'>
          <div className='flex flex-col space-y-2 cursor-pointer'>
            <h1 className='sm:text-xl text-[15px] font-bold mb-2'>Get in touch</h1>
            <span className='sm:text-xs text-[10px] text-white font-bold leading-[8px]' >+91-7037972600, +91-8077063794</span>
            <span className='sm:text-xs text-[10px] text-white font-bold leading-[8px]' >Ranipokhari-Donali, Dehradun,</span>
            <span className='sm:text-xs text-[10px] text-white font-bold leading-[8px]' >Uttarakhand, INDIA – 248145</span>
            <br/>
            <span className='sm:text-xs text-[10px] text-white font-bold leading-[8px]' >+81-7084488810</span>
            <span className='sm:text-xs text-[10px] text-white font-bold leading-[8px]' >Osaka Fu Osaka Shi</span>
            <span className='sm:text-xs text-[10px] text-white font-bold leading-[8px]' >Suminoe ku Nanko Nana 3-3, JAPAN</span>
          </div>
          <div className='sm:flex hidden flex-col space-y-2'>
            <h1 className='sm:text-xl text-[15px] font-bold'>Connect</h1>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Facebook</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Instagram</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">LinkedIn</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Youtube</a>
          </div>
          <div className='flex flex-col space-y-2'>
            <h1 className='sm:text-xl text-[15px] font-bold'>Services</h1>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Study Abroad</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Document Translation</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Work in Japan</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Free Consultation</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/">Japanese Language Classes</a>
          </div>
        </div>
        <div className='md:flex hidden mr-20 mt-10'>
          <GetStarted />
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/2 m-auto sm:p-5 p-1 flex justify-center sm:space-x-10 space-x-5 text-white cursor-pointer'>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <BsFacebook size={'20px'}/>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <BsYoutube size={'20px'}/>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <AiFillInstagram size={'20px'}/>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <AiFillTwitterCircle size={'20px'}/>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <p className='font-poppins font-normal text-white sm:text-[12px] text-[10px] leading-[15.8px]'>© 2023 Mirai International Education. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;