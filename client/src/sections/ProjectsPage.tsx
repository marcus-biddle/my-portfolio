import { CiCircleCheck } from "react-icons/ci";
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
import { Separator } from '@/components/ui/separator';

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
    <div className='z-50 p-8 w-full relative flex flex-col items-center'>
      <div className='w-full mb-4'>
        <h1 className='text-2xl md:text-6xl uppercase tracking-tighter font-bold text-slate-500'>Projects</h1>
        <Separator className='my-2 bg-slate-700' />
      </div>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
  <CarouselContent>
    {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-2/3 ">
            <div className="p-1">
              <Card className='bg-slate-950/50 border border-slate-700 text-white'>
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
    </div>
  );
};
