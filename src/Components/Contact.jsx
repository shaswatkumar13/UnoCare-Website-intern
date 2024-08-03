import React, { PureComponent } from 'react';
import contactImage from '../assets/2.jpg'; // Ensure you have the correct image path

export class Contact extends PureComponent {
  render() {
    return (
      <div className="h-screen grid grid-rows-2 bg-blue-500">
        {/* Top half with the image */}
        <div className="row-span-1">
          <img src={contactImage} alt="Contact" className="w-full h-full object-cover" />
        </div>
        {/* Bottom half with the text and boxes */}
        <div className="row-span-1 flex flex-col md:flex-row justify-between items-start p-8">
          {/* Contact heading */}
          <h1 className="text-5xl font-bold mb-4 md:mb-0">Talk to us!</h1>
          {/* Boxes for address and timings */}
          <div className="flex flex-col md:flex-row md:gap-8 mt-4 md:mt-0">
            <div className="shadow-lg rounded-lg p-6 mb-4 md:mb-0 border-black border-2">
              <h2 className="font-bold text-xl mb-2">Address</h2>
              <p className="text-gray-700">1234 Anywhere St., Any City, ST 12345, Country</p>
              <p className='text-gray-700 mt-7'>Telephone: (123) 456-7890, Mobile: (123) 456-7890</p>
              <p className='text-gray-700 mt-7'>hello@reallygreatsite.com</p>
            </div>
            <div className="shadow-lg rounded-lg p-6 border-black border-2">
              <h2 className="font-bold text-xl mb-2">Timings</h2>
              <p className="text-gray-700">Monday: 8:00 AM - 7:00 PM</p>
              <p className="text-gray-700">Tuesday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Tuesday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Tuesday: 8:00 AM - 7:00 PM</p>
              <p className="text-gray-700">Tuesday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
