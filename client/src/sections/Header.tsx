import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const sections = ['home', 'projects', 'experience', 'skills'];

export const Header = () => {
    const ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState('home');

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const horizontalX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [activeIndex]);

  return (
    <section className='fixed w-full flex justify-center items-center top-4 z-100'>
        <nav ref={ref} className='flex gap-1 items-center border border-white/15 rounded-full bg-white/10 backdrop-blur'>
            {sections.map((section, index) => (
                <div key={index} className='relative'>
                    <a href={`#${section}`} 
                        className={`relative px-4 py-1.5 rounded-full font-semibold font-inter transition duration-300 mix-blend-difference`}
                        onClick={() => {
                        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveIndex(section);
                        }}
                    >
                    {section}
                    </a>
                </div>
            ))}
            <motion.div style= {{ x: horizontalX }} className='absolute z-0 rounded-full w-18 h-6 bg-cyan-500/15' />
        </nav>
    </section>
  )
}

