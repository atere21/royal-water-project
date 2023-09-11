import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => room.id === Number(id));

  const { name, description, facilities, imageLg, images, imagesLg } = room || {};
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationData = {
      checkInDate,
      checkOutDate,
      adults,
      kids,
    };
    console.log("Reservation Data:", reservationData);

    // Perform further actions with the reservation data, such as sending it to the server
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+2349139098956";
    const message = "Hello, I am interested in [this property]";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const bannerStyle = {
    backgroundImage: `url(${imageLg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "560px", // Adjust the height as needed
  };

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div style={bannerStyle} className="relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            
            <img src={imageLg} alt="/" />
            
            <section>
              <div className="grid grid-cols-2 min-h-min p-2">
                {/* Zoom effect added to the image containers */}
                <div className="group hover:scale-105 transform transition-transform rounded-md overflow-hidden cursor-pointer">
                  <img className="rounded-md" src={imagesLg} alt="/" />
                </div>
                <div className="group hover:scale-105 transform transition-transform rounded-md overflow-hidden ml-2 cursor-pointer">
                  <img
                    className="group-hover:scale-110 transition-all duration-300"
                    src={images}
                    alt="/"
                  />
                </div>
              </div>
            </section>
            <div className="mt-12 ">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Our hotel offers a range of convenient and comfortable amenities
                to enhance your stay
              </p>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <form
                method="POST"
                action="https://getform.io/f/72ee2a52-9a2d-45e0-abe8-21758f060c4a"
                className="flex flex-col gap-y-4"
              >
                <input
                  className="border border-gray-300 focus:border-violet-700 outline-none 
            rounded w-full px-4  h-14 text-sm"
                  type="text"
                  name="name"
                  placeholder="Name*"
                />

                <input
                  className="border border-gray-300 focus:border-violet-700 outline-none 
            rounded w-full px-4  h-14"
                  type="text"
                  name="email"
                  placeholder="Email*"
                />

                <input
                  className="border border-gray-300 focus:border-violet-700 outline-none 
            rounded w-full px-4  h-14"
                  type="text"
                  name="number"
                  placeholder="Phone Number*"
                />
                
             

                <textarea
                  className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                  placeholder="Message*"
                  name="message"
                  defaultValue="Hello, I'd like to book a room"
                ></textarea>

                <div className="flex gap-x-2">
                  <button
                    className="bg-black hover:text-yellow-200 text-[#C69320]
                rounded p-4 text-sm w-full transition"
                  >
                    Send message
                  </button>
                  <button
                    className="border border-yellow-200 text-yellow-800 bg-white
                  hover:border-yellow-400 hover:text-yellow-900 rounded p-4 text-sm w-full transition"
                    onClick={handleWhatsApp}
                  >
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                By following these hotel rules, we can ensure a pleasant and
                comfortable experience for all guests. Thank you for your
                cooperation!
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-In: 12:00 AM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-Out: 12:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;