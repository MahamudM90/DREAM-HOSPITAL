import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './OurDoctors.css'
import { fakeDoctors } from '../../../FakeData/fakeDoctors';
import { Link, useHistory } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const OurDoctors = () => {
    const [doctors, setDoctor] = useState([])
    console.log(doctors)

    const history = useHistory();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase : 'liner'
      };

      useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/doctors')
       .then(res => res.json())
       .then(data => setDoctor(data))
     },[])

    return (
        <section className="d-flex align-items-center">
            <Container>
                <div className="text-center">
                    <h3  style={{ color: '#00594d', fontSize: '35px'}} className="headline mt-3 mb-3">Our Specialist Doctors</h3>
                </div>
                <Slider {...settings} className="mt-5  mb-5">
                    {

                           doctors.map((doctor, idx )=> 
                            <Card style={{width : '200px'}} className="d-flex align-items-center justify-content-between  bg-white rounded">
 

                                <Card.Img style={{height : '200px', width : '90%'}} className="card-image mt-4 rounded" variant="top" src={doctor.doctorImage} />
                                <Card.Body>
                                        <h4 style={{ color : '#17B995'}} className="mt-4 text-left">{doctor.userName}</h4>
                                        <hr style={{width : '20%', marginLeft: '0px', backgroundColor : '#d1c398', height : '2px'}}/>
                                        <h6>Department : {doctor.doctorCategory}</h6>
                                        <h6 className="text-secondary">Degree : {doctor.hospitalName}</h6>
                                        <p className="mt-2 mr-2 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quidem</p>
                                        <Button onClick={()=> history.push('/appointments')}variant="outline-success d-block" className="float-left">Make Appoinment</Button>
                                        {/* <Button value={doctor.userName} onClick={()=> history.push('/doctor-profile')} variant="outline-success d-block" className="float-right">View Profile</Button> */}
                                        <Button variant="outline-success d-block" className="float-right"><Link to={"/doctors-profile/"+doctor._id}>View Profile</Link></Button>
                                    </Card.Body>
                            </Card>
                            )
                    }         
                </Slider>
            
            </Container>
        </section>
    );
};

export default OurDoctors;