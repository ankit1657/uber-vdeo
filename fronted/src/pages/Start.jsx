import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className=' bg-cover bg-center bg-[url(https://media.istockphoto.com/id/869995028/photo/traffic-stop-signal.jpg?s=612x612&w=0&k=20&c=6U1v_FWJ7rhKznxrDVJA-5FkmzxPtKLfJrIL2AHLW-w=)]  h-screen w-full pt-8  flex flex-col justify-between '>
      <img className='w-16 ml-8 '  src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
      <div className='bg-white py-4 pb-7 px-4'>
        <h2 className='text-[30px] font-bold'>Get started with Uber</h2>
        <Link to = '/login'  className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
      </div>
    </div>
  )
}

export default Start
