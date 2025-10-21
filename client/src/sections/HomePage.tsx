import PageSection from '../components/PageSection'
import { TbDeviceProjector } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { RippleButton } from '../framer/RippleButton';

export function HoverRevealText({
  text,
  classname,
  delay
}: {
  text: string;
  classname?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: false, margin: "-100px" });

  const variants = {
    rest: { y: "0%", opacity: 1 },
    hover: { y: "-100%", opacity: 1 },
  };
  const revealVariants = {
    rest: { y: "100%", opacity: 0 },
    hover: { y: "0%", opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("hover"); // Reveal text
    } else {
      controls.start("rest"); // Unreveal text
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden cursor-pointer inline-flex ${classname}`}
      initial="rest"
      animate={controls}
      whileHover="hover"
    >
      <motion.span
        className="flex-shrink-0 whitespace-nowrap"
        variants={variants}
        transition={{ type: "tween", duration: 0.3, delay }}
      >
        {text}
      </motion.span>
      <motion.span
        className="flex-shrink-0 whitespace-nowrap absolute top-0 left-0 pointer-events-none"
        variants={revealVariants}
        transition={{ type: "tween", duration: 0.3, delay }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}

export const HomePage = () => {
  return (
    <PageSection id="home" title='Marcus Biddle' subtitle='Tech Enthusiast'>
        <div className='flex flex-row gap-4'>
            <RippleButton className='flex items-center border border-slate-400/20 shadow-2xl text-slate-900 justify-center gap-2 bg-slate-400 rounded-full py-2 px-4'>
              <HoverRevealText text='Projects'  />
              <TbDeviceProjector className=' size-6' />
            </RippleButton>
            <RippleButton className='flex items-center border border-slate-500/20 shadow-2xl justify-center gap-2 bg-slate-500/10 text-slate-500 rounded-full py-2 px-4'>
              <HoverRevealText text='Resume'  />
              <GoArrowUpRight className=' size-6' />
            </RippleButton>
        </div>
    </PageSection>
  )
}
