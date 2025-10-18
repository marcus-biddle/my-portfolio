import PageSection from '../components/PageSection'
import { PiContactlessPayment } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <PageSection id="contact" title='Contact' subtitle="Summon" titleIcon={PiContactlessPayment}>
        <div className=' font-inter'>
                  <p className=' text-gray-400 dark:text-gray-500 uppercase text-sm'>Email:</p>
                  <p className='text-md'>marc.andrewbiddle@gmail.com</p>
                </div>
                <div className='flex space-x-4 my-4'>
                  <SlSocialLinkedin className='size-8' />
                  <FaGithub className='size-8' />
                </div>
    </PageSection>
  )
}
