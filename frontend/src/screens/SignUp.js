import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const SignUp = () => {
    const navigate=useNavigate()
    const[email,setEmail]= useState('')
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('/registerUser',{email,username,password}).then(response=>{
            // console.log(response);
            alert(response.data.message)
            navigate('/login')
        })
        // console.log(email+username+password);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2 className="text-center">Registration</h2>
                    <h4>Enter your Details</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Username:</label>
                            <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" id="username" placeholder="Enter password" name="username" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter password" name="password" required/>
                        </div>
                        <a href="/login">Already have an account?</a>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
