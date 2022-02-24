import asynHandler from 'express-async-handler';
import User from '../models/User.js'


const registerUser=asynHandler(async(req,res)=>{
    const {name,email,password}=req.body;

    const userExists=await User.findOne({email: email});

    if (userExists){
        res.status(400)
        throw new Error('User already exists')

    }else{
        const user=await User.create({
            username:name,
            email:email,
            password:password
        })
        if(user){
            res.status(201).json({
                _id,
                name:user.name,
                email:user.email,

            })
        }else{
            res.status(400)
            throw new Error('Error occured')

        }
    }
})
export {registerUser}