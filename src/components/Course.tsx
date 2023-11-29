import React, { useEffect, useState } from 'react';
import CourseCard from './card';
import data from './../data.json';
import frame from './../assets/Frame (1).png';
import vector from './../assets/Ellipse 118.png';

type CourseData = {
  category: string;
  name: string;
  image: string;
  rating: number;
  students: number;
};

const Course: React.FC = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseData[]>([]);
  const [activeButton, setActiveButton] = useState<string>('Design');

  useEffect(() => {
    setCourses(data);
  }, []);

  useEffect(() => {
    const filtered = courses.filter(
      (course) => course.category === activeButton,
    );
    setFilteredCourses(filtered);
  }, [courses, activeButton]);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
  };

  const renderButtons = () => {
    const categories: string[] = [
      'Design',
      'Development',
      'Business',
      'Data Science',
      'Marketing',
    ];
    return categories.map((category) => (
      <button
        key={category}
        className={`${
          activeButton === category ? 'bg-[#7F56D9] px-4' : ''
        } py-2 px-3 rounded-full`}
        onClick={() => handleButtonClick(category)}
      >
        {category}
      </button>
    ));
  };

  return (
    <div className='max-w-screen-xl px-4 py-8 mt-0 md:mt-20 sm:py-12 sm:px-6 lg:px-8 relative mx-auto'>
      <div className='block md:flex items-center justify-between w-full'>
        <h1 className='text-white text-4xl mb-10 md:mb-0 md:text-7xl font-caladea font-bold text-center md:text-left'>
          Popular <span className='text-[#BEA0FF]'>Courses</span>
        </h1>
        <div className='flex-wrap gap-5 items-center text-white text-center mx-auto font-inter bg-white bg-opacity-10 rounded-full py-2 px-5'>
          {renderButtons()}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <button className='bg-[#7F56D9] px-6 py-4 rounded-full text-white font-semibold hover:bg-[#6244a3]'>
          Explore all Courses
        </button>
      </div>
      <img
        src={frame}
        alt=''
        className='absolute -bottom-16 left-0 w-32 md:w-60'
      />
      <img
        src={vector}
        alt=''
        className='absolute -bottom-8 md:-bottom-16 right-0 w-14 md:w-20'
      />
    </div>
  );
};

export default Course;
