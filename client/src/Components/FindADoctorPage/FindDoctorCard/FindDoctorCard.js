import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import {faPhone, faComments, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import './FindDoctorCard.css'

const FindDoctorCard = ({selectedDoc}) => {

    const history = useHistory();
    const {doctorImage, userName, doctorCategory, hospitalName} = selectedDoc;

    return (
        <Card style={{ width: '22rem' }} className="m-1 p-1 text-center" >
            <Image className="mx-auto doctor-pic shadow" src={doctorImage} roundedCircle fluid/>
            <Card.Body>
                <Card.Title>{userName}</Card.Title>
                <Card.Text className="border-bottom border-danger">Description</Card.Text>
                <Card.Text className="text-left">Department : {doctorCategory}</Card.Text>
                <Card.Text className="text-left">Study : {hospitalName}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col md={4} className="border-right text-center">
                        <div style={{width: '30px', height:'30px'}} className="rounded-circle mx-auto bg-dark d-flex justify-content-center align-items-center overflow-hidden">
                            <FontAwesomeIcon className="text-white" icon={faPhone}></FontAwesomeIcon>
                        </div>
                        <small>CALL FOR AN APPOINMENT</small>
                    </Col>
                    <Col md={4} className="border-right text-center">
                        <div style={{width: '30px', height:'30px'}} className="rounded-circle mx-auto bg-dark d-flex justify-content-center align-items-center overflow-hidden">
                            <FontAwesomeIcon className="text-white" icon={faComments}></FontAwesomeIcon>
                        </div>
                        <small><Link to="/contact">SEND AN INQUIRY</Link></small>
                    </Col>
                    <Col style={{cursor: 'pointer'}} onClick={() => history.push('/appointments')} md={4} className="text-center">
                        <div style={{width: '30px', height:'30px'}} className="rounded-circle mx-auto bg-dark d-flex justify-content-center align-items-center overflow-hidden">
                            <FontAwesomeIcon className="text-white" icon={faCalendarAlt}></FontAwesomeIcon>
                        </div>
                        <small>MAKE APPOINMENT</small>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default FindDoctorCard;