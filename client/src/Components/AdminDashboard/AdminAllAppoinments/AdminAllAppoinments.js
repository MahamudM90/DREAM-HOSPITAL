import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { fakePatients } from '../../../FakeData/patients';
import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminAllAppoinments = () => {

    const [appointments, setAppointment] = useState([]);
    const [patients, setPatient] = useState([]);
    const [doctors, setDoctor] = useState([]);


    
    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/appointments')
       .then(res => res.json())
       .then(data => setAppointment(data))
     },[])
     

     useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/patients')
       .then(res => res.json())
       .then(data => setPatient(data))
     },[])

     useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/doctors')
       .then(res => res.json())
       .then(data => setDoctor(data))
     },[])

    return (
        <>
        <Container>
            <h3>Dashboard</h3>
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
                            <h1>{doctors.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>Total  <br/> Doctors</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-success p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>{appointments.length}</h1>
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
                        <h3>Recent Apponitments</h3>
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
                            <th>#</th>
                            <th>Name</th>
                            <th>Doctor Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appointment => 
                            <tr key={appointment._id}>
                                <td>{appointment.userName}</td>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.doctorName}</td>
                                <td>{appointment.phoneNo}</td>
                                <td>{appointment.userEmail}</td>
                                <td>
                                    <Button variant="success">View</Button>
                                </td>
                                <td >
                                    <Button variant="info">Pending</Button>
                                    <Button className="ml-1" variant="warning"><FontAwesomeIcon icon={faPen} /></Button>
                                </td>
                                
                            </tr>)
                        }
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
            
        </>
    );
};

export default AdminAllAppoinments;