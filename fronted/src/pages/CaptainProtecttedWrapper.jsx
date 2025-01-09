import React from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const CaptainProtecttedWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = React.useState(true);

  console.log(token)
  useEffect(() => {
    if (!token) {
        navigate('/captainlogin')
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    }).catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captainlogin')
    })
    }, [ token ])

    if(isLoading){
        return <div>Loading...</div>
    }
    


  return (
<>
{children}

</>
  )
}

export default CaptainProtecttedWrapper
