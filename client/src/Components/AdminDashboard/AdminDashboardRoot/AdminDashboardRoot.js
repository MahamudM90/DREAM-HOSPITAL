import { faCalendar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { fakePatients } from '../../../FakeData/patients';

const AdminDashboardRoot = () => {
    const patients = fakePatients.slice(0);
    return (
        <>
        <Container>
            <h3>Dashboard</h3>
            <Row className="p-3">
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-secondary px-2 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                                <h3>Update your Profile</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Appointments <br/> Pending</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-warning px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                            <h3>Add New Doctor</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Today's <br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-4">
                        <Row className="bg-success px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={5}>
                                <h1>{patients.length}</h1>
                            </Col>
                            <Col md={5}>
                                <p>Total<br/> Apponitments</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                
            </Row>
            <Row className="p-3">
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-info px-4 py-5 text-white rounded align-items-center"> 
                        <Col md={10}>
                                <h3>Remove any Doctor</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Total<br/> Patients</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-warning px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                            <h3>Check patients Book</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Today's <br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-success px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                                <h3>Check all services</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Total<br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                
            </Row>
            <Row className="p-3">
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-warning px-4 py-5 text-white rounded align-items-center"> 
                        <Col md={4}>
                                <h1>{patients.length}</h1>
                            </Col>
                            <Col md={4}>
                                <p>Total<br/> Patients</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-primary px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                            <h3>Add New Service</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Today's <br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-3">
                        <Row className="bg-success px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                                <h3>Check Corona Patient List</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Total<br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                
            </Row>
            <Row className="p-3">
                <Col md={4}>
                    <div className="p-3">
                    <Row className="bg-success px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                                <h3>Add New Corona Patient</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Total<br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-3">
                    <Row className="bg-info px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                                <h3>Check all Outbreaks</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Total<br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="p-3">
                    <Row className="bg-secondary px-4 py-5 text-white rounded align-items-center"> 
                            <Col md={10}>
                                <h3>Add new Outbreaks</h3>
                            </Col>
                            {/* <Col md={4}>
                                <p>Total<br/> Apponitments</p>
                            </Col> */}
                        </Row>
                    </div>
                </Col>
                
            </Row>
           
        </Container>
            
        </>
    );
};

export default AdminDashboardRoot;