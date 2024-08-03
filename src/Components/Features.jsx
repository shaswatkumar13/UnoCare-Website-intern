import React, { PureComponent } from 'react';
import FeaturesImage from '../assets/3.jpg';

export class Features extends PureComponent {
  render() {
    return (
      <div className='flex flex-col md:flex-row items-start justify-between bg-blue-500 h-screen p-8'>
        {/* Text Section */}
        <div className='w-full md:w-1/2 text-left mt-8 md:mt-0'>
          <h1 className='font-bold text-5xl text-black mb-2'>What we</h1>
          <h1 className='font-bold text-5xl text-black'>do best</h1>
          <h1 className='italic mt-8 text-2xl' style={{ fontFamily: 'cursive' }}>Our approach to</h1>
          <h1 className='italic text-2xl mb-8' style={{ fontFamily: 'cursive' }}>physical therapy</h1>
          <p>Use this space to talk about your</p>
          <p>company's history, background,</p>
          <p>mission or vision. Talk about your</p>
          <p>philosphy and how it affected your</p>
          <p>company's trajectory</p>
          <p className='mt-8'>Use this space to talk about your</p>
          <p>company's history, background,</p>
          <p>mission or vision. Talk about your</p>
          <p>philosphy and how it affected your</p>
          <p>company's trajectory</p>
        </div>
        
        {/* Image Section */}
        <div className='w-full md:w-1/2 h-full'>
          <img src={FeaturesImage} alt="Features" className='object-cover h-full w-full' />
        </div>
      </div>
    );
  }
}

export default Features;
