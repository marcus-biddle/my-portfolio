import PageSection from '../components/PageSection'
import { FaGithub } from 'react-icons/fa'
import { GoArrowUpRight } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { TbDeviceProjector } from "react-icons/tb";

export const ProjectsPage = () => {
  return (
    <PageSection id="projects" title='Projects' subtitle='workshop' titleIcon={TbDeviceProjector}>
        <div className=' w-full flex flex-col md:flex-row gap-8'>
            <div className='relative flex-1 rounded-lg overflow-hidden w-full'>
            {/* Background image */}
            <div
                className='absolute pointer-events-none inset-0 z-10 bg-black bg-opacity-50 border-2 border-gray-900/50 rounded-md'
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.30',
                }}
            />

            {/* Text content */}
            <div className='relative select-auto z-20 p-6 text-white min-h-50 font-inter'>
            <div className=' space-y-4 border-b-1 pb-4 border-slate-500/70'>
                {/* subtitle */}
                <div className=' space-x-1 uppercase text-xs text-cyan-500/80 tracking-tight'>
                    <span>Full stack</span> <span>{"\u2022"}</span> <span>2025</span>
                </div>
                {/* Title */}
                <h4 className='text-3xl'>Workout Tracker</h4>
            </div>

            {/* tools */}
            <div className=' space-y-2 my-8'>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Developed using Vite with React and TypeScript, styled with TailwindCSS for responsive design.</span>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Integrates with the ExerciseDB API to dynamically fetch exercise data.</span>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Implements efficient state management and local data persistence for a seamless user experience.</span>
                </div>
            </div>

            <div className='flex justify-center items-center gap-2 my-4'>
                <FaGithub className='size-10' />
                <button onClick={() => console.log('clicked')} className=' bg-gray-200 text-black w-full rounded-md py-2 flex gap-1 items-center justify-center'>
                    View Demo
                    <GoArrowUpRight className='size-5' />
                </button>
            </div>
            </div>
            </div>
            <div className='relative flex-1 rounded-lg overflow-hidden w-full'>
            {/* Background image */}
            <div
                className='absolute pointer-events-none inset-0 z-10 bg-black bg-opacity-50 border-2 border-gray-900/50 rounded-md'
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.30',
                }}
            />

            {/* Text content */}
            <div className='relative select-auto z-20 p-6 text-white min-h-50 font-inter'>
            <div className=' space-y-4 border-b-1 pb-4 border-slate-500/70'>
                {/* subtitle */}
                <div className=' space-x-1 uppercase text-xs text-cyan-500/80 tracking-tight'>
                    <span>Full stack</span> <span>{"\u2022"}</span> <span>2025</span>
                </div>
                {/* Title */}
                <h4 className='text-3xl'>Workout Tracker</h4>
            </div>

            {/* tools */}
            <div className=' space-y-2 my-8'>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Developed using Vite with React and TypeScript, styled with TailwindCSS for responsive design.</span>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Integrates with the ExerciseDB API to dynamically fetch exercise data.</span>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Implements efficient state management and local data persistence for a seamless user experience.</span>
                </div>
            </div>

            <div className='flex justify-center items-center gap-2 my-4'>
                <FaGithub className='size-10' />
                <button onClick={() => console.log('clicked')} className=' bg-gray-200 text-black w-full rounded-md py-2 flex gap-1 items-center justify-center'>
                    View Demo
                    <GoArrowUpRight className='size-5' />
                </button>
            </div>
            </div>
            </div>
            <div className='relative flex-1 rounded-lg overflow-hidden w-full'>
            {/* Background image */}
            <div
                className='absolute pointer-events-none inset-0 z-10 bg-black bg-opacity-50 border-2 border-gray-900/50 rounded-md'
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.30',
                }}
            />

            {/* Text content */}
            <div className='relative select-auto z-20 p-6 text-white min-h-50 font-inter'>
            <div className=' space-y-4 border-b-1 pb-4 border-slate-500/70'>
                {/* subtitle */}
                <div className=' space-x-1 uppercase text-xs text-cyan-500/80 tracking-tight'>
                    <span>Full stack</span> <span>{"\u2022"}</span> <span>2025</span>
                </div>
                {/* Title */}
                <h4 className='text-3xl'>Workout Tracker</h4>
            </div>

            {/* tools */}
            <div className=' space-y-2 my-8'>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Developed using Vite with React and TypeScript, styled with TailwindCSS for responsive design.</span>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Integrates with the ExerciseDB API to dynamically fetch exercise data.</span>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <CiCircleCheck className='size-6' />
                    </div>
                    <span>Implements efficient state management and local data persistence for a seamless user experience.</span>
                </div>
            </div>

            <div className='flex justify-center items-center gap-2 my-4'>
                <FaGithub className='size-10' />
                <button onClick={() => console.log('clicked')} className=' bg-gray-200 text-black w-full rounded-md py-2 flex gap-1 items-center justify-center'>
                    View Demo
                    <GoArrowUpRight className='size-5' />
                </button>
            </div>
            </div>
            </div>
        </div>
        
    </PageSection>
  )
}
