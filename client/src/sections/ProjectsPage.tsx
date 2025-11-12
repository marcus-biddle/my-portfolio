import PageSection from '../components/PageSection'
import { FaGithub } from 'react-icons/fa'
import { GoArrowUpRight } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { TbDeviceProjector } from "react-icons/tb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartPieDonut } from '@/components/PieChart';

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
    chartData: [
      { language: "javascript", allocation: 0, fill: "var(--color-javascript)" },
      { language: "typescript", allocation: .988, fill: "var(--color-typescript)" },
      { language: "html", allocation: 0, fill: "var(--color-html)" },
      { language: "css", allocation: 0, fill: "var(--color-css)" },
      { language: "other", allocation: .012, fill: "var(--color-other)" },
    ]
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
    chartData: [
      { language: "javascript", allocation: .161, fill: "var(--color-javascript)" },
      { language: "typescript", allocation: .718, fill: "var(--color-typescript)" },
      { language: "html", allocation: .014, fill: "var(--color-html)" },
      { language: "css", allocation: .032, fill: "var(--color-css)" },
      { language: "other", allocation: .075, fill: "var(--color-other)" },
    ]
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
    chartData: [
      { language: "javascript", allocation: .185, fill: "var(--color-javascript)" },
      { language: "typescript", allocation: .797, fill: "var(--color-typescript)" },
      { language: "html", allocation: .005, fill: "var(--color-html)" },
      { language: "css", allocation: .013, fill: "var(--color-css)" },
      { language: "other", allocation: 0, fill: "var(--color-other)" },
    ]
  },
];

export const ProjectsPage = () => {
  return (
    <PageSection id="projects" title="Projects" subtitle="workshop" titleIcon={TbDeviceProjector}>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
  <CarouselContent>
    {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-2/3 ">
            <div className="p-1">
              <Card className='bg-slate-900 border border-slate-700'>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                  <CardAction>
                    <Button variant='link' className='text-white hover:underline-offset-4 hover:underline cursor-pointer'>Demo</Button>
                  </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col justify-around aspect-square p-6 w-full">
                  <div className='w-full'>
                    <ChartPieDonut chartData={project.chartData} />
                  </div>
                  <div className="space-y-2 text-white">
                  {project.points.map((point, idx) => (
                    <div key={idx} className="flex gap-1 items-start">
                      <CiCircleCheck className="size-6 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
  </CarouselContent>
  <CarouselPrevious className='bg-slate-900' />
  <CarouselNext className='bg-slate-900' />
</Carousel>
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

              <div className="space-y-2 my-8 ">
                {proj.points.map((point, idx) => (
                  <div key={idx} className="flex gap-1 items-start text-white">
                    <CiCircleCheck className="size-6 flex-shrink-0" />
                    <span className='text-white'>{point}</span>
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
