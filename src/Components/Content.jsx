import React, { PureComponent } from 'react';
import cardImage1 from '../assets/card1.jpeg'; // Ensure you have the correct image path
import cardImage2 from '../assets/card2.jpeg';
import cardImage3 from '../assets/card3.jpeg';

export class Content extends PureComponent {
  render() {
    return (
      <div className='flex flex-col items-center justify-start h-screen pt-8'>
        {/* Heading at the top center */}
        <h1 className='font-bold text-5xl text-center mb-8'>What we offer</h1>
        
        {/* Images and descriptions */}
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
            <img src={cardImage1} alt="Card 1" className='w-full h-auto object-contain'/>
            <div className='p-4'>
              <p className='text-center border-black border-2 rounded font-bold'>Rehabilitative Physical Therapy</p>
            </div>
          </div>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden mx-auto md:ml-16'> {/* Center second card */}
            <img src={cardImage2} alt="Card 2" className='w-full h-auto object-contain' />
            <div className='p-4'>
              <p className='text-center border-black border-2 rounded font-bold'>Pediateric Physical Therapy</p>
            </div>
          </div>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden mx-auto md:mr-16'> {/* Center third card */}
            <img src={cardImage3} alt="Card 3" className='w-full h-auto object-contain' />
            <div className='p-4'>
              <p className='text-center border-black border-2 rounded font-bold'>Geriatric Physical Therapy</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
