import { NavProvider } from './components/NavProvider';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { TypographyH3, TypographyH4, TypographyMuted, TypographyP, TypographySmall,  } from './components/Typography';
import { IoCalendarOutline } from "react-icons/io5";
import { Button } from './components/ui/button';
import pfp from './assets/pfp.jpg';
import { AspectRatio } from './components/ui/aspect-ratio';
import Header from './sections/Header';
import { Separator } from './components/ui/separator';
import { MdArrowOutward } from "react-icons/md";

// const RadixFilesDemo = () => {
//   const [open, setOpen] = useState(['projects'])
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50); // Change 50 to your threshold
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const highlightElem = document.querySelector('[data-slot="motion-highlight"]') as HTMLElement;
//     if (!highlightElem) return;
//     if (open.length === 0) {
//       highlightElem.style.display = 'none';
//     }
//     if (open.length > 0 && highlightElem.style.display === 'none') {
//       highlightElem.style.display = 'block'
//     }
//   }, [open])

//   return (
//     <motion.div
//       className={` text-white border border-slate-700 bg-slate-950/80 overflow-auto z-90 ${
//         scrolled
//           ? "m-8 rounded-lg transition-all duration-300"
//           : "m-0 rounded-none transition-all duration-300"
//       }`}
//     >
//       <Files className="w-full" defaultOpen={[]} >
//         <FolderItem value="portfolio">
//           <FolderTrigger
//             gitStatus="modified"
//             className="w-full flex items-center justify-between"
//           >
//             Portfolio Menu
//           </FolderTrigger>

//           <FolderContent>
//             <SubFiles open={open} onOpenChange={(open) => {
//               console.log(open);
//               setOpen(open)
//               }}>
//               <FolderItem value="pages">
//                 <FolderTrigger gitStatus="modified">Pages</FolderTrigger>

//                 <FolderContent onClick={(e) => {
//                   const target = e.target as HTMLElement;
//                   const baseName = target.innerText.split('.')[0].toLowerCase();

//                   if (baseName !== 'projects') {
//                     setOpen([]);
//                   }

//                   const element = document.getElementById(baseName);
//                   if (element) {
//                     element.scrollIntoView();
//                   } else {
//                     console.warn(`Element with id '${baseName}' not found.`);
//                   }
//                 }}
//                 >
//                   <FileItem gitStatus='modified' >Home.tsx</FileItem>
//                   <FileItem>Skills.tsx</FileItem>
//                   <FolderItem value="projects">
//                     <FolderTrigger gitStatus="untracked">Projects</FolderTrigger>

//                     <FolderContent>
//                       <FileItem gitStatus="untracked">75hard.tsx</FileItem>
//                       <FileItem gitStatus="untracked">MoodFinder.tsx</FileItem>
//                       <FileItem gitStatus="untracked">MoodFinder.tsx</FileItem>
//                     </FolderContent>
//                   </FolderItem>
//               <FileItem>Contact.tsx</FileItem>
//               <FileItem gitStatus="deleted">blog.tsx</FileItem>
//                 </FolderContent>
//               </FolderItem>

//               <FolderItem value="socials">
//                 <FolderTrigger gitStatus="untracked">Socials</FolderTrigger>

//                 <FolderContent>
//                   <FileItem>github.tsx</FileItem>
//                   <FileItem gitStatus="untracked">linkedin.tsx</FileItem>
//                 </FolderContent>
//               </FolderItem>
//             </SubFiles>
//           </FolderContent>
//         </FolderItem>

//         {/* <FileItem icon={FileJsonIcon}>package.json</FileItem> */}
//       </Files>
//     </motion.div>
//   );
// };

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
    title: '75 Hard Edition',
    description: 'The app tracks the 75 Hard challenge with strict daily logging and reset logic, enforcing discipline through habit streaks and user progress visualization. It is built with React and TypeScript, featuring state persistence and a responsive user interface. Additionally, it implements secure user authentication and profile management via Supabase Auth.',
    github: 'https://github.com/marcus-biddle/75-Edition',
    demo: 'https://75-edition.vercel.app/',
    tags: ['React', 'Typescript', 'TailwindCSS', 'Supabase', 'Auth Integration']
  },
  {
    title: 'Stock News Hub',
    description: 'The application utilizes APIs to dynamically fetch financial news and company data, integrating AI for summary analysis that provides concise insights. It is designed with a responsive interface and implements efficient state management to ensure seamless browsing. Additionally, it persists user preferences and browsing state using local storage to maintain continuity across sessions.',
    github: 'https://github.com/marcus-biddle/Stock-Tracker',
    demo: 'https://stock-tracker-roan.vercel.app/',
    tags: ['React', 'Typescript', 'Python', 'API', 'LLM Service']
  },
  {
    title: 'FitTrack',
    description: 'The project is built with React, TypeScript, and TailwindCSS to provide an optimal user experience. It is designed to better visualize data by integrating the Google API for fetching data dynamically. The backend is developed using Express and Node.js, ensuring robust server-side logic and performance.',
    github: 'https://github.com/marcus-biddle/FitTrackPro',
    demo: 'https://fit-track-pro-beta.vercel.app/',
    tags: ['React', 'Tailwind', 'Google API']
  },
];

