import React from 'react';
// import { Helmet } from 'react-helmet';


const Contact = () => {
  return (
    <div name='contact'
    className="w-screen bg-white text-[#C69320] flex flex-col items-center p-4">
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>contact Woodlodge</title>
                <link rel="canonical" href="http://woodlodgeng.com" />
            </Helmet> */}
      
      <div className="w-[90%] max-w-[500px] p-2 mt-12">
        <div>
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#C69320] text-gray-300">Contact Us</p>
          <p className="text-sm text-gray-700 mt-4 sm:mt-8">Thank you for your interest in our hotel. We value your feedback and inquiries. Whether you have a question, a special request, or would like to make a reservation, our dedicated team is here to assist you.</p>
        </div>
        <form method="POST" action="https://getform.io/f/bab93284-399d-40f4-a75d-258392b2ae1c" className="flex flex-col gap-y-4 text-black my-8">
          <input
            className="border border-gray-300 focus:border-blue-700 outline-none rounded px-4 h-12 sm:h-14 text-sm"
            type="text"
            name="name"
            placeholder="Name*"
          />

          <input
            className="border border-gray-300 focus:border-blue-700 outline-none rounded px-4 h-12 sm:h-14"
            type="text"
            placeholder="Email*"
            name="email"
          />

          <input
            className="border border-gray-300 focus:border-blue-700 outline-none rounded px-4 h-12 sm:h-14"
            type="text"
            name="number"
            placeholder="Phone Number*"
          />

          <textarea
            className="border border-gray-300 focus:border-blue-700 outline-none resize-none rounded p-4 h-28 sm:h-36 text-sm text-gray-400"
            placeholder="Message*"
            name="message"
            defaultValue="Hello,"
          ></textarea>

          <button className="bg-black hover:text-yellow-200 text-[#C69320] rounded p-4 text-sm w-full transition">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
