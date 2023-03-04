const express=require('express')
require('dotenv').config()
const app=express()
const http = require('http');
const {Server} =require('socket.io')
const cors=require('cors');
const { connection } = require('./config/db');
const userRouter = require('./routes/userRoute');
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:['GET','POST']
    }
})

io.on('connection',(socket)=>{

    console.log(`user connected ${socket.id}`)
    socket.on('join_room',(data)=>{
        
        socket.join(data)
        socket.emit('your_id',{id:socket.id})
    })
    socket.on('send_message',(data)=>{
        socket.to(data.room).emit('receive_message',data)
    })
})

server.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("connected to db");
      } catch (error) {
        console.log(error);
        res.sen({ message: "error while connecting to db" });
      }
      console.log(`running at http://localhost:${process.env.PORT}`);
})