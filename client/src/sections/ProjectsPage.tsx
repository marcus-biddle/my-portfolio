import PageSection from '../components/PageSection'
import { FaGithub } from 'react-icons/fa'
import { GoArrowUpRight } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { TbDeviceProjector } from "react-icons/tb";

const projects = [
  {
    title: '75 Hard Edition',
    subtitle: 'Full Stack • 2025',
    bgImage:
      'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    points: [
      'Tracks the 75 Hard challenge with strict daily logging and reset logic.',
      'Enforces discipline through habit streaks and user progress visualization.',
      'Built with React and TypeScript with state persistence and responsive UI.',
      'Implements secure user authentication and profile management via Supabase Auth.'
    ],
    github: 'https://github.com/marcus-biddle/75-Edition',
    demo: 'https://75-edition.vercel.app/',
  },
  {
    title: 'Stock News Hub',
    subtitle: 'AI Integration • API integration • 2025',
    bgImage:
      'https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
    points: [
    'Utilizes APIs to fetch financial news and company data dynamically.',
    'Integrates AI for summary analysis of news articles providing concise insights.',
    'Responsive design with efficient state management for seamless browsing.',
    'Persists user preferences and browsing state using local storage for continuity.',
    ],
    github: 'https://github.com/marcus-biddle/Stock-Tracker',
    demo: 'https://stock-tracker-roan.vercel.app/',
  },
  {
    title: 'FitTrack',
    subtitle: 'Google API • Express/NodeJS • 2025',
    bgImage:
      'https://images.unsplash.com/photo-1494257610566-28280a243b22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    points: [
    'Built with React, TypeScript, and TailwindCSS for optimal user experience.',
    'Created to visualize data better using Google API to fetch data.',
    'Backend developed with Express and Node.js for robust server-side logic.',
    ],
    github: 'https://github.com/marcus-biddle/FitTrackPro',
    demo: 'https://fit-track-pro-beta.vercel.app/',
  },
];

export const ProjectsPage = () => {
  return (
    <PageSection id="projects" title="Projects" subtitle="workshop" titleIcon={TbDeviceProjector}>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="relative flex-1 rounded-lg overflow-hidden w-full md:w-1/3">
            <div
              className="absolute blur-xs pointer-events-none inset-0 z-10 bg-black bg-opacity-50 border-2 border-gray-900/50 rounded-md"
              style={{
                backgroundImage: `url(${proj.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.4',
              }}
            />

            <div className="relative select-auto z-20 p-6 text-white font-inter">
              <div className="space-y-4 border-b-1 pb-4 border-slate-500/70">
                <div className="space-x-1 uppercase text-xs text-cyan-500/80 tracking-tight">
                  <span>{proj.subtitle}</span>
                </div>
                <h4 className="text-3xl">{proj.title}</h4>
              </div>

              <div className="space-y-2 my-8">
                {proj.points.map((point, idx) => (
                  <div key={idx} className="flex gap-1 items-start">
                    <CiCircleCheck className="size-6 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 my-4">
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="size-10" />
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-black w-full rounded-md py-2 flex gap-1 items-center justify-center"
                >
                  View Demo
                  <GoArrowUpRight className="size-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};
