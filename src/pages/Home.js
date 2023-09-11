import React from 'react';
import Rooms from '../components/Rooms'
import BookForm from '../components/BookForm';
import HeroSlider from '../components/HeroSlider';
import Interior from '../components/Interior';

import ImageSlider from '../components/ImageSlider';
import Contact from '../components/Contact';
import Plan from '../components/Plan';

const Home = () => {
  return (
  <>
  <HeroSlider/>
   <div className='container mx-auto relative'>
    <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute
     lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
      <BookForm/>
   </div>
   </div>
  <Rooms/>
  <Interior/>
  <Plan/>
  <ImageSlider/>
  <Contact/>
  </>
  )
};

export default Home;
