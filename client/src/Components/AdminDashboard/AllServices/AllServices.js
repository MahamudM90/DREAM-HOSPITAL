import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { fakePatients } from '../../../FakeData/patients';
import ServiceView from './ServiceView';
import {Link} from "react-router-dom"

const AllServices = () => {
    const [services, setServices] = useState([]);

    const [show, setShow] = useState(false);
    // const [id, setId] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        // setId(sId)
    }
    // console.log(id)

    const patients = fakePatients.slice(0);

    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/services')
       .then(res => res.json())
       .then(data => setServices(data))
     },[])

    //  const handleClick = id => {
    //      console.log(id)
    //  }


    return (
        <>
        <Container>
            <h3>All Services</h3>
            <Row>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-info p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h6>Not yet ready</h6>
                            </Col>
                            <Col md={4}>
                                <p>Appointments <br/> Pending</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-warning p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                            <h6>Not yet ready</h6>
                            </Col>
                            <Col md={4}>
                                <p>Today's <br/> Apponitments</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-success p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>{patients.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>Total<br/> Apponitments</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-danger p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>{patients.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>Total<br/> Patients</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="rounded mt-3" style={{backgroundColor: 'lightblue'}}>
                <Col className="p-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>All services</h3>
                        <div>
                            <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic"  disabled>
                                <FontAwesomeIcon icon={faCalendar}/> | Week
                            </Dropdown.Toggle>
                            </Dropdown>
                        </div>
                    </div>
                    <Table className="text-center mt-2" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>service Id</th>
                            <th>service Name</th>
                            <th>Service details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, index) => 
                            <>
                            <tr key={service._id}>
                                <td>{service._id}</td>
                                <td>{service.serviceName}</td>
                                <td>
                                    <Button onClick={()=>
                                    handleShow()} variant="success" key={service._id} >View</Button>    
                                </td>
                                <td >
                                    <Button variant="info">Pending</Button>
                                    <Button className="ml-1" variant="warning"><FontAwesomeIcon icon={faPen} /></Button>
                                </td> 
                                
                            </tr>
                            <ServiceView key={service._id} id={service._id} show={show} handleClose={handleClose}></ServiceView> 
                            </>
                            )
                            
                        }
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>
            
        </Container>
            
        </>
    );
};

export default AllServices;