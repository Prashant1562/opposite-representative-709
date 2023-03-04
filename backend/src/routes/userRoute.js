const express=require('express')
const UserModel = require('../models/userModel')
const userRouter=express.Router()


userRouter.get('/',async(req,res)=>{
    try {
        const users=await UserModel.find()
        res.send(users)
    } catch (error) {
        res.send({message:"error",error})
    }
})


userRouter.post('/',async(req,res)=>{
    const userName=req.body.userName
    console.log(userName)
    if(userName){
        const findUser=await UserModel.find({userName})
        if(findUser.length){
            res.send(findUser[0])
        }else{
            const newUser=new UserModel({userName})
            await newUser.save()
            res.send(newUser)
        }
    }
})



userRouter.patch('/',async(req,res)=>{
    const userName=req.body.userName

    try {
        if(userName){
            const findUser=await UserModel.find({userName})
            if(findUser.length){
                const updatedUser=await UserModel.findOneAndUpdate({userName},{$inc: {"wins": 1}}, {returnNewDocument: true})
                res.send(updatedUser)
            }else{
                res.send("user not found")
            }
        }
    } catch (error) {
        res.send(error.message)
    }
})

module.exports=userRouter;