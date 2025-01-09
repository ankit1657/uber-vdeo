import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState, } from 'react'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'


const UserLogin = () => {

  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const[userData , setUserData] = useState({})

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
 
 const submitHandler =async (e)=>{
  e.preventDefault()
  const userData = {
    email:email,
    password:password
  }
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
 if (response.status === 200) {
  const data = response.data
  setUser(data.user)
 localStorage.setItem('token',data.token)
  navigate('/home')
 }
  // console.log(userData)
  setEmail('')
  setPassword('')
}


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
<div>
  
<img className='w-16 mb-10 '  src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
    
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

<p className='text-center mt-2'>New here?<Link  to='/signUp' className='text-blue-600'>Create new Account</Link></p>

</div>

<div>
<Link to='/captainlogin'
className='flex items-center justify-center   bg-[#10b461] text-white w-full px-4 py-3 
 rounded mt-5 text-lg' 
>Sign in as Captain</Link>
</div>
    </div>
 

  )
}

export default UserLogin
