import React, { useEffect,useState } from 'react'
import {Container} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const navigate=useNavigate()
  
    const params=useParams()
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')

    useEffect(()=>{

        const userInfo=localStorage.getItem('userInfo');
        const info=JSON.parse(userInfo);
        
        if(userInfo){
            navigate('/admin')
        }else{
            console.log('manaf')
            navigate('/admin/login')
        }


        const fetchUser=async()=>{
            const {data}=await axios.get(`/admin/editUser/${params.id}`)
            setEmail(data.email)
            setName(data.username)
            // console.log(data);
        }
        fetchUser()
    },[params])

    const handleSubmit=async()=>{
        console.log(params)
        
      const {data}= await axios.post(`/admin/editUserdata/${params.id}`,{email,name})
      console.log(data)
      
      console.log('navigate')
      navigate('/admin')


    }




    return (
        <div className='p-5'>
            <Container>
            <div className='form-outline mb-4'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='form2Example11' className='form-control' placeholder='Phone number or email address' />
                <label className='form-label' htmlFor='form2Example11'>Email</label>
            </div>

            <div className='form-outline mb-4'>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' id='form2Example22' className='form-control' />
                <label className='form-label' htmlFor='form2Example22'>Name</label>
            </div>
            <Container>
            <button onClick={handleSubmit}  className='btn btn-primary btn-block fa-lg gradient-custom-2 mb-3' type='button'>Update</button>
            </Container>
            </Container>
        </div>
    )
}

export default EditUser
