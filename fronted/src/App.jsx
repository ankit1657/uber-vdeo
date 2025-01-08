import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import  { UserDataContext } from './context/UserContext'


const App = () => {
  
  const ans = useContext(UserDataContext)
  console.log(ans)


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signUp" element={<UserSignUp />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainSignUp" element={<CaptainSignUp />} />
      </Routes>
    </div>
  )
}

export default App
