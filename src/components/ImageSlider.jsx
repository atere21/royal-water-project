import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import hotelImage1 from '../assets/img/rooms/newhot3.JPG';
import hotelImage2 from '../assets/img/rooms/newhot23.JPG';
import hotelImage3 from '../assets/img/rooms/newhot5.JPG';
import hotelImage4 from '../assets/img/rooms/newhot6.JPG';
import hotelImage5 from '../assets/img/rooms/newhot7.JPG';
import hotelImage6 from '../assets/img/rooms/newhot8.JPG';
import hotelImage7 from '../assets/img/rooms/newhot9.JPG';
import hotelImage8 from '../assets/img/rooms/newhot10.JPG';
import hotelImage9 from '../assets/img/rooms/newhot11.JPG';
import hotelImage19 from '../assets/img/rooms/newhot12.JPG';
import hotelImage10 from '../assets/img/rooms/newhot13.JPG';
import hotelImage11 from '../assets/img/rooms/new23.JPG';
import hotelImage12 from '../assets/img/rooms/newhot23.JPG';
import hotelImage13 from '../assets/img/rooms/newhot16.JPG';
import hotelImage14 from '../assets/img/rooms/newhot17.JPG';
import hotelImage15 from '../assets/img/rooms/newhot18.JPG';
import hotelImage16 from '../assets/img/rooms/newhot19.JPG';
import hotelImage17 from '../assets/img/rooms/newhot20.JPG';
import hotelImage18 from '../assets/img/rooms/newhot21.JPG';
import hotelImage20 from '../assets/img/rooms/newhot22.JPG';

const ImageSlider = () => {
  const slides = [
    {
      url: hotelImage1,
      title: 'Lobster',
    },
    {
      url:  hotelImage2,
      title: 'Sushi',
    },
    {
      url:  hotelImage3,
      title: 'Pasta',
    },

    {
      url:  hotelImage4,
      title: 'Pasta',
    },

    {
      url:  hotelImage5,
      title: 'Pasta',
    },

    {
      url:  hotelImage6,
      title: 'Pasta',
    },

    {
      url:  hotelImage7,
      title: 'Pasta',
    },

    {
      url:  hotelImage8,
      title: 'Pasta',
    },
    {
      url:  hotelImage9,
      title: 'Salmon',
    },

    {
      url:  hotelImage10,
      title: 'Salmon',
    },

    {
      url:  hotelImage11,
      title: 'Salmon',
    },

    {
      url:  hotelImage12,
      title: 'Salmon',
    },

    {
      url:  hotelImage13,
      title: 'Salmon',
    },

    {
      url:  hotelImage14,
      title: 'Salmon',
    },

    {
      url:  hotelImage15,
      title: 'Salmon',
    },

    {
      url:  hotelImage16,
      title: 'Salmon',
    },

    {
      url:  hotelImage17,
      title: 'Salmon',
    },

    {
      url:  hotelImage18,
      title: 'Salmon',
    },

    {
      url:  hotelImage19,
      title: 'Salmon',
    },

    {
      url:  hotelImage20,
      title: 'Salmon',
    },
    // Rest of the slides...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1000px] h-[700px] w-full m-auto py-16 px-4 relative group object-contain'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      {/* left-arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* right-arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
