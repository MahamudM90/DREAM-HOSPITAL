import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux';


const YourAppointments = ({user}) => {
    const [appointments,setAppointment] = useState([]);

    const [filterAppoitments, setFilterAppoitments] = useState([]);

    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/appointments')
       .then(res => res.json())
       .then(data => setAppointment(data))
     },[])

     useEffect(() => {
        const filterApp = appointments.filter(appointment => appointment.userName === user.userName);
        setFilterAppoitments(filterApp);
    },[appointments, user])

    // console.log(filterAppoitments)
    // console.log(user.userName)
    // console.log(appointments)

    return (
        <Container>
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
                            <th>Pt-ID</th>
                            {/* <th>Appointment date</th> */}
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Mobile No</th>
                            <th>Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterAppoitments.map(appointment => 
                            <tr key={appointment._id}>
                                <td>{appointment._id}</td>
                                {/* <td>{pt.date}</td> */}
                                <td>{appointment.patientName}</td>
                                <td>{appointment.doctorName}</td>
                                <td>{appointment.phoneNo}</td>
                                {/* <td>{appointment.userGender}</td> */}
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
    );
};

const mapStateToProps = state => {
    return {
        user : state.user
    }
}


export default connect(mapStateToProps)(YourAppointments);