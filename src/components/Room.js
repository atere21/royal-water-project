import React from 'react';
import { Link } from 'react-router-dom';

import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';

const Room = ({ room }) => {
  const { id, name, image, size, maxperson, description, price } = room;
  
  return (
    <div  name='room'
    className='bg-white shadow-2xl min-h-[500px] group mb-4'>
      {/* img */}
      <div className=' cursor-pointer hover:scale-105 transform transition duration-300 ease-out
      flex space-x-3 overdlow-scroll '>
        <img className='group-hover:scale-110 transition-all duration-300 w-full'
         src={image}
         layout="fill"
          alt='Room' />
      </div>
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
        <div className='flex justify-between w-[80%]'>
          {/* size */}
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsArrowsFullscreen className='text-[15px]'/>
            </div>
            <div className='flex gap-x-1'>
              
            </div>
          </div>

          {/* people */}
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsPeople className='text-[18px] ml-8'/>
            </div>
            <div className='flex gap-x-1'>
              
              <div>{maxperson}</div>
            </div>
          </div>
        </div>
      </div>

      {/* name & description */}
      <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className='h3'>{name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0, 429)}</p>
      </div>
      {/* btn */}
      <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto'> 
        Book now from ₦{price}
      </Link>
    </div>
  );
};

export default Room;



// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';

// import { RoomContext } from '../context/RoomContext';

// import AdultsDropdown from '../components/AdultsDropdown';
// import KidsDropdown from '../components/KidsDropdown';
// import CheckIn from '../components/CheckIn';
// import CheckOut from '../components/CheckOut';

// import { FaCheck } from 'react-icons/fa';

// import ScrollToTop from '../components/ScrollToTop';

// const RoomDetails = () => {
//   const { rooms } = useContext(RoomContext);
//   const { id } = useParams();

//   const room = rooms.find((room) => room.id === Number(id));

//   const { name, description, facilities, imageLg, price} = room || {};

//   return (
//     <section>
//       <ScrollToTop/>
//       {/* banner */}
//       <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
//         <div className='absolute w-full h-full bg-black/70'></div>
//         <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
//         {imageLg && <img src={imageLg} alt='Room' className='hidden' />}
//       </div>
//       <div className='container mx-auto'>
//         <div className='flex flex-col lg:flex-row h-full py-24'>

//           <div className='w-full h-full lg:w-[60%] px-6'>
//             <h2 className='h2'>{name}</h2>
//             {/* Add the room name above */}
//             <p className='mb-8'>{description}</p>
//             {/* Add other details about the room */}
//             <img src={imageLg} alt='/'/>
//             <div className='mt-12 '>
//               <h3 className='h3 mb-3'>Room Facilities</h3>
//               <p className='mb-12'>           
//                 Our hotel offers a range of convenient and comfortable amenities to enhance your stay
//               </p>
//               <div className='grid grid-cols-3 gap-6 mb-12'>
//                  {facilities.map((item, index) => {
//                   // destructure item
//                   const { name, icon } = item;
//                   return (
//                    <div className='flex items-center gap-x-3 flex-1'
//                     key={index}>
//                     <div className='text-3xl text-accent'>{icon}</div>
//                     <div className='text-base'>{name}</div>
//                    </div>
//                   )
//                  })}
//               </div>
//               </div>
//           </div>
//           <div className='w-full h-full lg:w-[40%]'>
//              {/* reservation */}
//              <div className='py-8 px-6 bg-accent/20 mb-12'>
//               <div className='flex flex-col space-y-4 mb-4 '>
//                 <h3>Your Reservation</h3>
//                 <div className='h-[60px] '>
//                   <CheckIn/>
//                 </div>

//                 <div className='h-[60px] '>
//                   <CheckOut/>
//                 </div>

//                 <div className='h-[60px] '>
//                   <AdultsDropdown/>
//                 </div>

//                 <div className='h-[60px] '>
//                   <KidsDropdown/>

//                 </div>
//               </div>

//               <button className='btn btn-lg btn-primary w-full '>
//                   book now for ₦ {price}
//                   </button>
//              </div>
               
//                <div>
//                 <h3 className='h3'>Hotel Rules</h3>
//                 <p className='mb-6'>
//                 By following these hotel rules, we can ensure a pleasant and comfortable experience for all guests. Thank you for your cooperation!
//                 </p>
//                 <ul className='flex flex-col gap-y-4'>
//                   <li className='flex items-center gap-x-4'>
//                     <FaCheck className='text-accent'/>
//                     Check-In: 12:00 AM - 9:00 PM
//                   </li>
//                   <li className='flex items-center gap-x-4'>
//                     <FaCheck className='text-accent'/>
//                     Check-Out: 12:00 PM
//                   </li>

//                   <li className='flex items-center gap-x-4'>
//                     <FaCheck className='text-accent'/>
//                      No Pets
//                   </li>
//                   <li className='flex items-center gap-x-4'>
//                     <FaCheck className='text-accent'/>
//                      No Smoking
//                   </li>

                
                 
//                 </ul>
//                </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RoomDetails;


  {/* <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 mb-4">
              <h3>Your Reservation</h3>
              <div className="h-[60px]">
                <CheckIn onChange={(date) => setCheckInDate(date)} />
              </div>

              <div className="h-[60px]">
                <CheckOut onChange={(date) => setCheckOutDate(date)} />
              </div>

              <div className="h-[60px]">
                <AdultsDropdown onChange={(value) => setAdults(value)} />
              </div>

              <div className="h-[60px]">
                <KidsDropdown onChange={(value) => setKids(value)} />
              </div>
            </div>

            <button type="submit" className="btn btn-lg btn-primary w-full">
              Book Now for ₦ {price}
            </button>
          </form> */}