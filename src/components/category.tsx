import './../index.css';
import { CiPen, CiDatabase, CiImageOn, CiMusicNote1 } from 'react-icons/ci';
import { IoLayersOutline } from 'react-icons/io5';
import { IoMdPaper, IoIosTrendingUp } from 'react-icons/io';
import { BsArrowUpRight } from 'react-icons/bs';
import { FiPieChart } from 'react-icons/fi';
export default function CategoryPage() {
  return (
    <div className='max-w-screen-xl px-4 py-14 mx-auto sm:py-12 sm:px-6 lg:px-8 '>
      <h1 className='font-caladea text-center text-4xl md:text-7xl font-bold text-white my-11'>
        Most Popular <span className='text-[#BEA0FF]'>Category</span>
      </h1>

      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto my-10'>
          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiPen className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-xl'>Design</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <IoLayersOutline className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-xl'>Development</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <IoMdPaper className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-xl'>Professional Dev.</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />{' '}
            </div>
          </div>

          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiImageOn className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-xl'>Photography</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>
          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiDatabase className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-xl'>Data Science</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <FiPieChart className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-xl'>Business</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <IoIosTrendingUp className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-xl'>Marketing</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-72 p-2 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiMusicNote1 className='text-white text-2xl mr-2' />
              <p className='text-white font-inter text-xl'>Music</p>
            </div>
            <div className='w-8 h-8 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
