import PageSection from '../components/PageSection'
import { MdSchool } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";

export const SkillsPage = () => {

  return (
    <PageSection id="skills" title='Skills' subtitle='Crafting' titleIcon={GiSkills}>
        <div className='w-full space-y-4'>
            {/* <div className='flex justify-center items-center gap-2'>
                <MdSchool className=' size-10' />
                <div className={`bg-gray-800 px-2 py-4 rounded-md w-full`}>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                        <span className='text-xs uppercase text-cyan-700'>College</span>
                        <span className='text-sm'>University of California, Riverside</span>
                        </div>
                        <div className='flex flex-col'>
                        <span className='text-xs uppercase text-cyan-700'>Bachelors</span>
                        <span className='text-sm'>Economics</span>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4  mx-auto">
                {/* First box spans 3 columns on md+ screens, full width on small */}
                <div className="md:col-span-3 bg-gray-800 text-white p-6 rounded-lg flex items-center justify-center">
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                        <div>
                            <HiMiniUserGroup className='size-12 ' />
                        </div>
                    <div className=''>
                        <div className='grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-16  mx-auto'>
                            <div className=' col-span-3 md:col-span-2 space-y-8'>
                                <div className='flex flex-col'>
                                    <span className='text-xs uppercase text-cyan-700 font-semibold'>Employment</span>
                                    <span className='text-sm text-white'>Quality Assurance Automation Engineer</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs uppercase text-cyan-700 font-semibold'>Company</span>
                                    <div className='flex flex-col'>
                                        <span className='text-sm text-white'>ShastaQA</span>
                                        <span className='text-sm text-gray-400'>January 2023 - December 2023</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col col-span-3 md:col-span-4'>
                                <span className='text-xs uppercase text-cyan-700 font-semibold mb-2'>Skills Acquired</span>
                                <div className='flex flex-wrap gap-2 text-sm text-white'>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Automated testing
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Test case design and execution
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Defect tracking & root cause analysis
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Selenium & Cypress automation
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                API testing (Postman, REST)
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Agile testing workflows
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Continuous integration (Jenkins)
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Frontend debugging (React, TypeScript)
                                </span>
                                <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                Team collaboration & documentation
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Second box takes 1 column on md+ screens, full width on small */}
                <div className="bg-gray-800 text-white p-6 rounded-lg flex items-center justify-center">
                    <div className='flex md:flex-col justify-center items-center gap-8'>
                        <div>
                            <MdSchool className=' size-10' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col'>
                                <span className='text-xs uppercase text-cyan-700'>College</span>
                                <span className='text-sm'>University of California, Riverside</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-xs uppercase text-cyan-700'>Bachelors</span>
                                <span className='text-sm'>Economics</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third box spans full width */}
                <div className="md:col-span-4 bg-gray-800 text-white p-6 rounded-lg flex items-center justify-center">
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                        <div>
                            <HiMiniUserGroup className='size-12 ' />
                        </div>
                    <div className=''>
                        <div className='grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-16  mx-auto'>
                            <div className='col-span-3 md:col-span-2 space-y-8'>
                            <div className='flex flex-col'>
                            <span className='text-xs uppercase text-cyan-700 font-semibold'>Employment</span>
                            <span className='text-sm text-white'>Sales Product Representative</span>
                            </div>
                            <div className='flex flex-col'>
                            <span className='text-xs uppercase text-cyan-700 font-semibold'>Company</span>
                            <div className='flex flex-col'>
                                <span className='text-sm text-white'>Camping World</span>
                                <span className='text-sm text-gray-400'>April 2024 - Present</span>
                            </div>
                            </div>
                            </div>

                            <div className='flex flex-col col-span-4'>
                                <span className='text-xs uppercase text-cyan-700 font-semibold mb-2'>Skills Acquired</span>
                                <div className='flex flex-wrap gap-2 text-sm text-white'>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Customer relationship management
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Product presentation & upselling
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Consultative sales approach
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Performance-driven goal setting
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Cross-department collaboration
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    CRM tools (Salesforce, proprietary dealership systems)
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Negotiation & closing techniques
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Customer retention & repeat sales
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Fourth box spans full width */}
                <div className="md:col-span-4 bg-gray-800 text-white p-6 rounded-lg flex items-center">
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                        <div>
                            <HiMiniUserGroup className='size-12 ' />
                        </div>
                        <div className=''>
                            <div className='grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-16  mx-auto'>
                                <div className='col-span-3 md:col-span-2 space-y-8'>
                                    <div className='flex flex-col'>
                                        <span className='text-xs uppercase text-cyan-700 font-semibold'>Employment</span>
                                        <span className='text-sm text-white'>Shift Manager / Bartender</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs uppercase text-cyan-700 font-semibold'>Company</span>
                                        <div className='flex flex-col'>
                                            <span className='text-sm text-white'>Woodstock's Pizzeria Inc</span>
                                            <span className='text-sm text-gray-400'>April 2021 - January 2023</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col col-span-4'>
                                    <span className='text-xs uppercase text-cyan-700 font-semibold mb-2'>Skills Acquired</span>
                                    <div className='flex flex-wrap gap-2 text-sm text-white'>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Customer service
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Team leadership
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    Inventory management
                                    </span>
                                    <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                                    POS systems
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='w-full flex flex-col md:flex-row gap-8'>
                <div className='flex justify-center items-center gap-2'>
                <HiMiniUserGroup className='size-10' />
                <div className='bg-gray-800 px-4 py-4 rounded-md w-full max-w-lg'>
                <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>
                    <span className='text-xs uppercase text-cyan-700 font-semibold'>Employment</span>
                    <span className='text-sm text-white'>Shift Manager / Bartender</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs uppercase text-cyan-700 font-semibold'>Company</span>
                    <div className='flex flex-col'>
                        <span className='text-sm text-white'>Woodstock's Pizzeria Inc</span>
                        <span className='text-sm text-gray-400'>April 2021 - January 2023</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs uppercase text-cyan-700 font-semibold mb-2'>Skills Acquired</span>
                    <div className='flex flex-wrap gap-2 text-sm text-white'>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Customer service
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Team leadership
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Inventory management
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        POS systems
                        </span>
                    </div>
                </div>
                </div>
                </div>
                </div>
                
                <div className='flex justify-center items-center gap-2'>
                <HiMiniUserGroup className='size-10' />
                <div className='bg-gray-800 px-4 py-4 rounded-md w-full max-w-lg'>
                <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>
                    <span className='text-xs uppercase text-cyan-700 font-semibold'>Employment</span>
                    <span className='text-sm text-white'>Sales Product Representative</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs uppercase text-cyan-700 font-semibold'>Company</span>
                    <div className='flex flex-col'>
                        <span className='text-sm text-white'>Camping World</span>
                        <span className='text-sm text-gray-400'>April 2024 - Present</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs uppercase text-cyan-700 font-semibold mb-2'>Skills Acquired</span>
                    <div className='flex flex-wrap gap-2 text-sm text-white'>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Customer relationship management
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Product presentation & upselling
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Consultative sales approach
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Performance-driven goal setting
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Cross-department collaboration
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        CRM tools (Salesforce, proprietary dealership systems)
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Negotiation & closing techniques
                        </span>
                        <span className='border border-gray-500 rounded-full px-3 py-1 text-xs capitalize'>
                        Customer retention & repeat sales
                        </span>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div> */}
            
        </div>

        
    </PageSection>
  )
}
