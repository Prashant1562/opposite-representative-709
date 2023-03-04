import React from 'react';
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='main'>
      <div>
        <img height={"100%"} onClick={() => navigate("/")} src="https://i.pinimg.com/originals/4f/ae/47/4fae4795936a4e648b0e65a3a9871c19.png" alt="" />
      </div>
      <div>
        <h3 onClick={() => navigate("/leader")}>Leaderboard</h3>
      </div>
      <div>
        <h3 onClick={() => navigate("/")}>Guest</h3>
      </div>
    </div>
  )
}

export default Navbar;
