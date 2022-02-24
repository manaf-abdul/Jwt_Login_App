import React, { useEffect, useState } from 'react'
import { Container, Button, Table, Form, FormControl, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





const AdminPage = () => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [user, setUser] = useState([])
    const [a, setA] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const userInfo = localStorage.getItem('adminInfo');
        const info = JSON.parse(userInfo);
        setA(info ? info.email : "admin@g.com")
        if (userInfo) {
            axios.get('/getUser').then((res) => {
                console.log(res.data);
                setUser(res.data)
            })
        } else {
            navigate('/admin/login')
        }
    }, [])



    const handleDelete = (id) => {
        if (window.confirm("Sure to Delete?")) {
            axios.get(`/deleteUser/${id}`).then((res) => {
                console.log(res)
                // setRefresh(!refresh)
            })
        }

        navigate('/admin')
        // setRefresh(true)
    }                                                                                                                                                                                                       

    const handleLogOut = () => {
        localStorage.removeItem('adminInfo');
        // setRefresh(!refresh)
        navigate('/admin/login')
    }
    const searchHandler = async(e) => {
        e.preventDefault()
        const {data}= await axios.post('/admin/search',{search})   
        console.log(data)                                                                                                                                                                                                                      
        setRefresh(!refresh)        
    }
    // const setPage=()=>{
    //     navigate('/admin')
    // }


    return (
        <Container>

            <Row>
                <Col className='pt-5'>
                    <LinkContainer to='/admin'>
                    <h3 >ADMIN PANEL</h3>
                    </LinkContainer>
                </Col>
                <Col className='pt-5 text-right'>
                    <Button onClick={() => handleLogOut()} className='btn btn-danger'>Sign Out</Button>
                </Col>
            </Row>
            <Container className='pt-5 pb-5'>
                <Container className='pl-5 pr-5'>
                    <Form onSubmit={searchHandler} className="d-flex ">
                        <FormControl
                            type="text" placeholder="Serach by Name" value={search} onChange={(e) => setSearch(e.target.value)}
                            className="me-2"  />

                        <button type="submit " variant="ouline-success" className="btn btn-info ">Search</button>

                    </Form>
                </Container>
            </Container>



            <Table striped bordered hover className='pt-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Options</th>

                    </tr>
                </thead>
                <tbody>
                    {user.map((users) =>
                        <tr key={users._id}>

                            <td>1</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                            <LinkContainer to={`/admin/edit/${users._id}`}>
                                <td><Button className='btn btn-primary'>Edit</Button></td>
                            </LinkContainer>
                            <td>
                                <Button onClick={() => handleDelete(users._id)} className='btn btn-danger'>Delete</Button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminPage
