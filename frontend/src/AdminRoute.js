import React from 'react'
import AdminLogin from './screens/Admin/adminLogin'
import AdminPage from './screens/Admin/AdminPage'
import { Routes,Route } from 'react-router-dom'
import EditUser from './screens/Admin/EditUser'

const AdminRoute = () => {
    return (
        
        <Routes>

            <Route path='/' element={<AdminPage/>}/>
            <Route path='/login' element={<AdminLogin/>}/>
            <Route path='/edit/:id' element={<EditUser/>}/>


        </Routes>
      
    )
}

export default AdminRoute
