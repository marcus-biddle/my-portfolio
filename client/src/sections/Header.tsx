import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button';
import { IoDownloadOutline } from "react-icons/io5";
import resume from '../assets/resume.pdf'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 50); // Change 50 to your threshold
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <motion.div
      className={` text-white border border-slate-700 bg-slate-950/80 overflow-auto z-90 flex justify-between items-center ${
        scrolled
          ? "m-8 py-2 px-4 rounded-lg transition-all duration-300"
          : "m-0 p-2 rounded-none transition-all duration-300"
      }`}
    >
      <Button variant="outline" size="icon" onClick={scrollToTop} className='bg-slate-800/50 border-slate-800/50'>M</Button>
      <div className=' inline-flex items-center gap-4'>
        {/* <ul className='inline-flex gap-4 bg-slate-800/50 rounded-md p-2'>
          <li className=''>Home</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul> */}
        <a href={resume} download="Marcus_Biddle_Resume.pdf">
          <Button variant="outline" size="icon" className='bg-transparetn border-slate-800/50'>
            <IoDownloadOutline className=' size-5' />
          </Button>
        </a>
      </div>
    </motion.div>
  )
}

export default Header