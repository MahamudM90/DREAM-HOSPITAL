import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DoctorsProfile = () => {
    const {id} = useParams();
    const [doctors, setDoctors] = useState([]);

     useEffect(() => {
        fetch(`https://floating-ocean-27822.herokuapp.com/doctors/${id}`)
       .then(res => res.json())
       .then(data => setDoctors(data))
     },[id])

        // console.log(id)
        // console.log(doctors)

        return (
        <div>
            <Card style={{ width: '70%', margin : '5px auto'}}>
                <Card.Img variant="top" src={doctors.doctorImage} />
                <Card.Body>
                    <Card.Title>{doctors.userName}</Card.Title>
                    <Card.Text>Department : {doctors.doctorCategory}</Card.Text>
                    <Card.Text>Email : {doctors.userEmail}</Card.Text>
                    <Card.Text>Hospital : {doctors.hospitalName}</Card.Text>
                    {doctors.availableDays && <Card.Text>Available Day : {doctors.availableDays}</Card.Text>}
                    {doctors.startTime && <Card.Text>Start Time : {doctors.startTime}</Card.Text>}
                    {doctors.endTime && <Card.Text>End Time : {doctors.endTime}</Card.Text>}
                    <Button  variant="primary"><Link className="text-white" to="/appointments">Give Appointment</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorsProfile;