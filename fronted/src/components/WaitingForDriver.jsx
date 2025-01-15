import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
     <h5 className='p-1 text-center absolute top-0 w-[93%]' 
         onClick={()=>{
          props.waitingForDriver(false)
                }}
      
  ><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

<div className='flex items-center justify-between'>
        <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>Ankit</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>


          </div>
          </div>


  <div className='flex gap-2 justify-between flex-col items-center  '>
  {/* <img className='h-20' src="https://purepng.com/public/uploads/large/red-mazda-car-8hq.png" alt="" /> */}

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
 
    </div>
    </div>
  )
}

export default WaitingForDriver
