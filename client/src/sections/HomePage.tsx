import PageSection from '../components/PageSection'
import { TbDeviceProjector } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

export const HomePage = () => {
  return (
    <PageSection id="home" title='Marcus Biddle' subtitle='Tech Enthusiast'>
        <div className='flex flex-row gap-4'>
            <button className='flex items-center border border-slate-400/20 shadow-2xl text-slate-900 justify-center gap-2 bg-slate-400 rounded-full py-2 px-4'>
                <TbDeviceProjector className=' size-6' />
                <span>Projects</span>
            </button>
            <button className='flex items-center border border-slate-500/20 shadow-2xl justify-center gap-2 bg-slate-500/10 text-slate-500 rounded-full py-2 px-4'>
                <span>Resume</span>
                <GoArrowUpRight className=' size-6' />
            </button>
        </div>
    </PageSection>
  )
}
