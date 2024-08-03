import React, { PureComponent } from 'react';

export class Feedback extends PureComponent {
  render() {
    return (
      <div className='p-8'>
        <h1 className='font-bold text-5xl text-center mb-8'>Feedback from our clients</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
            <div className='mb-2'>
              {/* 5-star rating */}
              <span className='text-warning'>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
              </span>
            </div>
            <p className='text-gray-700 mb-6'>
              Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
            </p>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
            <div className='mb-2'>
              {/* 5-star rating */}
              <span className='text-warning'>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
              </span>
            </div>
            <p className='text-gray-700 mb-6'>
            Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
            </p>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
            <div className='mb-2'>
              {/* 5-star rating */}
              <span className='text-warning'>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill'></i>
              </span>
            </div>
            <p className='text-gray-700 mb-6'>
            Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
