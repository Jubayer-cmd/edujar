/* eslint-disable @typescript-eslint/ban-ts-comment */
import people from './../assets/people.png';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import StarsRating from 'react-star-rate';
export default function Testmonials() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      // @ts-expect-error
      sliderRef.current?.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      // @ts-ignore
      sliderRef.current?.slickNext();
    }
  };

  // Sample testimonial data for the slider
  const testimonials = [
    {
      id: 1,
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      author: 'John Doe',
      position: 'CEO,Company',
      rating: 5,
      image:
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1333',
    },
    {
      id: 2,
      quote:
        'Testimonial 2 content goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      author: 'Jane Smith',
      position: 'CTO,Company',
      rating: 4.5,
      image:
        'https://media.licdn.com/dms/image/C4E03AQEEZUPHzQoE0A/profile-displayphoto-shrink_400_400/0/1623677348445?e=2147483647&v=beta&t=4yBsLbVOvjpli7F64hdqdgYCNg6KkkCwqV8WIHW-YZA',
    },
    {
      id: 3,
      quote:
        'Testimonial 2 content goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      author: 'Jhon Wick',
      position: 'Action Hero',
      rating: 4,
      image:
        'data:image/jpeg;base64,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',
    },
    // Add more testimonials as needed
  ];
  return (
    <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto'>
        <div className='bg-[#381D74] md:col-span-2 rounded-lg relative'>
          <div className='w-full'>
            <Slider {...settings} ref={sliderRef}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className='outline-none'>
                  <div className=' p-4 rounded-md shadow-md'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center mt-10 mb-5'>
                        <img
                          src={testimonial.image}
                          alt='Avatar'
                          className='w-12 h-12 rounded-full'
                        />
                        <div className='ml-4'>
                          <p className='font-inter text-[#D9ECFF] text-base font-semibold'>
                            {testimonial.author}
                          </p>
                          <p className='font-inter text-[#D9ECFF] text-sm'>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <div>
                        <StarsRating value={testimonial.rating} />
                      </div>
                    </div>
                    <hr className='mb-8' />
                    <p className='font-inter text-[#D9ECFF] text-xl'>
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            {/* Custom position for buttons */}
            <button
              className='absolute -bottom-16 right-56 md:bottom-10 md:right-36 text-black rounded-full w-8 h-8 flex items-center justify-center z-10'
              onClick={handlePrevious}
            >
              <FaArrowLeft className='text-white text-2xl' />
            </button>
            <button
              className='absolute -bottom-16 right-40 md:bottom-10 md:right-20  text-black rounded-full w-8 h-8 flex items-center justify-center z-10'
              onClick={handleNext}
            >
              <FaArrowRight className='text-white text-2xl' />
            </button>
          </div>
        </div>
        <div className='justify-self-end order-first md:order-last'>
          <img src={people} alt='' className='' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-28 w-11/12 lg:w-4/5 mx-auto items-center'>
        <div className='md:col-span-2'>
          <p className='text-white text-3xl text-center md:text-left md:text-5xl font-caladea'>
            Join our <span className='text-[#BDA0FF]'>world's largest</span>
            <span className='block'>learning platform today</span>
          </p>
          <p className='font-inter text-white font-light text-sm md:text-2xl mt-10 text-center md:text-left'>
            Start learning by registering and get 30 days free trail
          </p>
        </div>
        <div className='mx-auto'>
          <button className='bg-[#FF5156] w-80 font-inter text-lg md:text-xl text-white px-16 py-3 rounded-3xl'>
            Join as Instructor
          </button>
          <br />
          <button className='bg-[#7F56D9] w-80 font-inter text-white text-lg md:text-xl px-16 py-3 rounded-3xl mt-5'>
            Join as Student
          </button>
        </div>
      </div>
    </div>
  );
}
