import React from 'react'
import "./Navbar.css"
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate()
  return (
  <>
  
  <div className="mainnav">
    <div>
      <img onClick={()=>navigate("/")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPea3na7lh3KrPcXNo11Pb_dSxiMqKyehQCeh1ytbSyfa7jNnJb80t0chdbh_k5LXIqQ&usqp=CAU" alt='' />
    </div>
    <h3 onClick={()=>navigate("/leader")}>Leaderboard</h3>
    <div>
      <button>Signup</button>
      <button>login</button>
    </div>
  </div>
  
  </>
  )
}

export default Navbar