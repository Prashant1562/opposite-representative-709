import React from 'react'
import io from 'socket.io-client'
import { useEffect, useState } from "react";
import "./game.css"
import diceroll from "../Assets/diceroll.gif"
import two from "../Assets/two.png"
import three from "../Assets/three.png"
import four from "../Assets/four.png"
import five from "../Assets/five.png"
import six from "../Assets/six.png"
import one from "../Assets/one.png"
import vs from "../Assets/vs.png"

const socket = io.connect('http://localhost:3004')

const Game = () => {

  const [userId, setUserId] = useState('')
  const [room, setRoom] = useState('')
  const [randomNum, setRandomNum] = useState("")
  const [receivedRandomNum, setReceivedRandomNum] = useState("")
 const [loading,setloading]=useState(false)
  const sendMessage = (num) => {
    socket.emit('send_message', { randomNum: num, room, id: userId })
  }

  const handleReceiveMessage = (data) => {
    setReceivedRandomNum(data.randomNum)
  }

  const handleRollDice = () => {
    const num = Math.floor(Math.random() * 6) + 1
    setRandomNum(num)
    sendMessage(num)
  }
const setImg=(num)=>{
  switch(num){
    
    case 1: return one; break;
    case 2: return two; break;
    case 3: return three; break;
    case 4: return four; break;
    case 5: return five; break;
    case 6: return six; break;
   default:return one
  }
}
  const handleJoinRoom = () => {
    if (room) {
      socket.emit('join_room', room)
    }
  }

  useEffect(() => {
    socket.on('your_id', (data) => setUserId(data))
    socket.on('receive_message', handleReceiveMessage)
    return () => {
      socket.off('your_id')
      socket.off('receive_message', handleReceiveMessage)
    }
  }, [socket])


  return (
        <div>



  {
    !userId?(
      <div className='mainRoom'>
      <input placeholder="join room" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
    ):(
<div className='mainGame'>
<div className='workingSpace'>

<div>
<img className={loading?diceroll:"beforeStart"} src={loading?diceroll:(
setImg(randomNum)
)} alt="" />
</div>


<div>
{
  randomNum>receivedRandomNum?<img width={"250px"} src="https://media0.giphy.com/media/jsGz81YPCgw9YSliV0/giphy_s.gif" alt="" />:(
    randomNum<receivedRandomNum?<img widht="250px" height="100px" src="https://media.tenor.com/kRYmL5XfwzMAAAAC/miggi-you-lose.gif" alt=""/>:(
     typeof randomNum=='number'&&typeof receivedRandomNum=="number"&&randomNum===receivedRandomNum?(
      <img style={{borderRadius:"20px"}} src="https://i.pcmag.com/imagery/articles/03zylSRJfO0EokGOrBibFct-1.fit_lim.size_1600x900.v1569485620.jpg" alt="" />
     ):(
      <img width={"100px"} src={vs} alt="" />
     )
    )
  )
}
</div>


<div>
<img className={loading?diceroll:"beforeStart"} src={loading?diceroll:(
setImg(receivedRandomNum)
)} alt="" />



</div>



</div>



      <button class="button-73" role="button" onClick={handleRollDice}>Roll the Dice</button>

</div>
    )
  }





    </div>
  )
}

export default Game