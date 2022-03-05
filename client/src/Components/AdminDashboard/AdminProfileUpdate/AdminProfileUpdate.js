import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';

const AdminProfileUpdate = ({user, addLoggedinUser, show, handleClose}) => {
    
 
    return (
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
         show={show} onHide={handleClose} className="w-100">
                    <Modal.Header closeButton>
                    <Modal.Title>Update Your Profile</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                        {/* <div className="px-5 py-5 font-weight-bold"> */}
                        <h2>Admin Profile</h2>
                        <Form className="border p-5 mt-3 font-weight-bold">
                        <Form.Group as={Row} controlId="formPlaintextName">
                        <Form.Label column sm="2" >
                        Name :
                        </Form.Label>
                        <Col sm="10" md="10">
                        <Form.Control className="px-3 rounded" type="text"   defaultValue={user.userName} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email :
                        </Form.Label>
                        <Col sm="10" md="10">
                        <Form.Control className="px-3 rounded" type="email"   defaultValue={user.userEmail} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextRole">
                        <Form.Label column sm="2">
                        Role :
                        </Form.Label>
                        <Col sm="10" md="10">
                        <Form.Control className="px-3 rounded" type="text" plaintext readOnly   defaultValue={user.role} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextGender">
                        <Form.Label column sm="2">
                        Gender :
                        </Form.Label>
                        <Col sm="10" md="10">
                        <Form.Control className="px-3 rounded" type="text" plaintext readOnly   defaultValue={user.userGender}/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPhone">
                        <Form.Label column sm="2">
                        Phone :
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control className="px-3 rounded" type="text"   defaultValue={user.userPhone}/>
                        </Col>
                        </Form.Group>
                        </Form>
                        {/* </div> */}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfileUpdate);