import React,{useState,useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container,Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


const Header = () => {
    const navigate=useNavigate()
    
    const[logoutbut,setlogoutbut]=useState('')
    const userInfo=localStorage.getItem('userInfo');
    
    useEffect(()=>{
    const info=JSON.parse(userInfo);
        if(info){
            setlogoutbut(true)
        }else{
            setlogoutbut(false)
        }
    },[userInfo])


    const handleLog=()=>{
        localStorage.removeItem('userInfo');
        navigate('/login')
        setlogoutbut(false)
        

    }
   
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="#home">MULTISTORE</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        {/*
                        <LinkContainer to='/'>
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer> */}
                     { logoutbut?
                        <LinkContainer to='/login'>
                            <Nav.Link onClick={handleLog}>LogOut</Nav.Link>
                        </LinkContainer> : <LinkContainer to='/login'>
                            <Nav.Link>LogIN</Nav.Link>
                        </LinkContainer>
}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header




