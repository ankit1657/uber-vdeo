import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtecttedWrapper from './pages/CaptainProtecttedWrapper'
import CaptainLogout from './pages/CaptainLogout'
// import  { UserDataContext } from './context/UserContext'


const App = () => {
  
  // const ans = useContext(UserDataContext)
  // console.log(ans)


  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signUp" element={<UserSignUp />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainSignUp" element={<CaptainSignUp />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
</UserProtectedWrapper>
        } />
        <Route  path='/user/logout' element= {
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } /> 
        <Route path='/captain-home' element={
          <CaptainProtecttedWrapper>
            <CaptainHome />
          </CaptainProtecttedWrapper>
        } />
        <Route path='/captain/logout' element={
          <CaptainProtecttedWrapper>
            <CaptainLogout />
          </CaptainProtecttedWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App
