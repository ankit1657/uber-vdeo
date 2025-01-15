import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

const location = [
  "24B, anishabad, patna-2",
  "23c, anishabad, patna-2",
  "22d, anishabad, patna-2",
  "21h, anishabad, patna-2",
  
]




  return (
    <div>
        {/* this is the sample data */}

{

    location.map(function(elem,idx){
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex items-center border-2 border-gray-100 active:border-black  p-3 rounded-xl my-2 justify-start space-x-2'> 
        <h2 className='bg-[#eee] h-10 w-10  flex items-center justify-center rounded-full '> <i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-semibold'>{elem}</h4>
            </div>
    })
}
    
 
    </div>
  )
}

export default LocationSearchPanel

