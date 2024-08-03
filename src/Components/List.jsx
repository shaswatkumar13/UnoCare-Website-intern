import React, { PureComponent } from 'react';

export class List extends PureComponent {
  render() {
    return (
      <div className='mt-48 p-8'>
        <h1 className='text-center text-5xl font-bold mb-16'>Why people prefer us</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-4'>Expertly Trained Therapists</h2>
            <p className='text-gray-700 mb-6'>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
          </div>
          
          <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-4'>Up-to-date Practices and Facilites</h2>
            <p className='text-gray-700 mb-6'>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
          </div>
          
          <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
            <h2 className='font-bold text-2xl mb-4'>Inclusive Insurance Policy</h2>
            <p className='text-gray-700 mb-6'>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
