import { NavProvider } from './components/NavProvider';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { IoCalendarOutline, IoSchoolOutline } from "react-icons/io5";
import pfp from './assets/pfp.jpeg';
import { AspectRatio } from './components/ui/aspect-ratio';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import Header from './sections/Header';

const employment = [
  {
    employer: 'Camping World',
    start: 'May 2024',
    end: 'Present',
    currentJob: true,
    title: 'Sales Representative',
    description: 'Maintained comprehensive product knowledge to deliver tailored customer solutions and exceeded sales quotas by 20%. Collaborated with finance and service teams to streamline purchase and inventory workflows, enhancing operational efficiency.'
  },
  {
    employer: 'ShastaQA',
    start: 'Jan 2023',
    end: 'Dec 2023',
    currentJob: false,
    title: 'Automation Quality Assurance Engineer',
    description: 'Developed and implemented Selenium and JavaScript-based automation frameworks, achieving 80% coverage across company processes. Conducted regression, functional, and REST API testing, troubleshooting and documenting reproducible issues. Collaborated closely with developers and stakeholders to triage, prioritize, and resolve defects, utilizing TestRail and Jira.'
  },
  {
    employer: "Woodstocks Pizzeria",
    start: 'April 2021',
    end: 'Jan 2023',
    currentJob: false,
    title: 'Shift Manager',
    description: 'Supervised daily operations and led a team of 15, managed inventory, cash handling, and procedures to ensure efficient service and reduce waste. Trained new hires on POS and inventory systems. Conducted delivery inspections to maintain product quality.'
  },
  {
    employer: 'University of California, Riverside',
    start: 'Sept 2017',
    end: 'March 2020',
    currentJob: false,
    title: 'Sports Athletics and Facilities Crew Member',
    description: 'Assisted with set-up, maintenance, and breakdown of athletic facilities and equipment for events and training. Supported logistics such as seating, signage, and cleanliness to enhance athlete and spectator experience. Managed equipment inventory for efficient access and organization.'
  }
];

const projects = [
  {
    title: 'Habit Tracker',
    description: 'Built for my love of every day mundane data. Allows me to track simple things to see how I can progress over time. The app allows the user to create a habit that is measureable where they can update the data and track how far away they are each day from their goal.',
    github: 'https://github.com/marcus-biddle/Habit-Tracker',
    demo: 'https://habit-tracker-smoky-eta.vercel.app/',
    tags: ['React', 'Tailwind', 'Supabase', 'PostgresSQL', 'React Router', 'ShadeCN', 'Vercel']
  },
  {
    title: 'Mood - song searcher',
    description: 'Came across key words such as "embeddings" and "vector searches" where I discovered how much they can improve the capabilities of finding relevant and meaningful information in complex data. Therefore, I created this project to grasp the basic understanding on how to create embeddings on songs through the use of OpenAI and using Supabase functions to retrieve the songs for the search result.',
    github: 'https://github.com/marcus-biddle/Mood',
    demo: 'https://mood-nine-pied.vercel.app/',
    tags: ['React', 'Typescript', 'TailwindCSS', 'Supabase', 'OpenAI', 'Vector Searching', 'Embeddings']
  },
  {
    title: 'Stock News Hub',
    description: 'The application utilizes APIs to dynamically fetch financial news and company data, integrating AI for summary analysis that provides concise insights. It is designed with a responsive interface and implements efficient state management to ensure seamless browsing. Additionally, it persists user preferences and browsing state using local storage to maintain continuity across sessions.',
    github: 'https://github.com/marcus-biddle/Stock-Tracker',
    demo: 'https://stock-tracker-roan.vercel.app/',
    tags: ['React', 'Typescript', 'Python', 'API', 'LLM Service']
  },
];

