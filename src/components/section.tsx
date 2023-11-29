import img from './../assets/girl-edu.png';
import {
  PiGraduationCap,
  PiUsersThreeLight,
  PiUsersLight,
} from 'react-icons/pi';
import { CiVideoOn } from 'react-icons/ci';
import star from './../assets/star.png';
import dot from './../assets/dot.png';
export default function Section() {
  return (
    <div className='max-w-screen-xl px-4 py-8 mt-20  sm:py-12 sm:px-6 lg:px-8 relative mx-auto'>
      <img
        src={star}
        alt='star'
        className='absolute right-10 bottom-44 md:right-28 md:-top-10 w-16 h-16'
      />
      <img src={dot} alt='dot' className='absolute left-8 bottom-0 w-48 h-48' />
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-5 mx-auto'>
        <div className='justify-self-center order-2 col-span-5 md:col-span-2'>
          <h1 className='font-caladea font-bold text-4xl md:text-7xl text-white text-center md:text-left'>
            What is our <span className='text-[#BDA0FF]'>difference</span>
          </h1>

          <p className='font-inter text-[#B0B0D1] text-xl mt-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
            commodo consequat.
          </p>
          <p className='font-inter text-[#B0B0D1] text-xl mt-5 mb-10'>
            ut labore et dolore magna aliqua. ex ea commodo consequat.{' '}
          </p>
          <button className='bg-[#7F56D9] px-6 py-4 rounded-full text-white font-semibold hover:bg-[#6244a3]'>
            Learn More
          </button>
        </div>

        <div className='justify-self-center order-1 md:order-2 col-span-5 md:col-span-2'>
          <img src={img} alt='edu-girl' />
        </div>

        <div className='justify-self-center md:justify-self-end order-3 col-span-5 md:col-span-1 my-16 md:my-0'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-14 '>
            <div className='flex items-center'>
              <PiGraduationCap className='bg-gradient-to-b from-purple-500 to-indigo-800 text-5xl md:text-7xl text-white p-2 rounded-full' />
              <div className='ml-2 md:ml-5'>
                <p className='font-caladea text-white text-2xl font-bold'>
                  300
                </p>
                <p className='font-inter text-xl text-[#B0B0D1] font-light mt-1'>
                  Instructors
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <PiUsersLight className='bg-gradient-to-b from-purple-500 to-indigo-800 text-5xl md:text-7xl text-white p-2 rounded-full' />
              <div className='ml-2 md:ml-5'>
                <p className='font-caladea text-white text-2xl font-bold'>
                  20,000+
                </p>
                <p className='font-inter text-xl text-[#B0B0D1] font-light mt-1'>
                  Students
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <CiVideoOn className='bg-gradient-to-b from-purple-500 to-indigo-800 text-5xl md:text-7xl  text-white p-2 rounded-full' />
              <div className='ml-2 md:ml-5'>
                <p className='font-caladea text-white text-2xl font-bold'>
                  10,000+
                </p>
                <p className='font-inter text-xl text-[#B0B0D1] font-light mt-1'>
                  Videos
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <PiUsersThreeLight className='bg-gradient-to-b from-purple-500 to-indigo-800 text-5xl md:text-7xl text-white p-2 rounded-full' />
              <div className='ml-2 md:ml-5'>
                <p className='font-caladea text-white text-2xl font-bold'>
                  1,00,000+
                </p>
                <p className='font-inter text-xl text-[#B0B0D1] font-light mt-1'>
                  {`User’s`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='font-caladea text-white text-center text-6xl mt-24 font-bold'>
        Testimonials
      </p>
    </div>
  );
}
