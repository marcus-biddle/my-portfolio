import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNav } from "./NavProvider";

const links = [
  { id: "home", title: "Home" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
  
  
//   { id: "contact", title: "Contact" },
];

export default function NavigationMenu() {
  const { activeLink, setActiveLink } = useNav();
  const activeRef = useRef<HTMLAnchorElement>(null);
  const [boxProps, setBoxProps] = useState({ left: 0, width: 0 });

  useEffect(() => {
    // Update box position and width to match active link
    if (activeRef.current) {
      const { offsetLeft, offsetWidth } = activeRef.current;
      setBoxProps({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeLink]);

  return (
    <header className="fixed top-4 w-full z-30 flex justify-center">
      <nav className="relative bg-white/10 backdrop-blur-md rounded-full py-1.5 px-1.5 shadow flex gap-4 text-slate-600 font-inter">
        {/* Sliding background */}
        <motion.div
          className="absolute top-1 bottom-1 bg-cyan-500/30 rounded-full z-0"
          animate={{ left: boxProps.left, width: boxProps.width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ position: "absolute" }}
        />
        {/* Nav links */}
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={activeLink === link.id ? activeRef : null}
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(link.id);
              document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`relative z-10 py-1.5 px-2 rounded-full cursor-pointer transition-colors ${
              activeLink === link.id ? "text-white font-semibold" : "text-slate-300"
            }`}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
