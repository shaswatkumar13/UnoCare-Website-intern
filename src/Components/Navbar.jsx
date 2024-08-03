import React, { PureComponent } from 'react'
import logo from '../assets/logo.png'

export class Navbar extends PureComponent {
  render() {
    return (
        <>
      <div className='fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent z-10'>
        <div className='flex items-center'>
          <img className='h-10 w-auto mr-4' src={logo} alt="Logo" />
        </div>
        <div>
          <button className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-lg border-black'>LOGIN</button>
        </div>
      </div>
      </>
    )
  }
}

export default Navbar
