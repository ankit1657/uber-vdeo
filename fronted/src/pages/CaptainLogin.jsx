import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

   const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const[captainData , setCaptainData] = useState({})
   
   const submitHandler = (e)=>{
    e.preventDefault()
    setCaptainData ({
      email,
      password
    })
    // console.log(captainData)
    setEmail('')
    setPassword('')
  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
      
    <img className='w-20 mb-3 '  src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        
        <form onSubmit={(e)=>submitHandler(e)}>
    
    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
    <input required 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    
    className='bg-[#eeeeee] rounded px-4 py-2 w-full mb-7 border text-lg placeholder:text-base' 
    type="text" 
    placeholder='email@example.com' />
    
    <h3  className='text-lg font-medium mb-2'>Enter your password</h3>
    <input
    className='bg-[#eeeeee] rounded px-4 py-2 w-full mb-7 border text-lg placeholder:text-base'
    required 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
     type="password" placeholder='password' />
    
    
    <button 
    className='bg-[#111] text-white w-full px-4 py-3 mb-3 rounded mt-5 text-lg' 
    >Login</button>
    </form>
    
    <p className='text-center mt-2'>join a fleet?<Link  to='/captainSignUp'  className='text-blue-600'>Register as a Captain</Link></p>
    
    </div>
    
    <div>
    <Link to='/login'
    className='flex items-center justify-center   bg-[#d5622d] text-white w-full px-4 py-3 
     rounded mt-5 text-lg' 
    >Sign in as User</Link>
    </div>
        </div>
     
    
  )
}

export default CaptainLogin
