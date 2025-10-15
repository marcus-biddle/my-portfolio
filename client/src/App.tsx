import {motion, useScroll, useTransform} from 'framer-motion';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import useHalfwaySnapScroll from './hooks/useSnapScrollReturn';
import { CgMenu } from "react-icons/cg";
import { useDarkMode } from './hooks/useDarkMode';
import { useEffect, useState } from 'react';

const colorThemes = {
  light: {
  background: 'bg-white',             // bright white base
  secondaryBackground: 'bg-indigo-100',
  surface: 'bg-gray-100',             // very light neutral surface
  primaryText: 'text-rose-900',       // deep warm red for contrast
  secondaryText: 'text-amber-700',    // warm amber/orange secondary text
  accent: 'text-blue-600',             // cooler blue accent for balance
  muted: 'text-gray-400',              // muted mid gray
  border: 'border-amber-300',          // soft amber border
  buttonBg: 'bg-blue-500',             // strong blue button
  buttonText: 'text-white',            // light text on buttons
  header: 'text-rose-800',
  tagBg: 'bg-amber-200',
  tagText: 'text-blue-700',
  link: 'text-blue-600 hover:text-blue-800',
  codeBg: 'bg-gray-50',
  codeText: 'text-rose-700',
  error: 'text-red-600',
  secondaryButtonBg: 'bg-transparent',           // typically transparent or lightly colored
  secondaryButtonText: 'text-amber-700',          // amber text for contrast
  secondaryButtonBorder: 'border-amber-700',
},
  dark: {
  background: 'bg-gray-900',          // very dark base
  secondaryBackground: 'bg-cyan-800',
  surface: 'bg-gray-800',             // dark panel
  primaryText: 'text-pink-400',       // neon pink
  secondaryText: 'text-purple-400',  // neon purple
  accent: 'text-cyan-400',            // vivid cyan
  muted: 'text-gray-500',             // muted gray
  border: 'border-purple-600',        // neon purple
  buttonBg: 'bg-pink-600',            // neon pink button
  buttonText: 'text-gray-900',        // dark text on bright button
  header: 'text-pink-500',
  tagBg: 'bg-purple-700',
  tagText: 'text-cyan-300',
  link: 'text-cyan-400 hover:text-cyan-300',
  codeBg: 'bg-gray-800',
  codeText: 'text-pink-400',
  error: 'text-red-500',
  secondaryButtonBg: 'bg-transparent',
  secondaryButtonText: 'text-purple-400',
  secondaryButtonBorder: 'border-purple-400',
},
};

const prevEmployments = [
  {
    title: 'Automation Quality Assurance Engineer',
    company: 'ShastaQA',
    startDate: 'January 2023',
    endDate: 'December 2023',
    toolsSkills: ['Selenium', 'JavaScript', 'TestRail', 'Jira', 'REST API Testing', 'Regression Testing'],
    bulletpoints: [
      'Designed and implemented robust Selenium and JavaScript automation frameworks, achieving 80% test coverage across critical company processes.',
      'Executed comprehensive regression, functional, and REST API tests, identifying and documenting reproducible defects.',
      'Collaborated effectively with developers and stakeholders to triage, prioritize, and resolve issues, ensuring timely software releases.',
      'Authored detailed test documentation and advocated best practices to enhance QA processes and product quality.'
    ]
  },
  {
    title: 'Sales Associate',
    company: 'Camping World',
    startDate: 'May 2024',
    endDate: 'Present',
    toolsSkills: ['Customer Relationship Management', 'Cross-Functional Collaboration', 'Product Knowledge'],
    bulletpoints: [
      'Built strong consultative relationships with customers, significantly contributing to product sales and customer satisfaction.',
      'Coordinated with finance and service departments to support continuous product and process improvements based on customer feedback.'
    ]
  },
  {
    title: 'Shift Manager',
    company: "Woodstock's Pizzeria Inc",
    startDate: 'April 2021',
    endDate: 'January 2023',
    toolsSkills: ['Team Leadership', 'Operational Management', 'Staff Training', 'Customer Service'],
    bulletpoints: [
      'Led and motivated a team of 15 employees to consistently deliver exceptional customer service and efficiently handle daily operations.',
      'Developed and implemented staff training programs and operational procedures, boosting team performance and operational reliability.'
    ]
  }
];

