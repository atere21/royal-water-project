import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsEnvelope, BsGeoAlt, BsPhone } from 'react-icons/bs';

const Footer = () => {
  return (
    <div name="footer" className="w-full bg-black text-white px-2">
      <div className="max-w-[1200px] md:mx-auto grid grid-cols-1 md:grid-cols-2 border-b-2 border-gray-600 py-8 mx-[2rem] ">
        <div className=''>
          <h6 className="font-bold uppercase pt-2 pb-2">Contact Us</h6>
          <ul>
            <li className="py-1 pb-4">
              <BsGeoAlt className="inline text-accent mr-2 text-2xl " />
               1-7 Royal Waterfront Close, off Rt. Hon. Adeyemi Kuforiji Drive, Ebute-Olowo, Epe Lagos, Nigeria
            </li>
            <li className="py-1 pb-4">
              <BsPhone className="inline text-accent mr-2 text-2xl" />
               +2349137192890, +2349139098956
            </li>
            <li className="py-1 pb-4">
              <BsEnvelope className="inline text-accent mr-2 text-2xl" />
               wwww.royawaterfrontsuites.com
            </li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Enter email.." />
            <button className="p-2 mb-4 text-yellow-900 font-bold">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-yellow-800">
        <p className="py-4"> &copy; 2022. All rights reserved.</p>
        <div className="flex justify-center sm:justify-end mx-auto sm:mx-0 space-x-4 sm:space-x-6">
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
            <BsTwitter className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/royalwaterfrontsuites/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
            <BsInstagram className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
            <BsFacebook className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
