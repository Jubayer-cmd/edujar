import { useState } from 'react';
import CourseCard from './card';

export default function Course() {
  const [activeButton, setActiveButton] = useState('Design');

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
    // Add logic here to handle the click event, such as filtering content based on the button clicked.
  };
  return (
    <div className='max-w-screen-xl px-4 py-8 mt-20 sm:py-12 sm:px-6 lg:px-8 relative mx-auto'>
      <div className='block md:flex items-center justify-between w-full'>
        <h1 className='text-white text-4xl mb-10 md:mb-0 md:text-7xl font-caladea font-bold text-center md:text-left'>
          Popular <span className='text-[#BEA0FF]'>Courses</span>
        </h1>
        <div className='flex-wrap gap-5 items-center text-white text-center mx-auto font-inter bg-white bg-opacity-10 rounded-full py-2 px-5'>
          <button
            className={`${
              activeButton === 'Design' ? 'bg-[#7F56D9] px-4' : ''
            } py-2 px-4 rounded-full`}
            onClick={() => handleButtonClick('Design')}
          >
            Design
          </button>
          <button
            className={`${
              activeButton === 'Development' ? 'bg-[#7F56D9] px-4' : ''
            } py-2 px-3 rounded-full`}
            onClick={() => handleButtonClick('Development')}
          >
            Development
          </button>
          <button
            className={`${
              activeButton === 'Business' ? 'bg-[#7F56D9] px-4' : ''
            } py-2 px-3 rounded-full`}
            onClick={() => handleButtonClick('Business')}
          >
            Business
          </button>
          <button
            className={`${
              activeButton === 'Data Science' ? 'bg-[#7F56D9] px-4' : ''
            } py-2 px-3 rounded-full`}
            onClick={() => handleButtonClick('Data Science')}
          >
            Data Science
          </button>
          <button
            className={`${
              activeButton === 'Marketing' ? 'bg-[#7F56D9] px-4' : ''
            } py-2 px-3 rounded-full`}
            onClick={() => handleButtonClick('Marketing')}
          >
            Marketing
          </button>
        </div>
      </div>
      <CourseCard />
    </div>
  );
}
