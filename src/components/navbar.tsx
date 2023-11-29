import { useState } from 'react';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import vector from './../assets/Frame.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='max-w-screen-xl px-2 md:px-4 bg-[#2C1F4A] relative pt-4 mx-auto'>
      <img
        src={vector}
        alt=''
        className='absolute top-0 left-64 w-14 hidden lg:block'
      />
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <LiaLaptopCodeSolid className='bg-gradient-to-b from-purple-500 to-indigo-800 text-5xl text-white p-2 rounded-full' />
            <p className='text-white font-caladea text-4xl font-bold ml-4'>
              Edujar
            </p>
          </div>
          <div className='hidden md:block'>
            {/* Navigation Links - Desktop */}
            <div className='ml-10 flex items-baseline space-x-10'>
              <a
                href='#'
                className='text-white hover:text-gray-300 font-inter text-xl font-semibold'
              >
                Home
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-300 font-inter text-xl font-semibold'
              >
                About
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-300 font-inter text-xl font-semibold'
              >
                Course
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-300 font-inter text-xl font-semibold'
              >
                Blog
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-300 font-inter text-xl font-semibold'
              >
                Contact
              </a>
            </div>
          </div>
          <div className='hidden md:block'>
            <button className='bg-transparent border mr-4 px-6 py-2 rounded-full text-white font-semibold hover:bg-[#5244a3]'>
              Login
            </button>
            <button className='bg-[#7F56D9] px-4 py-2 rounded-full text-white font-semibold hover:bg-[#6244a3]'>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className='mr-2 flex md:hidden absolute inset-y-0 right-0'>
            <button
              onClick={toggleMenu}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-16 z-50 bg-[#2C1F4A] ${
          isOpen ? 'block' : 'hidden'
        }`}
        id='mobile-menu'
      >
        <div className='px-2 pt-5 pb-3 space-y-2 sm:px-3'>
          {/* Mobile Navigation Links */}
          <a href='#' className='text-gray-300 hover:text-white block'>
            Home
          </a>
          <a href='#' className='text-gray-300 hover:text-white block'>
            About
          </a>
          <a href='#' className='text-gray-300 hover:text-white block'>
            Course
          </a>
          <a href='#' className='text-gray-300 hover:text-white block'>
            Blog
          </a>
          <a href='#' className='text-gray-300 hover:text-white block'>
            Contact
          </a>
          <button className='bg-transparent border mr-4 px-4 py-1 rounded-full text-white font-semibold hover:bg-[#5244a3]'>
            Login
          </button>
          <button className='bg-[#7F56D9] px-2 py-1 rounded-full text-white font-semibold hover:bg-[#6244a3]'>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
