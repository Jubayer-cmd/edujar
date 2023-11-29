import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import group1 from './../assets/Group (1).png';
import group2 from './../assets/Group (2).png';
import group3 from './../assets/Group 512822.png';
import group4 from './../assets/Group 512823.png';
import group5 from './../assets/Group.png';
const CompanyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [group1, group2, group3, group4, group5];

  return (
    <div className='w-full relative'>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className='outline-none'>
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className='mx-auto w-40 h-40 object-contain'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyCarousel;
