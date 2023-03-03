import React from 'react'
import Navbar from '../Components/Navbar'
import "./home.css"
import cardimg from "./cardimg.png"
const Home = () => {
  return (
    <>
    
    <Navbar/>
    <div className="playerCards hiddenCards">
<div></div>
<div></div>
<div></div>
    </div>
    <div className='middlepart'>
       
<div>
  <img className={"cards"} src={"https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzgyMDk1NzA1NzM0/top-strongest-highest-power-magic-the-gathering-creatures.jpg"||cardimg} alt="" />
  <img className={"cards"} src={cardimg} alt="" />
  <img className={"cards"} src={cardimg} alt="" />
</div>
<div className='middlestart'>
{
    false?(
        <>
        <h2>Start</h2>
        </>
    ):(
  <>
  <h2>1 - 2</h2>
  </>
    )
}
</div>
<div>
 <img className={"cards"} src={cardimg} alt="" />
  <img className={"cards"} src={"https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzgyMDk1NzA1NzM0/top-strongest-highest-power-magic-the-gathering-creatures.jpg"||cardimg} alt="" />
  <img className={"cards"} src={cardimg} alt="" />
</div>

    </div>
    <div className="playerCards showcards">
<div>

{
    <>
{/* <img src="https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzgyMDk1NzA1NzM0/top-strongest-highest-power-magic-the-gathering-creatures.jpg" alt="" /> */}
    </>
}
</div>
<div>

<img src="https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzgyMDk1NzA1NzM0/top-strongest-highest-power-magic-the-gathering-creatures.jpg" alt="" />

</div>
<div>
    
    <img src="https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzgyMDk1NzA1NzM0/top-strongest-highest-power-magic-the-gathering-creatures.jpg" alt="" />
    </div>  
    </div>

    </>
  )
}

export default Home