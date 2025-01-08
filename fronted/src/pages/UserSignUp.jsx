import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignUp = () => {
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const[userData , setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    setUserData ({
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    })
    // console.log(userData)
  setEmail('')
  setPassword('')
  setFirstName('')
  setLastName('')



  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
      
    <img className='w-16 mb-10 '  src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
        
        <form onSubmit={(e)=>submitHandler(e)}>


        <h3 className='text-lg w-1/2  font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-7'>
            <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}

            />

<input
                required
                className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
           value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
                />
              </div>

    
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
    >Create new Account</button>
    </form>
    
    <p className='text-center mt-2'>Already have an Account?<Link  to='/login' className='text-blue-600'>Login here</Link></p>
    
    </div>
    
    <div>
    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
        </div>
  )
}

export default UserSignUp
