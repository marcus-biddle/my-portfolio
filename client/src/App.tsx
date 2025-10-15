import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import { useRef } from 'react';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import useHalfwaySnapScroll from './hooks/useSnapScrollReturn';
import { CgMenu } from "react-icons/cg";

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

const words = [
  "Innovative",
  "Driven",
  "Detail-oriented",
  "Collaborative",
  "Passionate",
  "Creative",
  "Analytical",
  "Adaptable",
  "Reliable",
  "Problem-solver",
];

function App() {
  const ref = useRef(null);
  const { refs } = useHalfwaySnapScroll(5);
  const { scrollYProgress } = useScroll({
    target: refs[0],
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, .8], ["0%", "90%"]);
  const backgroundY = useTransform(scrollYProgress, [0,1], ["-10%", "0%"]);
  const heightY = useTransform(scrollYProgress, [0,1], ["100%", "0%"]);
  const radiusY = useTransform(scrollYProgress, [0,1], ["2rem", "0rem"]);
  // const colorY = useTransform(scrollYProgress, [0, .45], ["#ffffff", "#000000"]);
  const opacityY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])

  return (
    <div className='relative'>
      {/* Header */}
      <section className=' fixed w-full p-8 z-90'>
        <header className='flex justify-between items-center'>
          <button className='bg-black text-white size-14 rounded-md font-display'>M|B</button>
          <div className='gap-6 items-center hidden md:flex'>
            <div className='flex gap-2 items-center bg-black rounded-full p-2 text-white font-inter text-lg '>
              <button className=' hover:bg-slate-500 py-2 px-6 rounded-full'>About</button>
              <span className=' hover:bg-slate-500 py-2 px-6 rounded-full'>Experience</span>
              <span className=' hover:bg-slate-500 py-2 px-6 rounded-full'>Contact</span>
            </div>
            {/* <button type='button' className='bg-indigo-500 font-inter text-white font-bold tracking-wide border border-indigo-500 rounded-full py-4 px-6 capitalize'></button> */}
          </div>
          <button className=' md:hidden'>
            <CgMenu className='size-14' />
          </button>
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
                <span className=' font-inter uppercase tracking-wider md:text-2xl font-bold text-indigo-500 mb-0'>Web Developer</span>
              </div>
              <div className="w-full">
                <h1 className="whitespace-nowrap uppercase font-display text-[6vw] sm:text-[9vw] md:text-[9.75vw] lg:text-[5.5vw] mt-0">
                  Marcus Biddle
                </h1>
              </div>
            </div>
            <div className='font-inter space-y-4'>
              <div className='bg-indigo-300 rounded-lg border-4 border-indigo-500 mx-4  md:max-w-4xl'>
                <h4 className='text-sm md:text-2xl p-4'>{homeParagraph}</h4>
              </div>
              <div className='flex justify-center items-center gap-2 mb-4'>
                  <button className='bg-indigo-500 border-2 border-black shadow-2xl text-black/80 font-bold rounded-full  uppercase tracking-wide px-6 py-2 md:px-8 md:py-4'>Resume</button>
                  <button className='bg-black text-indigo-500 border-2 border-indigo-600 rounded-full shadow-2xl uppercase tracking-wide font-bold px-6 py-2 md:px-8 md:py-4'>Projects</button>
                </div>
            </div>
      </motion.section>

      {/* Projects */}
      <motion.section style={{ y: backgroundY, borderRadius: radiusY}}  id='projects' ref={refs[1]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} 
      className='relative w-full min-h-screen bg-black rounded-4xl text-white flex flex-col gap-8 py-16 justify-center items-center'>
        <header>
          <h2 className=' font-display text-4xl md:text-9xl tracking-wider'>Projects</h2>
        </header>
        <div className='flex w-full px-6 justify-center items-center'>
          <div className='flex w-full gap-4 md:gap-8 flex-col md:flex-row'>
            <div className='w-full border-2 border-white px-6 py-12 hover:shadow-indigo-400 hover:shadow-xl rounded-lg font-inter space-y-6'>
              <div>
                <p className='text-sm text-white/25 uppercase tracking-wider'>Project</p>
                <h4>Title Name</h4>
              </div>
              
              <ul className='flex list-none gap-2'>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
              </ul>

              <div>
                <span className='font-bold uppercase text-sm tracking-wider text-white/25'>Summary</span>
                <p>Add summary here</p>
              </div>
              
            </div>
            <div className='border-2 border-white px-6 py-12 hover:shadow-indigo-400 hover:shadow-xl rounded-lg font-inter space-y-6'>
              <div>
                <p className='text-sm text-white/25 uppercase tracking-wider'>Project</p>
                <h4>Title Name</h4>
              </div>
              
              <ul className='flex list-none gap-2'>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
              </ul>

              <div>
                <span className='font-bold uppercase text-sm tracking-wider text-white/25'>Summary</span>
                <p>Add summary here</p>
              </div>
              
            </div>
            <div className='border-2 border-white px-6 py-12 hover:shadow-indigo-400 hover:shadow-xl rounded-lg font-inter space-y-6'>
              <div>
                <p className='text-sm text-white/25 uppercase tracking-wider'>Project</p>
                <h4>Title Name</h4>
              </div>
              
              <ul className='flex list-none gap-2'>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
                <li className='border border-white/25 rounded-full px-4'>Tool</li>
              </ul>

              <div>
                <span className='font-bold uppercase text-sm tracking-wider text-white/25'>Summary</span>
                <p>Add summary here</p>
              </div>
              
            </div>
          </div>
        </div>
        
      </motion.section>
      
      {/* Skills */}
      <motion.section id='skills' ref={refs[2]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className='w-full min-h-screen text-white bg-black p-16 grid md:grid-cols-2 items-center'>
        <header className=''>
          <h2 className=' font-display text-4xl md:text-6xl tracking-wider'>Skills</h2>
        </header>
        <div className='flex justify-around flex-col md:flex-row gap-y-8'>
          <div className='flex md:flex-col justify-between'>
            <p className='font-bold font-inter uppercase text-xl tracking-wider text-white mb-4'>Langauges</p>
            <ul className=' flex flex-col text-lg md:items-center'>
              {skills.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className='flex md:flex-col justify-between'>
            <p className='font-bold font-inter uppercase text-xl tracking-wider text-white mb-4'>Frameworks/<br/>Libraries</p>
            <ul className=' items-center flex flex-col text-lg'>
              {skills.frameworks.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className='flex md:flex-col justify-between'>
            <p className='font-bold font-inter uppercase text-xl tracking-wider text-white mb-4'>Automation/<br/>Tools</p>
            <ul className=' items-center flex flex-col'>
              {skills.automation.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section id='experience' ref={refs[3]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className='w-full min-h-screen bg-black text-white p-4 md:p-16 flex flex-col justify-center items-center space-y-24'>
        <header className='flex items-center'>
          <h2 className=' font-display text-2xl md:text-8xl tracking-wider'>Experience</h2>
        </header>
        <div className='flex flex-col justify-center items-center space-y-16 '>
          {prevEmployments.map((prev, index) => (
            <div key={index} className='grid md:grid-cols-2'>
              <div className='space-y-4 mb-4 md:mb-0'>
                <h4 className='font-inter text-4xl'>{prev.title}</h4>
                <ul className='flex flex-wrap items-center gap-2 md:space-x-2 font-inter '>
                  {prev.toolsSkills.map((skill, index) => (
                    <li key={index} className='bg-indigo-950 py-1 px-2 md:py-2 md:px-4 rounded-full border-2 border-indigo-900 text-xs md:text-sm text-indigo-200'>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className=' font-inter px-6 md:px-0'>
                <div className='text-md md:text-xl text-white/50 flex flex-col md:flex-row justify-between '>
                  <span >{prev.company}</span> 
                  <span>{prev.startDate} - {prev.endDate}</span>
                </div>
                <ul className=' list-disc space-y-2'>
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
      <motion.section id='contact' ref={refs[4]} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className='w-full h-screen bg-black text-white p-16 flex flex-col justify-center gap-24 items-center'>
        <header className='flex items-center gap-4'>
          <h2 className=' font-display text-4xl md:text-8xl tracking-wider'>Contact</h2>
        </header>
        <div className=' font-inter'>
          <p className=' text-white/50 uppercase text-sm'>Email:</p>
          <p className='text-xl'>marc.andrewbiddle@gmail.com</p>
        </div>
        <div className='flex space-x-4'>
          <SlSocialLinkedin className='size-12' />
          <FaGithub className='size-12' />
        </div>
      </motion.section>
    </div>
  )
}

export default App
