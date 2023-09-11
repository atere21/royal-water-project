import React from 'react';
import video from "../assets/img/royalVideo.mp4";

const Plan = () => {
  return (
    <div name="about" className="w-screen h-screen flex flex-col items-center justify-center">
      {/* Title */}
      <div className="text-4xl font-bold mb-6">Drone View</div>

      {/* Video Container */}
      <div className="relative w-full h-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          controls
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Plan;
