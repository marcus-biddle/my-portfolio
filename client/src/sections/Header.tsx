import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { IoDownloadOutline } from "react-icons/io5";
import resume from '../assets/resume.pdf'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 20);

    // Determine active section based on scroll position
    const sections = ['about', 'experience', 'education', 'projects'];
    const headerHeight = 80;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
      }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed top-0 left-0 right-0 z-100"
    >
      {/* Glassmorphism background with proper backdrop */}
      <motion.div
        animate={{
          backgroundColor: scrolled 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'rgba(0, 0, 0, 0)',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(0px)',
          borderBottomWidth: scrolled ? '1px' : '0px',
          borderBottomColor: scrolled ? 'rgba(148, 163, 184, 0.1)' : 'transparent',
          boxShadow: scrolled 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' 
            : 'none',
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            animate={{
              paddingTop: scrolled ? '1rem' : '1.75rem',
              paddingBottom: scrolled ? '1rem' : '1.75rem',
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex justify-between items-center gap-4"
          >
            {/* Logo/Name Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-3"
              aria-label="Scroll to top"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/30 text-white font-bold text-lg transition-all duration-300 hover:border-slate-600/50 hover:shadow-lg hover:shadow-blue-500/10">
                <span className="relative z-10">M</span>
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="hidden md:block text-white font-semibold text-lg bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Marcus Biddle
              </span>
            </motion.button>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>
            
            {/* Resume Download Button */}
            <motion.a
              href={resume}
              download="Marcus_Biddle_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/30 transition-all duration-300 hover:border-slate-600/50 hover:shadow-lg hover:shadow-blue-500/10"
              aria-label="Download Resume"
            >
              <IoDownloadOutline className="relative z-10 size-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
              <span className="hidden sm:block relative z-10 text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                Resume
              </span>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header