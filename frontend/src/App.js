import "./App.css";
import io from 'socket.io-client'
import { useEffect, useState } from "react";

const socket=io.connect('http://localhost:3004')

function App() {
const [data,setData]=useState([])  
const [message,setMessage]=useState('')
const [room,setRoom]=useState('')
const [userName,setUserName]=useState('')
const postMessage=()=>{
  socket.emit('send_message',{message,room,userName})
}

useEffect(()=>{
  socket.on('receive_message',(data)=>{
    console.log("data",data)
    setData(data)
  })
},[socket])

const joinRoom=()=>{
  if(room){
    socket.emit('join_room',room)
  }
}

  return <div className="App">
    <div>
      <input placeholder="join room"  onChange={(e)=>setRoom(e.target.value)}/>
      <input placeholder="user name"  onChange={(e)=>setUserName(e.target.value)}/>
      <button onClick={joinRoom}>Join Room</button>
    </div>
   
    <input placeholder="message" onChange={(e)=>setMessage(e.target.value)}/>

    <button onClick={postMessage}>send</button>
  <p>{data.message}</p>
  </div>;
}

export default App;
