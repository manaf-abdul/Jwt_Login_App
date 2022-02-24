import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer'
import UserRoute from './UserRoute';
import AdminRoute from './AdminRoute'
import Adminpage from './screens/Admin/AdminPage'

// import HomeScreen from './screens/HomeScreen'
// import Login from './screens/Login'
// import SignUp from './screens/SignUp';
// import Admin from './screens/Admin/adminLogin'
// import User from './screens/User';
// import AdminPage from './screens/Admin/AdminPage';

function App() {

  return (
    <>

      <Router>
        {/* <main className='py-3'> */}
          <Routes>
            {/* <Route path='/' element={user && user._id?<HomeScreen/>:<Login setLoginUser={setLoginUser}/>} />
            {/* <Route path='login' element={<Login setLoginUser={setLoginUser}/>}/> */}
            {/* <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='admin' element={<Admin />} />
            <Route path='/adminlogin' element={<adminlogin />} /> */}

            <Route path='/*' element={<UserRoute />} />
            <Route path='/admin/*' element={<AdminRoute />} />
          </Routes>
        {/* </main> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
