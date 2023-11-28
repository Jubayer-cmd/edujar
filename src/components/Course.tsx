// Your CourseCard component remains the same

// Course.tsx file
import React, { useEffect, useState } from 'react';
import CourseCard from './card';
import data from './../data.json';

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
    <div className='max-w-screen-xl px-4 py-8 mt-20 sm:py-12 sm:px-6 lg:px-8 relative mx-auto'>
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
    </div>
  );
};

export default Course;
