import StarsRating from 'react-star-rate';
import { IoMdPlay } from 'react-icons/io';

type CourseCardProps = {
  course: {
    category: string;
    name: string;
    image: string;
    rating: number;
    students: number;
  };
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { category, name, image, rating, students } = course;

  return (
    <div className='bg-[#381D74] rounded-xl mt-10 w-'>
      <img
        src={image}
        alt={name}
        className='w-full h-60 object-cover rounded-t-xl shadow-lg'
      />
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <IoMdPlay className='bg-[#7966EA] rounded-full inline-block text-2xl p-1 mr-2 text-white' />
            <p className='text-[#D9ECFF] font-inter'>10x Videos</p>
          </div>

          <p className='bg-[#DADAF738] px-4 py-1 text-[#D9ECFF] font-inter rounded-2xl'>
            {category}
          </p>
        </div>
        <p className='py-8 font-inter text-[#D9ECFF] text-2xl font-bold'>
          {name}
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
              {students}+ Students
            </p>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-between'>
          <StarsRating
            value={rating}
            style={{
              full: {
                star: {
                  width: '15px',
                  height: '15px', // Adjust the width of the active (full) star
                },
              },
            }}
          />
          <p className='text-[#D9ECFF] font-inter text-base underline'>
            Enroll now
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
