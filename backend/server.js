import express from 'express'
import connectDB from './config/db.js'
import User from './models/User.js'
import generateToken from './util/generateToken.js'
import asyncHandler from 'express-async-handler';
import Admin from './models/Admin.js';
import {registerUser} from './controllers/userControllers.js'




const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB();

app.get('/',(req,res)=>{

    res.send('My API')
})

app.post('/registerUser',(req,res)=>{
    // console.log(req.body)
    const {email,username,password}=req.body
    const user=new User({
        email:email,
        username:username,
        password:password
    })
    user.save(err=>{
        if (err){
            res.send(err)
        }else {res.send({message:"Succesfully Registered"})}
    })
})
// app.post('/registerUser',(registerUser))

app.post('/loginUser',async(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                user.token=generateToken(user._id)
                res.send  ({name:user.username,email:user.email,password:user.password,
                _id:user._id,token: generateToken(user._id)
            })
            }else{
                res.json({message:'Password Incorrect'})
            }
        }else{
            res.json({message:'User not found'})
        }
    })
        // console.log(req.body)
})       


app.get('/getUser',asyncHandler(async(req,res)=>{
    
    const Users = await User.find({})
    res.json(Users)

 }))

 app.get('/deleteUser/:id',asyncHandler(async(req,res)=>{
     
    const user= await User.findById(req.params.id)
        if(user){
            await user.remove();
            
            // const Users = await User.find({})
            res.json({})


        }else{
            res.status(404)
            throw new Error('User not found')
        }
                                                                            

 }))

 app.get('/admin/editUser/:id',asyncHandler(async(req,res)=>{
    
    const user= await User.findById(req.params.id)
    res.json(user)

 }))


 app.post('/admin/editUserdata/:id',asyncHandler(async(req,res)=>{
     console.log(req.params.id)
     console.log(req.body)
    
     await User.findByIdAndUpdate(req.params.id,{email:req.body.email,username:req.body.name})
     const Users = await User.find({})
    res.json(Users) 

 }))

 app.post('/adminlogin',asyncHandler(async(req,res)=>{
        console.log(req.body)
    const {email,password}=req.body
    Admin.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                user.token=generateToken(user._id)
                res.send  ({email:user.email,password:user.password,
                _id:user._id,token: generateToken(user._id)
            })
            }else{
                res.json({message:'Password Incorrect'})
            }
        }else{
            res.json({message:'User not found'})
        }
    })

 }))


 app.post('/admin/search',asyncHandler (async (req,res) =>{
    const { search } =req.body
    console.log(req.body)
   

    try {
        const users = await User.find({username:search})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}))









app.listen(5000,console.log('server started at port 5000'))




