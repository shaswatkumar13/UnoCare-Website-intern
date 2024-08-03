import React, { PureComponent } from 'react';
import AboutImage from '../assets/4.jpg';

export class About extends PureComponent {
  render() {
    return (
      <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
        <div className='w-full md:w-1/2 h-full'>
          <img src={AboutImage} alt="About" className='object-cover h-full w-full' />
        </div>
        <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-center p-8 bg-gray-100 text-gray-900'>
          <div className='text-center md:text-left'>
            <h1 className='font-bold text-3xl mb-1'>Feeling</h1>
            <h1 className='font-bold text-3xl mb-1'>better starts</h1>
            <div className='flex flex-col items-start'>
              <span className='font-bold text-3xl mb-1'>
                with <span className='text-blue-500'>moving</span>
              </span>
              <span className='font-bold text-blue-500 text-3xl'>better</span>
            </div>
            <div className='mt-8'> {/* Add margin-top to this div */}
                <h1>Write a paragraph that talks about</h1>
                <h1>your company here.You can talk</h1>
                <h1>about your company's background,</h1>
                <h1>history,mission,vison and philosophy.</h1>
                <h1>Anything that will introduce your</h1>
                <h1>brand's persona to your clients.</h1>
            </div>
            <div>
            <button className='border-black border-2 mt-8 rounded-full text-lg px-6 py-3 shadow-lg'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
