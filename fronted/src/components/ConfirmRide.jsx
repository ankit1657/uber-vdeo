import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
  <h5 className='p-1 text-center absolute top-0 w-[93%]' 
      onClick={()=>{
        props.setConfirmRidePanel(false)  
      }}
  ><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
  <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

  <div className='flex gap-2 justify-between flex-col items-center  '>
  <img className='h-20' src="https://purepng.com/public/uploads/large/red-mazda-car-8hq.png" alt="" />

<div className='w-full mt-5'>

  <div className='flex items-center gap-5 p-3 border-b-2 '>
  <i className="ri-map-pin-user-line"></i>
  <div>
    <h3 className='text-lg font-medium'>562/11-A</h3>
    <p className='text-sm -mt-1 text-gray-600'>kachi Talab,Patna-2</p>
  </div>
  </div >
  <div className='flex items-center gap-5 p-3 border-b-2 ' > 
    <i className="text-lg ri-map-pin-2-fill"></i>
  <div>
    <h3 className='text-lg font-medium'>562/11-A</h3>
    <p className='text-sm -mt-1 text-gray-600'>kachi Talab,Patna-2</p>
  </div>
  </div>
  <div className='flex items-center gap-5 p-3 border-b-2 '>
  <i className="ri-currency-line"></i>
  <div>
    <h3 className='text-lg font-medium'>₹100.5</h3>
    <p className='text-sm -mt-1 text-gray-600'>Cash</p>
  </div>
  </div>

</div>
 
  <button onClick={()=>{
    props.setVehicleFoundPanel(true)
    props.setConfirmRidePanel(false)
  }}
  
  className='w-full bg-green-600 text-white font-semibold p-2 mt-5 rounded-lg'>Confirm</button>
    </div>
    </div>
  )
}

export default ConfirmRide
