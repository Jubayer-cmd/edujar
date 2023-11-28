import './../index.css';
import { CiPen, CiDatabase, CiImageOn, CiMusicNote1 } from 'react-icons/ci';
import { IoLayersOutline } from 'react-icons/io5';
import { IoMdPaper, IoIosTrendingUp } from 'react-icons/io';
import { BsArrowUpRight } from 'react-icons/bs';
import { FiPieChart } from 'react-icons/fi';
export default function CategoryPage() {
  return (
    <div className='max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 '>
      <h1 className='font-caladea text-center text-4xl md:text-7xl font-bold text-white my-11'>
        Most Popular <span className='text-[#BEA0FF]'>Category</span>
      </h1>

      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiPen className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>Design</p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <IoLayersOutline className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>Development</p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <IoMdPaper className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>
                Professional Dev.
              </p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiImageOn className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>Photography</p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>
          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiDatabase className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>Data Science</p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <FiPieChart className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>Business</p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <IoIosTrendingUp className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>Marketing</p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>

          <div className='w-80 h-20 p-5 flex items-center justify-between bg-[#524870] rounded-lg'>
            <div className='flex items-center'>
              <CiMusicNote1 className='text-white text-3xl mr-2' />
              <p className='text-white font-inter text-2xl'>Music</p>
            </div>
            <div className='w-10 h-10 bg-[#7F56D9] rounded'>
              <BsArrowUpRight className='text-2xl text-white mx-auto mt-2 font-semibold' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
