import React from 'react';


const Contact = () => {
  return (
    <div name='contact' className="w-screen bg-white text-[#C69320] flex flex-col items-center p-4">
      <img src="https://img.freepik.com/free-photo/african-american-man-customer-support-operator-with-hands-free-headset-working-office_231208-686.jpg?w=740&t=st=1687533000~exp=1687533600~hmac=7ecd9ac876d0fa1c0dd7655a91f39928c50b895289b70367d818081450aa711c" alt="Contact" className="hero-image h-auto  w-full object-cover mb-2 mt-12" />
      <div className="w-[90%] max-w-[500px] p-2 mt-12">
        <div>
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#C69320] text-gray-300">Contact Us</p>
          <p className="text-sm text-gray-700 mt-4 sm:mt-8">If you have any inquiries regarding a specific property, contact us at +2347033974955. Alternatively, you can also utilize the form below to reach out to us. We genuinely look forward to receiving your messages.</p>
        </div>
        <form method="POST" action="https://getform.io/f/72ee2a52-9a2d-45e0-abe8-21758f060c4a" className="flex flex-col gap-y-4 text-black">
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
            defaultValue="Hello, I am interested in [this property]"
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
