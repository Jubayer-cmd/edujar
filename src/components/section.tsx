import img from './../assets/girl-edu.png';
import {
  PiGraduationCap,
  PiUsersThreeLight,
  PiUsersLight,
} from 'react-icons/pi';
import { CiVideoOn } from 'react-icons/ci';
import star from './../assets/star.png';

export default function Section() {
  return (
    <div className='max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 relative'>
      <img src={star} alt='star' className='absolute right-48 top-0' />
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 mx-auto'>
          <div className='justify-self-center order-2'>
            <h1 className='font-caladea font-bold text-5xl md:text-7xl text-white'>
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
          <div className='justify-self-center order-1 md:order-2'>
            <img src={img} alt='edu-girl' />
          </div>
          <div className='justify-self-center order-3'>
            <div className='flex items-center my-10'>
              <PiGraduationCap className='bg-gradient-to-b from-purple-500 to-indigo-800 text-7xl text-white p-2 rounded-full' />
              <div className='ml-5'>
                <p className='font-caladea text-white text-2xl font-bold'>
                  300
                </p>
                <p className='font-inter text-xl text-[#B0B0D1] font-light mt-1'>
                  Instructors
                </p>
              </div>
            </div>

            <div className='flex items-center my-10'>
              <PiUsersLight className='bg-gradient-to-b from-purple-500 to-indigo-800 text-7xl text-white p-2 rounded-full' />
              <div className='ml-5'>
                <p className='font-caladea text-white text-2xl font-bold'>
                  20,000+
                </p>
                <p className='font-inter text-xl text-[#B0B0D1] font-light mt-1'>
                  Students
                </p>
              </div>
            </div>
            <div className='flex items-center my-10'>
              <CiVideoOn className='bg-gradient-to-b from-purple-500 to-indigo-800 text-7xl text-white p-2 rounded-full' />
              <div className='ml-5'>
                <p className='font-caladea text-white text-2xl font-bold'>
                  10,000+
                </p>
                <p className='font-inter text-xl text-[#B0B0D1] font-light mt-1'>
                  Videos
                </p>
              </div>
            </div>
            <div className='flex items-center my-10'>
              <PiUsersThreeLight className='bg-gradient-to-b from-purple-500 to-indigo-800 text-7xl text-white p-2 rounded-full' />
              <div className='ml-5'>
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
    </div>
  );
}
