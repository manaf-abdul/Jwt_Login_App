import React, { useState, useEffect } from 'react'
// import './Login.css'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





const AdminLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userInfo = localStorage.getItem('userInfo');
    useEffect(() => {
        console.log('useEffect')
        const adminInfo = localStorage.getItem('adminInfo');
        // const info=JSON.parse(userInfo);
        // setUserName(info?info.name:"user")
        if (adminInfo) {
            // setUsername('something')
            navigate('/admin')
        } else {
            // console.log('manaf')
            navigate('/admin/login')
        }
    }, [])



    const handleSubmit = (e) => {
        console.log("clicked")
        e.preventDefault()
        axios.post('/adminlogin', { email, password }).then(response => {
            // console.log(response);
            // setLoginUser(response.data.user)
            if (response.data.message) {
                alert(response.data.message)
            } else {
                localStorage.setItem("adminInfo", JSON.stringify(response.data));
                alert("Login Successful")
                navigate('/admin')

            }
        })
    }


    return (
        <>
      
                <div>
                    {console.log('render')}
                    <section className='h-100 gradient-form' >
                        <div className='container py-5 h-100'>
                            <div className='Row d-flex justify-content-center align-items-center h-100'>
                                <div className='Col-xl-10'>
                                    <div className='card rounded-3 text-black'>
                                        <div className='Row g-0'>
                                            <div className='Col-lg-6'>
                                                <div className='card-body p-md-5 mx-md-4'>

                                                    {/* <div className='text-center'>
                                                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' />
                                                    <h4 className='mt-1 mb-5 pb-1'>We are The Lotus Team</h4>
                                            </div> */}

                                                    <form>
                                                        <p>Admin Login</p>

                                                        <div className='form-outline mb-4'>
                                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='form2Example11' className='form-control' placeholder='Phone number or email address' />
                                                            <label className='form-label' htmlFor='form2Example11'>Username</label>
                                                        </div>

                                                        <div className='form-outline mb-4'>
                                                            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='form2Example22' className='form-control' />
                                                            <label className='form-label' htmlFor='form2Example22'>Password</label>
                                                        </div>

                                                        <div className='text-center pt-1 mb-5 pb-1'>
                                                            <button onClick={handleSubmit} className='btn btn-primary btn-block fa-lg gradient-custom-2 mb-3' type='button'>Log in</button>
                                                            <a className='text-muted' href='#!'>Forgot password?</a>
                                                        </div>
                                                        <LinkContainer to='/signup'>
                                                            <div className='d-flex align-items-center justify-content-center pb-4'>
                                                                {/* <p className='mb-0 me-2'>Don't have an account?</p> */}
                                                                {/* <button type='button' onClick={()=>handleSubmit} className='btn btn-outline-danger'>Create new</button>    */}
                                                            </div>
                                                        </LinkContainer>
                                                    </form>

                                                </div>
                                            </div>
                                            {/* <div className='Col-lg-6 d-flex align-items-center gradient-custom-2'>
                                        <div className='text-white px-3 py-4 p-md-5 mx-md-4'>
                                            <h4 className='mb-4'>We are more than just a company</h4>
                                            <p className='small mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            
        </>
    )
}

export default AdminLogin 