import React, { PureComponent } from 'react'
import Background from '../assets/1.jpg'

export class Hero extends PureComponent {
  render() {
    return (
      <div
        className='bg-cover bg-center h-screen flex flex-col items-start justify-center text-white'
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className='p-4 ml-14'>
          <div className='font-bold text-5xl'>
            <span className='text-blue-500'>Your path to </span>
            <span>better</span>
          </div>
          <h1 className='font-bold text-5xl mt-4'>physical wellness</h1>
          <h1 className='font-bold text-5xl mt-4'>
            <span className='text-orange-500'>s</span>
            <span className='text-blue-500'>tarts here</span>
          </h1>
          <h1 className='italic mt-8 text-2xl' style={{ fontFamily: 'cursive' }}>Count on our expert physical therapy to help you</h1>
          <h1 className='italic text-2xl mb-8' style={{ fontFamily: 'cursive' }}>move better and feel better</h1>
          <button className='bg-blue-600 text-white rounded-full text-lg px-6 py-3 shadow-lg'>Schedule Consultation</button>
        </div>
      </div>
    )
  }
}

export default Hero
