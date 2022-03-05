import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { fakePatients } from '../../../FakeData/patients';
import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';
import { connect } from 'react-redux';

const DoctorsPatients = ({user}) => {
    const [patients, setPatient] = useState([]);

    const [doctors, setDoctor] = useState([]);

    const [appointments,setAppointment] = useState([]);

    const [filterAppoitments, setFilterAppoitments] = useState([]);
    


        useEffect(() => {
            fetch('https://floating-ocean-27822.herokuapp.com/appointments')
           .then(res => res.json())
           .then(data => setAppointment(data))
         },[])

         useEffect(() => {
            const filterApp = appointments.filter(appointment => appointment.doctorName === user.userName);
            setFilterAppoitments(filterApp);
        },[appointments, user])
       

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

        //  console.log(filterAppoitments)
        //  console.log(appointments)
         console.log(patients)


    return (
        <>
        <Container>
            <h3>Dashboard</h3>
            <Row>
                <Col md={3}>
                    <div className="p-1">
                        <Row className="bg-info p-3 text-white rounded align-items-center"> 
                            <Col md={4}>
                                <h1>{filterAppoitments.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>My <br/> Appointments</p>
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
                            <th>User Name</th>
                            <th>Patient Name</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterAppoitments.map(pt => 
                            <tr key={pt._id}>
                                <td>{pt.userName}</td>
                                <td>{pt.patientName}</td>
                                <td>{pt.phoneNo}</td>
                                <td>{pt.userGender}</td>
                                <td>{pt.userEmail}</td>
                                {/* <td>{pt.phone}</td> */}
                                <td>
                                    <Button variant="success">Pending</Button>
                                </td>
                                <td >
                                    {/* <Button variant="info">Delete</Button> */}
                                    <Button variant="info">Done</Button>
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

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}


export default connect(mapStateToProps, mapDispatchToProps)(DoctorsPatients);