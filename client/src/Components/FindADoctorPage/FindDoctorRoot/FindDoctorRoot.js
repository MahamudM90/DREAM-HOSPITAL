import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const FindDoctorRoot = () => {
    const history = useHistory();
    return (
        <Row className="my-3 mx-auto d-flex align-items-center justify-content-center">
                <Col md={5}>
                <Button onClick={()=> history.push('/find-doctor-organ')} className="py-2 px-5 font-weight-bold">Organ Search</Button>
                <Button onClick={()=> history.push('/find-doctor-static')} className="ml-3 py-2 px-5 font-weight-bold">Static Search</Button>
                </Col>
        </Row>
    );
};

export default FindDoctorRoot;