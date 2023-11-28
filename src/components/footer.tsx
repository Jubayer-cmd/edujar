import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { CiPhone, CiTwitter, CiFacebook, CiInstagram } from 'react-icons/ci';
import { PiBehanceLogo, PiDribbbleLogoLight } from 'react-icons/pi';
import { TfiEmail } from 'react-icons/tfi';
import { IoLocationOutline } from 'react-icons/io5';
export default function FooterPage() {
  return (
    <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 mx-auto bg-gradient-to-bl from-purple-700 to-transparent'>
      <div className='grid grid-cols-2 md:grid-cols-5 items-center gap-5'>
        <div className='col-span-6 md:col-span-2'>
          <div className='flex items-center'>
            <LiaLaptopCodeSolid className='bg-gradient-to-b from-purple-500 to-indigo-800 text-7xl text-white p-2 rounded-full' />
            <p className='text-white font-caladea text-5xl font-bold ml-4'>
              Edujar
            </p>
          </div>
          <p className='font-inter text-xl text-[#B0B0D1] mt-10'>
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
          </p>
        </div>

        <div className='mx-auto col-span-3 md:col-span-1'>
          <p className='font-caladea text-2xl text-white mb-5'>Quick Links</p>
          <div className='flex items-center'>
            <p className='mr-5 text-[#B0B0D1] text-xl'>About</p>
            <p className=' text-[#B0B0D1] text-xl'>Blog</p>
          </div>
          <div className='flex items-center mt-3'>
            <p className='mr-5 text-[#B0B0D1] text-xl'>Course</p>
            <p className='text-[#B0B0D1] text-xl'>Contact</p>
          </div>
        </div>

        <div className='col-span-3 md:col-span-1'>
          <p className='font-caladea text-2xl text-white mb-5'>Contact us</p>
          <div>
            <p className='mr-5 text-[#B0B0D1] text-xl'>
              <CiPhone className='inline-block' /> (209) 555-0104
            </p>
            <div className='flex items-center'>
              <TfiEmail className='inline-block mt-4 mr-1 text-[#B0B0D1] text-base' />
              <p className='mr-5 text-[#B0B0D1] text-xl mt-3'>google@hot.com</p>
            </div>
          </div>
        </div>

        <div className='col-span-6 md:col-span-1'>
          <p className='mr-5 text-[#B0B0D1] text-xl mt-3'>
            <IoLocationOutline className='inline-block' />
            2715 Ash Dr. San Jose, South Dakota
          </p>
        </div>
      </div>
      <hr className='bg-[#DADAF752] my-10' />
      <div className='flex items-center justify-between'>
        <p className='text-[#B0B0D1] text-xl'>
          Copyright 2023© | All Rights Reserved
        </p>
        <div className='flex items-center  text-[#B0B0D1] text-2xl'>
          <CiFacebook className='mx-2' />
          <CiTwitter className='mx-2' />
          <CiInstagram className='mx-2' />
          <PiBehanceLogo className='mx-2' />
          <PiDribbbleLogoLight className='mx-2' />
        </div>
      </div>
    </div>
  );
}
