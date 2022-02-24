import React,{useEffect,useState} from 'react'
import {Container,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'




const HomeScreen = () => {
    const navigate=useNavigate();
    const [name,setUserName]=useState('')

    useEffect(()=>{
        const userInfo=localStorage.getItem('userInfo');
        const info=JSON.parse(userInfo);
        setUserName(info?info.name:"user")
        if(userInfo){
            navigate('/')
        }else{
            // console.log('manaf')
            navigate('/login')
        }
    },[navigate])



    return (
        <Container>
            <h1 className='text-center'>WELCOME TO HOMEPAGE</h1>
            <h3 className='text-center'>{name && name}</h3>
            {/* <Button>Logout</Button> */}
            
        </Container>
    )
}

export default HomeScreen
