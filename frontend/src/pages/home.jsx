import React, { useState } from 'react'
import "./home.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate()
const [userName, setUserNmae] = useState('')
const [user,setUser]=useState({})
const gfdgf=()=>{
   axios({
    url:"http://localhost:3004/user",
    method:"post",
    data:{userName}
   }).then((res)=>{
setUser(res.data)
navigate(`/game/${res.data.userName}`)
   }).catch((err)=>{
    console.log(err)
   })
}
  return (
<div className='homeMain'>
  <input onChange={(e)=>setUserNmae(e.target.value)} value={userName} type="text" placeholder='Enter username' />
  <button onClick={gfdgf}>Submit</button>
</div>
  )
}
export default Home