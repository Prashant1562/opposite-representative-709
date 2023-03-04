const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    userName:{type:String,required:true},
    wins:{type:Number,default:0}
})
const UserModel=mongoose.model('user',userSchema)
module.exports=UserModel