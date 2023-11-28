import headerPic from './../assets/headerPic.png';
export default function Header() {
  return (
    <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 relative mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div>
          <h1 className='font-caladea text-white text-7xl leading-1 tracking-wide'>
            <span className='text-[#BEA0FF]'>Best courses</span> are
            <br />
            waiting to enrich <br /> your skill
          </h1>
          <p className='mt-10 text-[#B0B0D1] text-2xl'>
            Provides you with the latest online learning system and material
            that help your knowledge growing.
          </p>
        </div>
        <div className='justify-self-center w-full'>
          <img src={headerPic} alt='' className='text-center w-full' />
        </div>
      </div>
    </div>
  );
}
