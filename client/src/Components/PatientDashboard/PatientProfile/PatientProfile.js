import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';
import PatientProfileUpdate from '../PatientProfileUpdate/PatientProfileUpdate';
import { connect } from 'react-redux';

const PatientProfile = ({user, addLoggedinUser}) => {

    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="px-5 py-5 font-weight-bold">
            <h2>Patient Profile</h2>
            <Form className="border p-5 mt-3">
                <Form.Group as={Row} controlId="formPlaintextName">
                    <Form.Label column sm="2">
                    Full Name :
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control className="px-3 py-2 rounded" type="text" plaintext readOnly defaultValue={user.userName} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email :
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control className="px-3 py-2 rounded" type="email" plaintext readOnly defaultValue={user.userEmail} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextRole">
                    <Form.Label column sm="2">
                    Role :
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control className="px-3 py-2 rounded" type="text" plaintext readOnly defaultValue={user.role} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextGender">
                    <Form.Label column sm="2">
                    Gender :
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control className="px-3 py-2 rounded" type="text" plaintext readOnly defaultValue={user.userGender} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPhone">
                    <Form.Label column sm="2">
                    Mobile Number :
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control className="px-3 py-2 rounded" type="text" plaintext readOnly defaultValue={user.mobileNumber} />
                    </Col>
                </Form.Group>
                <Button onClick={()=>handleShow()} className="px-4 float-right" variant="primary">Update</Button>
            </Form>
            <PatientProfileUpdate show={show} handleClose={handleClose}></PatientProfileUpdate>
        </div>
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



export default connect(mapStateToProps, mapDispatchToProps)(PatientProfile);