function App() {

 

  return (
    <div className='relative min-h-screen bg-black'>
      <GravityStarsBackground starsOpacity={.85} className='fixed z-40 text-emerald-500' />
    <NavProvider>
    {/* <NavigationMenu /> */}
    <div className='fixed w-full z-90'>
          {/* <RadixFilesDemo /> */}
          <Header />
      </div>
    <main className='relative w-full font-inter text-white flex flex-col items-center justify-center pt-18 px-6 space-y-8'>
      <div className='relative w-full max-w-4xl p-4 items-center bg-slate-950/80 rounded-md z-80'>
        <div className='flex w-full gap-4 items-center'>
          <div className=' h-24 w-24'>
            <AspectRatio ratio={1/1} className="">
                <img
                  src={pfp}
                  alt="Photo by Drew Beamer"
                  className="h-full w-full rounded-full object-cover"
                />
            </AspectRatio>
          </div>
          <div className='w-full text-white space-y-1'>
            <TypographyH3>Marcus Biddle</TypographyH3>
            <div className='flex items-center gap-2 h-4'>
              <TypographyMuted>Developer</TypographyMuted>
              <Separator orientation='vertical' className=' bg-slate-500' />
              <TypographyMuted>Fitness</TypographyMuted>
              <Separator orientation='vertical' className=' bg-slate-500' />
              <TypographyMuted>Cat Owner</TypographyMuted>
            </div>
            
          </div>
        </div>
        <TypographyP>
          I'm a Web Developer with a background work experience in Quality Assuarance specializing in Automation. I enjoy creating projects that can help improve someone's lifestyle and provide a seamless user experience
          in the process. When I'm not hunched over at my computer, I enjoy going to the gym or being out in nature, which influences my interests in what I create.
        </TypographyP>

        <Separator className='my-24 bg-slate-500' />
        <div>
          {employment.map((job, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 items-start">
              <div className='flex items-center gap-1 text-blue-800'>
                <IoCalendarOutline />
                <span>{job.start} - {job.end}</span>
              </div>
              <div className='col-span-2'>
                <div className='flex flex-col'>
                  <TypographyH4>{job.title}</TypographyH4>
                  <div className='text-slate-500'>
                    <TypographyH4>{job.employer}</TypographyH4>
                  </div>
                </div>
                <TypographyP>{job.description}</TypographyP>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='relative w-full max-w-4xl flex flex-col items-center justify-center rounded-md Z-50 bg-slate-950/50 text-white border border-slate-700'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 w-full">
          <div className='w-full flex flex-col justify-center'>
            <TypographyH4>University of California - Riverside</TypographyH4>
            <div>
              <TypographyP>Bachelors in Economics</TypographyP>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center'>
            <TypographySmall>Relevant Courses</TypographySmall>
            <div className='text-slate-400'>
              <TypographySmall> OOP, Discrete Structures, IT Management</TypographySmall>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full max-w-4xl items-center rounded-md z-80 space-y-8 '>
        {projects.map((project, index) => (
          <div key={index} className='bg-slate-950/80 p-4 rounded-md'>
            <div className='flex justify-between'>
              <TypographyH4>{project.title}</TypographyH4>
              <Button variant={'outline'} size={'icon'} className='bg-transparent border-none'>
                <MdArrowOutward className='size-6 text-blue-800' />
              </Button>
            </div>
            <TypographyP>{project.description}</TypographyP>
            <ul className='flex flex-wrap my-8 gap-8'>
              {project.tags.map((tag, index) => (
                <li key={index} className='text-sm text-blue-700'>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer className='relative w-full max-w-4xl items-center flex gap-8 justify-center z-80 my-12 text-slate-400'>
        <a href='https://github.com/marcus-biddle' className='hover:text-white cursor-pointer'>Github</a>
        <a href='https://www.linkedin.com/in/marcusbiddle/' className='hover:text-white cursor-pointer'>Linkedin</a>
      </footer>
    </main>
    
    </NavProvider>
    </div>
    
    
  )
}

export default App
