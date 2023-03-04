import "./App.css";
import io from 'socket.io-client'
import { useEffect, useState } from "react";

const socket = io.connect('http://localhost:3004')

function App() {
  const [userId, setUserId] = useState('')
  const [room, setRoom] = useState('')
  const [randomNum, setRandomNum] = useState(0)
  const [receivedRandomNum, setReceivedRandomNum] = useState(0)

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
    <div className="App">
      <h2>userId: {userId.id}</h2>
      <div>
        <input placeholder="join room" onChange={(e) => setRoom(e.target.value)} />
        <button onClick={handleJoinRoom}>Join Room</button>
      </div>
<div style={{display:"flex",justifyContent:"space-around"}}>
<div>{randomNum}</div>
<h2>{randomNum>receivedRandomNum?"Won":(
  receivedRandomNum<receivedRandomNum?"lose":(
    randomNum===receivedRandomNum&&randomNum!=0&&receivedRandomNum!=0?"Draw":"Start"
  )
)}</h2>
<div>{receivedRandomNum}</div>
</div>
<p>Your random number: {randomNum}</p>
      <p>Received random number: {receivedRandomNum}</p>
      <button onClick={handleRollDice}>Roll the Dice</button>

    </div>
  );
}

export default App;
