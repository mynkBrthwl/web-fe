import React from 'react';
import { motion } from 'framer-motion';

const ContactLinkBar = () => {
  return (
    <motion.nav initial={{y:'-60vh',opacity:0}} animate={{y:0,opacity:1}} transition={{type:'spring',duration:1}} className='sm:flex hidden w-full text-white justify-center items-center text-center bg-[#64C0FF] z-[40] p-1'>
        <span className='flex justify-center font-poppins text-white font-semibold z-[40] text-[12px] items-center text-center'>If there's any doubt or questions you want to ask, just fill out the contact form and we surely look into that and reply to you shortly.</span>
    </motion.nav>
  );
}

export default ContactLinkBar;
