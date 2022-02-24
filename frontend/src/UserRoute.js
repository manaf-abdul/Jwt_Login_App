import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'


const UserRoute = () => {
    return (
        <>
        <Header/>
        <Routes>
            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<HomeScreen />} />
            
        </Routes>
        </>
    )
}

export default UserRoute