function App() {
  return (
    <div className='relative min-h-screen bg-black'>
      <GravityStarsBackground starsOpacity={.85} className='fixed z-40 text-emerald-500' />
      <NavProvider>
        <Header />
        <main className='relative w-full font-inter text-white flex flex-col items-center justify-center pt-32 px-6 space-y-8'>
      <div id="about" className='relative w-full max-w-4xl z-80 scroll-mt-32'>
        {/* Profile Section */}
        <div className='relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 md:p-12 shadow-2xl'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5 pointer-events-none' />
          
          <div className='relative flex flex-col md:flex-row gap-8 items-start md:items-center'>
            {/* Profile Image */}
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-sm' />
              <div className='relative w-32 h-32 md:w-36 md:h-36'>
                <AspectRatio ratio={1/1} className="rounded-full overflow-hidden ring-4 ring-slate-800/50">
                  <img
                    src={pfp}
                    alt="Marcus Biddle"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
            </div>

            {/* Profile Info */}
            <div className='flex-1 space-y-4'>
              <div>
                <h3 className='scroll-m-20 text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent'>
                  Marcus Biddle
                </h3>
                <div className='flex flex-wrap items-center gap-3 mt-3'>
                  {['Developer', 'Fitness', 'Cats'].map((tag, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 text-xs font-medium rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-blue-500/50 transition-colors'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className='relative mt-8 pt-8 border-t border-slate-800/50'>
            <p className='text-slate-300 leading-relaxed text-base md:text-lg'>
              I'm a Web Developer with a background in Quality Assurance, specializing in Automation. I love building projects that make my life easier and more enjoyable. When I'm not coding, I'm usually at the gym or out in nature, and those experiences definitely shape how I approach the things I create.
            </p>
          </div>
        </div>

        {/* Employment Section */}
        <div id="experience" className='mt-12 space-y-6 scroll-mt-32'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent' />
            <h2 className='text-xl font-semibold text-white px-4'>Work Experience</h2>
            <div className='h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent' />
          </div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-slate-700 to-transparent hidden md:block' />

            <div className='space-y-8'>
              {employment.map((job, index) => (
                <div
                  key={index}
                  className='relative group'
                >
                  {/* Timeline dot */}
                  <div className='absolute left-0 md:left-6 top-6 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950 z-10 hidden md:block group-hover:ring-blue-500/30 transition-all' />

                  <div className='ml-0 md:ml-16 bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 md:p-8 hover:border-slate-700/70 transition-all hover:shadow-lg hover:shadow-blue-500/5'>
                    <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4'>
                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors'>
                          {job.title}
                        </h3>
                        <p className='text-slate-400 font-medium'>
                          {job.employer}
                        </p>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-blue-400 bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20 w-fit'>
                        <IoCalendarOutline className='w-4 h-4' />
                        <span className='font-medium'>{job.start} - {job.end}</span>
                      </div>
                    </div>
                    <p className='text-slate-300 leading-relaxed text-sm md:text-base'>
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Education Section */}
      <div id="education" className='relative w-full max-w-4xl z-80 mt-12 scroll-mt-32'>
        <div className='flex items-center gap-3 mb-8'>
          <div className='h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent' />
          <h2 className='text-xl font-semibold text-white px-4'>Education</h2>
          <div className='h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent' />
        </div>

        <div className='relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 md:p-10 shadow-2xl hover:border-slate-700/70 transition-all'>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none' />
          
          <div className='relative'>
            <div className='flex flex-col md:flex-row md:items-start gap-6 md:gap-8'>
              {/* Icon/Visual Element */}
              <div className='flex-shrink-0'>
                <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 flex items-center justify-center hover:scale-105 transition-transform'>
                  <IoSchoolOutline className='w-8 h-8 text-emerald-400' />
                </div>
              </div>

              {/* Education Content */}
              <div className='flex-1 space-y-6'>
                <div>
                  <h3 className='text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent'>
                    University of California - Riverside
                  </h3>
                  <div className='flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-500/20 w-fit mt-3'>
                    <span className='text-sm font-medium'>Bachelors in Economics</span>
                  </div>
                </div>

                {/* Relevant Courses */}
                <div className='pt-4 border-t border-slate-800/50'>
                  <p className='text-sm font-medium text-slate-400 mb-4 uppercase tracking-wide'>Relevant Courses</p>
                  <div className='flex flex-wrap gap-3'>
                    {['OOP', 'Discrete Structures', 'IT Management'].map((course, idx) => (
                      <span
                        key={idx}
                        className='px-4 py-2 text-sm font-medium rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default'
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div id="projects" className='relative w-full max-w-4xl z-80 mt-12 scroll-mt-32'>
        <div className='flex items-center gap-3 mb-8'>
          <div className='h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent' />
          <h2 className='text-xl font-semibold text-white px-4'>Projects</h2>
          <div className='h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent' />
        </div>

        <div className='space-y-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 md:p-10 shadow-2xl hover:border-slate-700/70 transition-all hover:shadow-lg hover:shadow-blue-500/5'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity' />
              
              <div className='relative'>
                {/* Header */}
                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6'>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors'>
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className='flex items-center gap-3'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all'
                      aria-label='View on GitHub'
                    >
                      <FaGithub className='w-5 h-5' />
                    </a>
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all group/link'
                    >
                      <span className='text-sm font-medium'>Live Demo</span>
                      <FaExternalLinkAlt className='w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform' />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className='text-slate-300 leading-relaxed text-base mb-6'>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-3 pt-4 border-t border-slate-800/50'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className='relative w-full max-w-4xl z-80 my-16'>
        <div className='flex flex-col items-center gap-6'>
          <div className='h-px w-full max-w-md bg-gradient-to-r from-transparent via-slate-700 to-transparent' />
          
          <div className='flex items-center gap-6'>
            <a
              href='https://github.com/marcus-biddle'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/60 border border-slate-800/50 text-slate-400 hover:text-white hover:border-slate-700/70 hover:bg-slate-800/60 transition-all group'
              aria-label='GitHub Profile'
            >
              <FaGithub className='w-5 h-5 group-hover:scale-110 transition-transform' />
              <span className='text-sm font-medium'>GitHub</span>
            </a>
            
            <a
              href='https://www.linkedin.com/in/marcusbiddle/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/60 border border-slate-800/50 text-slate-400 hover:text-white hover:border-slate-700/70 hover:bg-slate-800/60 transition-all group'
              aria-label='LinkedIn Profile'
            >
              <FaLinkedin className='w-5 h-5 group-hover:scale-110 transition-transform' />
              <span className='text-sm font-medium'>LinkedIn</span>
            </a>
          </div>

          <p className='text-sm text-slate-500 mt-2'>
            © {new Date().getFullYear()} Marcus Biddle. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
    
    </NavProvider>
    </div>
    
    
  )
}

export default App
