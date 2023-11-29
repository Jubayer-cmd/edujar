import headerPic from './../assets/headerPic.png';
import vector from './../assets/Vector.png';
import { FaSearch } from 'react-icons/fa';
import CompanyCarousel from './Company';

export default function Header() {
  return (
    <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 relative mx-auto z-1'>
      <img src={vector} alt='' className='absolute left-0 top-14 w-5 md:w-6 ' />
      <div className='grid grid-cols-1 md:grid-cols-5 items-center'>
        <div className='col-span-3 '>
          <h1 className='font-caladea text-white text-5xl text-center md:text-left md:text-7xl leading-1 tracking-wide'>
            <span className='text-[#BEA0FF]'>Best courses</span> are
            <br />
            waiting to enrich <br /> your skill
          </h1>
          <p className='mt-16 text-center w-full md:text-left md:w-4/5 text-[#B0B0D1] text-2xl'>
            Provides you with the latest online learning system and material
            that help your knowledge growing.
          </p>
          <div className='relative bg-white border-gray-300 rounded-full my-16 w-full py-2 '>
            <div className='flex items-center'>
              <span className='ml-5 text-gray-400'>
                <FaSearch />
              </span>
              <input
                type='text'
                className='py-2 pl-10 pr-12 focus:outline-none border-none'
                placeholder='Want to learn?'
              />
              <button className='absolute inset-y-1 right-4 px-5 bg-[#7F56D9] text-white rounded-full'>
                Explore
              </button>
            </div>
          </div>

          <p className='hidden md:block md:absolute bottom-14 left-28 font-inter text-xl text-[#D9ECFF]'>
            Our Course Partners
          </p>
          <div className='hidden md:block md:absolute left-24 -bottom-20 md:max-w-screen-sm lg:max-w-screen-lg z-10 '>
            <CompanyCarousel />
          </div>
          <div className='hidden md:block md:absolute left-12 -bottom-24 md:-bottom-28 z-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-11/12 h-60'
              viewBox='0 0 1616 173'
              fill='none'
            >
              <path
                d='M44.1066 6C44.1066 8.94552 46.4945 11.3333 49.44 11.3333C52.3855 11.3333 54.7733 8.94552 54.7733 6C54.7733 3.05448 52.3855 0.666667 49.44 0.666667C46.4945 0.666667 44.1066 3.05448 44.1066 6ZM407.656 6C407.656 8.94552 410.044 11.3333 412.989 11.3333C415.935 11.3333 418.323 8.94552 418.323 6C418.323 3.05448 415.935 0.666667 412.989 0.666667C410.044 0.666667 407.656 3.05448 407.656 6ZM49.44 5H16V7H49.44V5ZM0 21V157H2V21H0ZM16 173H1600V171H16V173ZM1616 157V25.8802H1614V157H1616ZM1616 25.8802V21H1614V25.8802H1616ZM1600 5H412.989V7H1600V5ZM1616 21C1616 12.1634 1608.84 5 1600 5V7C1607.73 7 1614 13.268 1614 21H1616ZM1600 173C1608.84 173 1616 165.837 1616 157H1614C1614 164.732 1607.73 171 1600 171V173ZM0 157C0 165.837 7.16344 173 16 173V171C8.26801 171 2 164.732 2 157H0ZM16 5C7.16346 5 0 12.1634 0 21H2C2 13.268 8.26802 7 16 7V5Z'
                fill='white'
                fillOpacity='0.3'
              />
            </svg>
          </div>
        </div>

        <div className='justify-self-center w-full col-span-2'>
          <img src={headerPic} alt='' className='text-center w-full' />
        </div>
      </div>
      <div className='block md:hidden w-72 mx-auto'>
        <p className=' font-inter text-2xl text-[#D9ECFF] text-center mt-16'>
          Our Course Partners
        </p>
        <CompanyCarousel />
      </div>
    </div>
  );
}
