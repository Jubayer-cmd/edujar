import StarsRating from 'react-star-rate';
import { IoMdPlay } from 'react-icons/io';
export default function CourseCard() {
  return (
    <div className='w-96 mt-10'>
      <div className='bg-[#381D74] rounded-xl'>
        <img
          src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww'
          alt=''
          className='w-full h-60 object-cover rounded-t-xl shadow-lg'
        />
        <div className='p-5'>
          <div className='flex items-center justify-between'>
            <div className='flex'>
              <IoMdPlay className='bg-[#7966EA] rounded-full inline-block text-2xl p-1 mr-2 text-white' />
              <p className='text-[#D9ECFF] font-inter'>10x Lesson</p>
            </div>

            <p className='bg-[#DADAF738] px-4 py-1 text-[#D9ECFF] font-inter rounded-2xl'>
              Design
            </p>
          </div>
          <p className='py-8 font-inter text-[#D9ECFF] text-2xl font-bold'>
            Python for Financial Analysis Next and Algorithmic Trading
          </p>
          <hr />
          <div className='grid grid-cols-3 divide-x items-center my-2'>
            <div className='col-span-2 flex items-center'>
              <img
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
                alt='Avatar'
                className='w-12 h-12 rounded-full'
              />
              <div className='ml-4'>
                <p className='font-inter text-[#D9ECFF] text-base font-semibold'>
                  Adam Smith
                </p>
                <p className='font-inter text-[#D9ECFF] text-sm'>
                  Python Developer
                </p>
              </div>
            </div>
            <div className='justify-self-end'>
              <p className='py-4 ml-2 font-inter text-[#D9ECFF] text-sm'>
                50+ Student
              </p>
            </div>
          </div>
          <hr />
          <div className='flex items-center justify-between'>
            <StarsRating value={4} />
            <p className='text-[#D9ECFF] font-inter text-base underline'>
              Enroll now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
