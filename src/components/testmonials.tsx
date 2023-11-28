import people from './../assets/people.png';

export default function Testmonials() {
  return (
    <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto'>
        <div className='bg-[#381D74] md:col-span-2 rounded-lg'>
          <p>hello</p>
        </div>
        <div className='justify-self-end order-first md:order-last'>
          <img src={people} alt='' className='' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-28 w-4/5 mx-auto items-center'>
        <div className='md:col-span-2'>
          <p className='text-white text-3xl text-center md:text-left md:text-5xl font-caladea'>
            Join our <span className='text-[#BDA0FF]'>world's largest</span>
            <span className='block'>learning platform today</span>
          </p>
          <p className='font-inter text-white font-light text-sm md:text-2xl mt-10 text-center md:text-left'>
            Start learning by registering and get 30 days free trail
          </p>
        </div>
        <div>
          <button className='bg-[#FF5156] w-80 -80 font-inter text-lg md:text-xl text-white px-16 py-3 rounded-3xl'>
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
