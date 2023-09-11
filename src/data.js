import Room1Img from './assets/img/rooms/business.JPG';
import Room1ImgLg from './assets/img/rooms/business.JPG';
import Room2Img from './assets/img/new/executivebed.jpg';
import Room2ImgLg from './assets/img/rooms/executive.JPG';
import Room3Img from './assets/img/new/royalliving.jpg';
import Room3ImgLg from './assets/img/rooms/royalnew.JPG';
import Room4Img from './assets/img/rooms/deluxe.JPG';
import Room4ImgLg from './assets/img/rooms/deluxe2.JPG';
import Room5Img from './assets/img/heroSlider/conference.JPG';
import Room5ImgLg from './assets/img/heroSlider/conference.JPG';

import Room6Img from './assets/img/rooms/hall.JPG';
import Room6ImgLg from './assets/img/rooms/hall.JPG';



import Room11Img from './assets/img/new/bussinessnew.jpg';
import Room11ImgLg from './assets/img/new/bussinessview.jpg';
import Room22Img from './assets/img/new/execroom1.jpg';
import Room22ImgLg from './assets/img/new/execroom2.jpg';
import Room33Img from './assets/img/new/royal2.jpg';
import Room33ImgLg from './assets/img/new/royalliving.jpg';
import Room44Img from './assets/img/new/deluxenew1.JPG';
import Room44ImgLg from './assets/img/new/deluxxe.JPG';
import Room55Img from './assets/img/new/boardview.JPG';
import Room55ImgLg from './assets/img/new/boardroomnew.JPG';
import Room66Img from './assets/img/rooms/hall.JPG';
import Room66ImgLg from './assets/img/rooms/hall.JPG';

// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

import { IoBusiness,IoMic, IoPeople, IoVideocam, IoChatbubbles, IoHammer, IoWifi,  IoLockClosed, IoCalendarClear, IoDesktop, IoVolumeMedium } from 'react-icons/io5';


export const roomData = [
  
  {
    id: 2,
    name: 'Business Suite',
    description:
      'Welcome to our exclusive Business Suite, a haven designed for the modern professional seeking a seamless blend of work and relaxation. With carefully curated amenities and a thoughtfully designed layout, this suite is your personal oasis for focused work and rejuvenation.',
    facilities: [
      
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      
      
    ],
    
    size: 30,
    maxPerson: 2,
    price: 60000,
    image: Room1Img,
    imageLg: Room1ImgLg,
    images : Room11Img,
    imagesLg :Room11ImgLg,
  
  },
  
   
  {
    id: 3,
    name: 'Executive Suite',
    description:
      'Relax in the spacious living area, where plush seating invites you to unwind. Take in panoramic views or bask in the warm glow of meticulously chosen lighting, setting the mood for relaxation.',
    facilities: [
     
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
    
      
    ],
    size: 50,
    maxPerson: 2,
    price: 75000,
    image: Room2Img,
    imageLg: Room2ImgLg,
    images : Room22Img,
    imagesLg :Room22ImgLg,
  },
  {
    id: 4,
    name: 'Royal Suites',
    description:
      'The spacious and comfortable suite offers a king-size bed adorned in regional décor & luxurious amenities. Equipped with a mini-fridge, flat screen TV offering 12 satellite channels, Tea/Coffee making facilities, complimentary wireless internet.',
    facilities: [
    
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
    
  
    ],
    size: 50,
    maxPerson: 1,
    price: 95000,
    image: Room3Img,
    imageLg: Room3ImgLg,
    images : Room33Img,
    imagesLg :Room33ImgLg,
  },
  {
    id: 5,
    name: 'Deluxe Room',
    description:
      'Our Deluxe Rooms redefine luxury and comfort, offering a spacious retreat for travelers seeking a premium experience. With meticulous attention to detail and a contemporary design aesthetic, our Deluxe Rooms are thoughtfully crafted to make your stay unforgettable.',
    facilities: [
     
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      
      
    ],
    size: 90,
    maxPerson: 1,
    price: 50000,
    image: Room4Img,
    imageLg: Room4ImgLg,
    images : Room44Img,
    imagesLg :Room44ImgLg,
  },
  
  {
    id: 6,
    name: 'Board Room',
    description: ' Welcome to our exclusive Board Room, where business excellence meets sophistication. Designed to elevate your corporate meetings and strategic discussions, our Board Room offers a refined and professional environment that ensures your meetings are productive and impactful.',
    facilities: [
    
      { name: 'Board Room', icon: <IoBusiness /> },
      { name: 'Cutting-Edge Technology', icon: <IoVideocam /> },
      { name: 'Privacy and Exclusivity', icon: <IoChatbubbles /> },
  
      { name: 'Secure Environment', icon: <IoLockClosed/> },
      { name: 'Elegance and Style', icon: <IoPeople /> },
      { name: 'Dedicated Support', icon: <IoHammer /> },
      { name: 'Audio and Visual Excellence', icon: <IoVolumeMedium/> },
     
      
    
    ],
    size: 90,
    maxPerson: 1,
    price: 250000,
    image: Room5Img,
    imageLg: Room5ImgLg,
    images : Room55Img,
    imagesLg :Room55ImgLg,
  
  },
 
  {
    id: 7,
    name: 'Conference Hall',
    description:
      ' Our conference room offers the perfect environment for a successful event. Unveil the possibilities of hosting large-scale events and conferences in our expansive conference hall, designed to accommodate up to 110 attendees.',
    facilities: [
      { name: 'Conference Hall', icon: <IoMic /> },
      { name: 'Ample Seating', icon: <IoPeople /> },
      { name: 'Flexible Booking', icon: <IoCalendarClear /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Audiovisual Equipment', icon: <IoDesktop /> },
      
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> }, 
   
    
    ],
    size: 90,
    maxPerson: 1,
    price: 600000,
    image: Room6Img,
    imageLg: Room6ImgLg,
    images : Room66Img,
    imagesLg :Room66ImgLg,
    
  },
];