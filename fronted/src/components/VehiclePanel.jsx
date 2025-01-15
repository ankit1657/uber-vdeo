import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[93%]' 
      onClick={()=>{
props.setVehiclePanel(false)
      }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

      <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>

     <div onClick={()=>{
        props.setConfirmRidePanel(true)
     }}
     className='border-2 active:border-black   rounded-xl   flex w-full items-center gap-1 p-3 justify-between  mb-2'>
     <img  className='h-10  ' src="https://purepng.com/public/uploads/large/red-mazda-car-8hq.png" alt="" />

     <div className='ml-2  w-1/2'>
      <h4 className='font-medium text-base'>UberGo <span> <i class="ri-user-3-fill"></i></span>4</h4>
    
     <h5 className='font-medium text-sm'>2min away </h5>
    <p className='font-normal text-xs'>Affordable ,compact rides</p>
     </div>
     <h2 className='text-2xl font-semibold'>₹100.5</h2>
     </div>



     <div onClick={()=>{
        props.setConfirmRidePanel(true)
     }}

     className='border-2 active:border-black  rounded-xl   flex w-full items-center gap-1 p-3 justify-between  mb-2'>
     <img  className='h-10  ' src="https://purepng.com/public/uploads/large/kawasaki-heavy-sports-bike-hlx.png" alt="" />

     <div className='ml-2  w-1/2'>
      <h4 className='font-medium text-base'>MOTO <span> <i class="ri-user-3-fill"></i></span>2</h4>
    
     <h5 className='font-medium text-sm'>2min away </h5>
    <p className='font-normal text-xs'>Affordable ,motor rides</p>
     </div>
     <h2 className='text-2xl font-semibold'>₹40.5</h2>
     </div>
    

    
     <div onClick={()=>{
        props.setConfirmRidePanel(true)
     }}
     
     className='border-2 active:border-black  rounded-xl   flex w-full items-center gap-1 p-3 justify-between  mb-2'>
     <img  className='h-10  ' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />

     <div className='ml-2  w-1/2'>
      <h4 className='font-medium text-base'>AUTO <span> <i class="ri-user-3-fill"></i></span>3</h4>
    
     <h5 className='font-medium text-sm'>2min away </h5>
    <p className='font-normal text-xs'>Affordable ,Auto rides</p>
     </div>
     <h2 className='text-2xl font-semibold'>₹34.5</h2>
     </div>
     
    </div>
  )
}

export default VehiclePanel
