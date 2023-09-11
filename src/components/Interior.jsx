import React from 'react';
import image1 from '../assets/img/rooms/newhotel.JPG';
import image2 from '../assets/img/rooms/newhotel2.JPG';
import image3 from '../assets/img/rooms/newhotel4.JPG';

function Interior() {
  return (
    <div className="max-w-[1400px] h-[500px] bg-yellow-600 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4s">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2 mx-4">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p>
          Step into a world of refined elegance and impeccable design as we explore the concept of a fine interior room.
          Where every detail is carefully considered to create a space that is visually stunning and luxuriously comfortable.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2">
        <img className="object-cover w-full h-full" src={image1} alt="/" />
        <img className="row-span-2 object-cover w-full h-full" src={image2} alt="/" />
        <img className="object-cover w-full h-full" src={image3} alt="/" />
      </div>
    </div>
  );
}

export default Interior;
