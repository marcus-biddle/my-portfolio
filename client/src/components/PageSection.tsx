import { useEffect, useRef } from "react";
import { useNav } from "./NavProvider";
import { useInView, motion } from "framer-motion";
import { type IconType } from "react-icons";
import { HoverRevealText } from "../sections/HomePage";

type Props = {
  id: string;
  title?: string;
  subtitle?: string;
  titleIcon?: IconType;
};

export default function PageSection({ id, title, subtitle, titleIcon: Icon, children }: Props & {children: React.ReactNode}) {
  const ref = useRef<HTMLElement>(null);
  const { setActiveLink } = useNav();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveLink(id);
    }
  }, [isInView, id, setActiveLink]);

  return (
    <motion.section
    initial={{ opacity: 0, y: 20 }}              // Hidden and shifted down initially
      whileInView={{ opacity: 1, y: 0 }}           // Animate to visible and position upon scroll into view
      viewport={{ once: true, amount: 0.3 }}       // Trigger once when 30% of section in viewport
      transition={{ duration: 0.6, ease: "easeInOut" }}
      ref={ref}
      id={id}
      className='min-h-screen flex flex-col justify-center text-white  py-12 z-50'
    >
        <div className={`${Icon ? 'flex' : ''} px-8 py-10 gap-2 `}>
            {Icon && <div> <Icon className=" h-full w-10 " /> </div>}
            <div>
                {subtitle && <HoverRevealText delay={0.6} text={subtitle} classname="font-inter uppercase tracking-wider text-md md:text-xl font-bold text-cyan-400" />}
                {/* <p className={`font-inter uppercase tracking-wider text-md md:text-xl font-bold text-cyan-400 `}>{subtitle}</p> */}
                {title && <h1 className="text-2xl md:text-6xl font-bold font-display mb-4 text-pink-500">{title}</h1>}
            </div>
        </div>
        <div className="w-full flex flex-col items-center font-inter p-8 md:px-32">{children}</div>
    </motion.section>
  );
}