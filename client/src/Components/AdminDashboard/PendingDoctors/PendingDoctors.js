import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const PendingDoctors = () => {
    const [doctors, setDoctors] = useState([])

    const [show, setShow] = useState(false);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/doctors')
       .then(res => res.json())
       .then(data => setDoctors(data))  
        
     },[])

     const pendingDoctors  = doctors.filter(doctor => doctor.verifyStatus === 'pending'); 

     const handleAcceptClick = (docId, status) => {
        const statusObject = {
            verifyStatus : status
        }

        fetch('https://floating-ocean-27822.herokuapp.com/update-doctor/'+docId, {
            method : 'PATCH',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(statusObject)
        })
        .then(res => res.json())
        .then(returnData => {
            if(returnData){
                const filterDoctor = doctors.filter(doctor => doctor._id !== docId)
                const [seletedDoctor] = doctors.filter(doctor => doctor._id === docId)
                const updateSelectedDoctor = {...seletedDoctor, verifyStatus : status}
                setDoctors([...filterDoctor, updateSelectedDoctor])
            }
        })
     }

     const handleDeleteClick = (docId) => {
         console.log(docId)
        fetch('https://floating-ocean-27822.herokuapp.com/delete-doctor/'+docId, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if(result){
                const newDoctors = doctors.filter(doctor => doctor._id !== docId);
                setDoctors(newDoctors);
            }
            
        })
    }

    
    
    return (
        <>
        <Container>
            <h3>Doctors Record</h3>
            
            <Row className="rounded mt-3" style={{backgroundColor: 'lightblue'}}>
                <Col className="p-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>All Doctors</h3>
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
                            {/* <th>id</th> */}
                            <th>Name</th>
                            {/* <th>Email</th> */}
                            <th>Work Day</th>
                            <th>Work Time</th>
                            <th>Department</th>
                            {/* <th>Hospital Name</th> */}
                            <th>Profile</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingDoctors.map(doctor => 
                            <tr key={doctor._id}>
                                {/* <td>{doctor._id}</td> */}
                                <td>{doctor.userName}</td>
                                {/* <td>{doctor.userEmail}</td> */}
                                <td>{doctor.availableDays}</td>
                                <td>{doctor.startTime} - {doctor.endTime}</td>
                                <td>{doctor.doctorCategory}</td>
                                {/* <td>{pt.name}</td> */}
                                {/* <td>{doctor.hospitalName}</td> */}
                                <td>
                                    <Button onClick={()=>handleShow()}  variant="success">View</Button>
                                    {/* <Button onClick={()=>console.log(doctor._id)}  variant="success">View</Button> */}
                                </td>
                                <td>
                                    <Button variant="success">{doctor.verifyStatus}</Button>
                                </td>
                                <td >
                                    <Button onClick={()=> handleAcceptClick(doctor._id, 'accept')} variant="info">Accept</Button>
                                    <Button onClick={()=> handleDeleteClick(doctor._id)} className="ml-1" variant="warning">Delete</Button>
                                </td>
                                <DoctorDetails id={doctor._id} show={show} handleClose={handleClose}></DoctorDetails>
                                
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

export default PendingDoctors;