const skills = {
    languages: [
      'SQL',
      'Java',
      'Typescript',
      'JavaScript',
      'Git',
    ],
    frameworks: [
      'React',
      'Node.js',
      'Express.js',
      'TailwindCSS',
    ],
    automation: [
      'Selenium',
      'WebDriver',
      'Jenkins',
      'API Integration',
      'Github',
      'CI/CD'
    ]
  };

const homeParagraph = 'I am an aspiring web developer passionate about building clean, responsive, and user-friendly websites and applications. With a strong foundation in modern JavaScript, React, and front-end design principles, I enjoy transforming creative ideas into functional digital experiences. Eager to grow and collaborate, I am dedicated to continuous learning and advancing my skills to deliver impactful solutions.';

const DarkModeButton = () => {
  const { isDark, toggle } = useDarkMode();
  return (
    <motion.button
        onClick={toggle}
        className={`mb-12 relative w-20 h-10 rounded-full p-1 ${
          isDark ? 'bg-indigo-600' : 'bg-yellow-400'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isDark ? 'bg-slate-800' : 'bg-white'
          }`}
          animate={{ x: isDark ? 40 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          {isDark ? (
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </motion.div>
      </motion.button>
  )
}
function App() {
  const { isDark, toggle } = useDarkMode();
  console.log('test',isDark, toggle)
  const { refs } = useHalfwaySnapScroll(5);
  const { scrollYProgress } = useScroll({
    target: refs[0],
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, .8], ["0%", "90%"]);
  const backgroundY = useTransform(scrollYProgress, [0,1], ["-10%", "0%"]);
  const radiusY = useTransform(scrollYProgress, [0,1], ["2rem", "0rem"]);
  const opacityY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div className={`relative bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out`}>
      {/* Header */}
      <section className=' fixed w-full p-8 z-90'>
        <header className='flex justify-between items-center'>
          <button 
            onClick={toggle} 
            className={` text-lg border border-amber-300 bg-blue-500 text-white dark:text-gray-900 dark:bg-pink-600 dark:border-purple-600 px-2 py-4 rounded-md font-display `}
          >
            M|B
          </button>

          <div className='gap-6 items-center hidden md:flex'>
            <div className='flex gap-2 items-center bg-black rounded-full p-2 text-white font-inter text-lg '>
              <button className=' hover:bg-slate-500 py-2 px-6 rounded-full'>About</button>
              <span className=' hover:bg-slate-500 py-2 px-6 rounded-full'>Experience</span>
              <span className=' hover:bg-slate-500 py-2 px-6 rounded-full'>Contact</span>
            </div>
          </div>
          <div className=' md:hidden'>
            {/* <CgMenu className='size-14' /> */}
            <DarkModeButton />
          </div>
        </header>
      </section>
      {/* Homepage */}
      <motion.section
        id='home'
        ref={refs[0]}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center space-y-16"
        style={{  y: textY, opacity: opacityY }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
            <div className=''>
              <div className='w-full flex justify-center items-center'>
                <span className={`font-inter uppercase tracking-wider md:text-2xl font-bold mb-0 text-blue-600 dark:text-cyan-400 `}>Web Developer</span>
              </div>
              <div className="w-full">
                <h1 className={` whitespace-nowrap uppercase font-display text-[6vw] sm:text-[9vw] md:text-[9.75vw] lg:text-[5.5vw] mt-0 text-rose-800 dark:text-pink-500`}>
                  Marcus Biddle
                </h1>
              </div>
            </div>
            <div className='font-inter space-y-4'>
              <div className='rounded-lg  mx-4  md:max-w-4xl bg-gray-100 text-amber-700 dark:bg-gray-800 dark:text-purple-400 '>
                <p className='text-sm md:text-2xl p-4'>{homeParagraph}</p>
              </div>
              <div className='flex justify-center items-center gap-2 mb-4'>
                  <button className='bg-transparent text-amber-700 dark:text-purple-400 border-2 border-amber-700 dark:border-purple-400 font-bold rounded-full  uppercase tracking-wide px-6 py-2 md:px-8 md:py-4'>Resume</button>
                  <button className='bg-blue-500 dark:bg-pink-600 text-white dark:text-gray-900 border-2 border-amber-300 dark:border-purple-600 rounded-full shadow-2xl uppercase tracking-wide font-bold px-6 py-2 md:px-8 md:py-4'>Projects</button>
                </div>
            </div>
      </motion.section>

      {/* Projects */}
      <motion.section style={{ y: backgroundY, borderRadius: radiusY}}  id='projects' ref={refs[1]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} 
      className='relative w-full min-h-screen bg-indigo-100 dark:bg-cyan-800 rounded-4xl flex flex-col gap-8 py-16 justify-center items-center'>
        <header>
          <h2 className=' font-display text-4xl md:text-9xl tracking-wider text-rose-800 dark:text-pink-500'>Projects</h2>
        </header>
        <div className='flex w-full px-6 justify-center items-center'>
          <div className='flex w-full gap-4 md:gap-8 flex-col md:flex-row'>
            <div className='w-full border-2 border-amber-300 dark:border-purple-600 bg-gray-100 dark:bg-gray-800 px-6 py-12 rounded-lg font-inter space-y-6'>
              <div>
                <p className='text-sm text-blue-600 dark:text-cyan-400 uppercase tracking-wider'>Project</p>
                <h4 className='text-rose-900 dark:text-pink-400 text-xl'>Title Name</h4>
              </div>
              
              <ul className='flex list-none gap-2'>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
              </ul>

              <div>
                <span className='font-bold uppercase text-sm tracking-wider text-blue-600 dark:text-cyan-400'>Summary</span>
                <p className='text-blue-700 dark:text-cyan-300'>Add summary here</p>
              </div>
              
            </div>
            <div className='w-full border-2 border-amber-300 dark:border-purple-600 bg-gray-100 dark:bg-gray-800 px-6 py-12 rounded-lg font-inter space-y-6'>
              <div>
                <p className='text-sm text-blue-600 dark:text-cyan-400 uppercase tracking-wider'>Project</p>
                <h4 className='text-rose-900 dark:text-pink-400 text-xl'>Title Name</h4>
              </div>
              
              <ul className='flex list-none gap-2'>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
              </ul>

              <div>
                <span className='font-bold uppercase text-sm tracking-wider text-blue-600 dark:text-cyan-400'>Summary</span>
                <p className='text-blue-700 dark:text-cyan-300'>Add summary here</p>
              </div>
              
            </div>
            <div className='w-full border-2 border-amber-300 dark:border-purple-600 bg-gray-100 dark:bg-gray-800 px-6 py-12 rounded-lg font-inter space-y-6'>
              <div>
                <p className='text-sm text-blue-600 dark:text-cyan-400 uppercase tracking-wider'>Project</p>
                <h4 className='text-rose-900 dark:text-pink-400 text-xl'>Title Name</h4>
              </div>
              
              <ul className='flex list-none gap-2'>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
                <li className='border border-amber-300 dark:border-purple-600 bg-amber-200 dark:bg-purple-700 text-blue-700 dark:text-cyan-300 rounded-full px-4'>Tool</li>
              </ul>

              <div>
                <span className='font-bold uppercase text-sm tracking-wider text-blue-600 dark:text-cyan-400'>Summary</span>
                <p className='text-blue-700 dark:text-cyan-300'>Add summary here</p>
              </div>
              
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Skills */}
      <motion.section id='skills' ref={refs[2]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className='w-full min-h-screen p-14 grid md:grid-cols-2 items-center'>
        <header className=''>
          <h2 className='text-rose-800 dark:text-pink-500 font-display text-4xl md:text-6xl tracking-wider'>Skills</h2>
        </header>
        <div className='flex justify-around flex-col md:flex-row gap-y-8'>
          <div className='flex md:flex-col justify-between'>
            <p className='font-bold font-inter uppercase text-xl tracking-wider text-amber-700 dark:text-purple-400 mb-4'>Langauges</p>
            <ul className='uppercase font-bold flex flex-col text-lg md:items-center text-gray-400 dark:text-gray-500'>
              {skills.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className='flex md:flex-col justify-between'>
            <p className='font-bold font-inter uppercase text-xl tracking-wider text-amber-700 dark:text-purple-400 mb-4'>Frameworks/<br/>Libraries</p>
            <ul className='uppercase font-bold items-center flex flex-col text-lg text-gray-400 dark:text-gray-500'>
              {skills.frameworks.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className='flex md:flex-col justify-between'>
            <p className='font-bold font-inter uppercase text-xl tracking-wider text-amber-700 dark:text-purple-400 mb-4'>Automation/<br/>Tools</p>
            <ul className='uppercase font-bold items-center flex flex-col text-gray-400 dark:text-gray-500'>
              {skills.automation.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section id='experience' ref={refs[3]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className='w-full min-h-screen bg-indigo-100 dark:bg-cyan-800 p-4 md:p-16 flex flex-col justify-center items-center space-y-24'>
        <header className='flex items-center'>
          <h2 className='text-rose-800 dark:text-pink-500 font-display text-2xl md:text-8xl tracking-wider'>Experience</h2>
        </header>
        <div className='flex flex-col justify-center items-center space-y-16 '>
          {prevEmployments.map((prev, index) => (
            <div key={index} className='grid md:grid-cols-2'>
              <div className='space-y-4 mb-4 md:mb-0'>
                <h4 className='font-inter text-4xl text-rose-900 dark:text-pink-400'>{prev.title}</h4>
                <ul className='flex flex-wrap items-center gap-2 md:space-x-2 font-inter '>
                  {prev.toolsSkills.map((skill, index) => (
                    <li key={index} className='py-1 px-2 md:py-2 md:px-4 rounded-full border-2 text-xs md:text-sm text-blue-700 dark:text-cyan-300 bg-amber-200 dark:bg-purple-700 border-amber-300 dark:border-purple-600'>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className=' font-inter px-6 md:px-0'>
                <div className='text-md md:text-xl text-gray-400 dark:text-gray-500 flex flex-col md:flex-row justify-between '>
                  <span >{prev.company}</span> 
                  <span>{prev.startDate} - {prev.endDate}</span>
                </div>
                <ul className=' list-disc space-y-2 text-amber-700 dark:text-purple-400'>
                  {prev.bulletpoints.map((point, index) => (
                    <li key={index} className='text-lg'>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id='contact' ref={refs[4]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className='w-full h-screen p-16 flex flex-col justify-center gap-24 items-center'>
        <header className='flex items-center gap-4'>
          <h2 className='text-rose-800 dark:text-pink-500 font-display text-4xl md:text-8xl tracking-wider'>Contact</h2>
        </header>
        <div className=' font-inter'>
          <p className=' text-gray-400 dark:text-gray-500 uppercase text-sm'>Email:</p>
          <p className='text-xl text-blue-600 dark:text-cyan-400'>marc.andrewbiddle@gmail.com</p>
        </div>
        <div className='flex space-x-4 text-blue-600 dark:text-cyan-400'>
          <SlSocialLinkedin className='size-12' />
          <FaGithub className='size-12' />
        </div>
      </motion.section>
    </div>
  )
}

export default App
