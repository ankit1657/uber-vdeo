import React from 'react'
import { useRef,useState } from 'react'
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { useActionState } from 'react';

const Home = () => {
  const [pickUpLocation, setPickUpLocation] = useState('') 
  const [destination, setDestination] = useState('')
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const WaintingForDriverRef = useRef(null)
   const [panelOpen, setPanelOpen] = useState(false)
   const panelRef = useRef(null)
   const panelCloseRef = useRef(null)
   const [vehiclePanel,setVehiclePanel] = useState(false)
   const [confirmRidePanel,setConfirmRidePanel] = useState(false)
   const [vehicleFoundPanel,setVehicleFoundPanel] = useState(false)
   const [waitingForDriver, setWaitingForDriver] = useState(false)
   
   
   
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useGSAP(function(){
    if (panelOpen) {
      gsap.to(panelRef.current, {height: '70%', 
      padding:24
      })  

    gsap.to(panelCloseRef.current,{
      opacity: 1

    })

    }else{
      gsap.to(panelRef.current, {height: '0' , 
      padding:0

      })
      gsap.to(panelCloseRef.current,{opacity:0})
    }
  }, [panelOpen])

useGSAP(function(){
if (vehiclePanel) {
  gsap.to(vehiclePanelRef.current,{
transform:'translateY(0)'
  
  })
}else{
  gsap.to(vehiclePanelRef.current,{
transform:'translateY(100%)'
  })
}

},[vehiclePanel])


useGSAP(function(){
  if (confirmRidePanel) {
    gsap.to(confirmRidePanelRef.current,{
  transform:'translateY(0)'
    
    })
  }else{
    gsap.to(confirmRidePanelRef.current,{
  transform:'translateY(100%)'
    })
  }
  
  },[confirmRidePanel])
  

  useGSAP(function(){
    if (vehicleFoundPanel) {
      gsap.to(vehicleFoundRef.current,{
    transform:'translateY(0)'
      
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
    transform:'translateY(100%)'
      })
    }
    
    },[vehicleFoundPanel])
    
    useGSAP(function(){
      if (waitingForDriver) {
        gsap.to(WaintingForDriverRef.current,{
      transform:'translateY(0)'
        
        })
      }else{
        gsap.to(WaintingForDriverRef.current,{
      transform:'translateY(100%)'
        })
      }
      
      },[waitingForDriver])
      
  
  
  



  return (
    <div className='h-screen relative overflow-hidden'>

      <img className='w-16 absolute left-5 top-5' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
      <div  className='h-screen w-screen'>
        <img className='obejct-cover w-full h-full  ' src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end  h-screen absolute w-full  top-0'>
        <div className='h-[30%] p-6 bg-white relative'>

          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }}
          
          className='absolute opacity-0  right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
            </h5>

        <h4 className='text-2xl font-bold '>Find a Trip</h4>
        <form className='relative py-3'  onSubmit={(e) => {
          submitHandler(e)
        }} 
          >
             <div className='line absolute  h-3 w-3 rounded-full top-[30%] left-7 bg-gray-900 '></div>

             <div className='line absolute  h-3 w-3 rounded-full top-[71%] left-7 bg-gray-900 '></div>

            <div className='line absolute h-16 w-1 rounded-full top-[30%]  left-8 bg-gray-900 '></div>

          <input
        
        onClick={() => {
          setPanelOpen(true)
        }}


            value={pickUpLocation}
            onChange={(e) => {
              setPickUpLocation(e.target.value)
            }}
           className=' text-base font-semibold rounded-lg bg-[#eee] px-12 py-2 mt-3 w-full' type="text" placeholder='Add a pick-up location' />
          <input 

onClick={() => {
  setPanelOpen(true)
}}

          value={destination}
          onChange={(e) => {
            setDestination(e.target.value)}
          }
           className='text-base font-semibold rounded-lg bg-[#eee] px-12 py-2 mt-3 w-full'
          type="text" placeholder='Enter your destination' />
        </form>
        </div>
        <div ref={panelRef} className='bg-white  h-0'>
          <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel = {setVehiclePanel} />
        </div>
      </div>

    
   
    <div ref={vehiclePanelRef}  className='fixed z-10 bottom-0  py-10 px-3 translate-y-full bg-white w-full pt-12'>
     <VehiclePanel  setConfirmRidePanel= {setConfirmRidePanel} setVehiclePanel={setVehiclePanel}  />
    </div>

    <div ref={confirmRidePanelRef}  className='fixed z-10 bottom-0  py-6 px-3 translate-y-full bg-white w-full pt-12'>
     <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFoundPanel= {setVehicleFoundPanel} />
    </div>

    
    <div ref={vehicleFoundRef}  className='fixed z-10 bottom-0  py-6 px-3 translate-y-full bg-white w-full pt-12'>
     < LookingForDriver setVehicleFoundPanel={setVehicleFoundPanel} />
    </div>
    <div  ref={WaintingForDriverRef} className='fixed z-10 bottom-0  py-6 px-3  bg-white w-full pt-12'>
     <WaitingForDriver    waitingForDriver={waitingForDriver}   />
    </div>
    </div>
  )
}

export default Home
