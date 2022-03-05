import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import DoctorContainer from '../DoctorContainer/DoctorContainer';
import DoctorSearch from '../DoctorSearch/DoctorSearch';
import DoctorSearchByOrgan from '../DoctorSearchByOrgan/DoctorSearchByOrgan';

const FindDoctorOrganicIndex = () => {
    const history = useHistory();
    const [selectedDept, setSelectedDept] = useState('');
    return (
        <Container>
            <Row className="my-3 mx-auto d-flex align-items-center justify-content-center">
                <Col md={5}>
                <Button variant="success" onClick={()=> history.push('/find-doctor-organ')} className="py-2 px-5 font-weight-bold">Organ Search</Button>
                <Button  onClick={()=> history.push('/find-doctor-static')} className="ml-3 py-2 px-5 font-weight-bold">Static Search</Button>
                </Col>
            </Row>
            <DoctorSearchByOrgan setSelectedDept={setSelectedDept} ></DoctorSearchByOrgan>
            <DoctorContainer selectedDept={selectedDept}></DoctorContainer>
        </Container>
    );
};

export default FindDoctorOrganicIndex;