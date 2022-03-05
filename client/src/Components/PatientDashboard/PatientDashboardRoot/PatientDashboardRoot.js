import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';

const PatientDashboardRoot = ({user, addLoggedinUser}) => {

    console.log(user)

    return (
        <div>
            <h1>Dashboard</h1>
            <Container>
                {/* <h3>Dashboard</h3> */}
                <Row className="p-3">
                    <Col md={4}>
                        <div className="p-3">
                            <Row className="bg-secondary px-4 py-5 text-white rounded align-items-center"> 
                                <Col md={4}>
                                    <h6>Your Profile</h6>
                                </Col>
                                <Col md={4}>
                                    <p>Appointments <br/> Pending</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-3">
                            <Row className="bg-info px-4 py-5 text-white rounded align-items-center"> 
                                <Col md={4}>
                                    <h6>Your Profile</h6>
                                </Col>
                                <Col md={4}>
                                    <p>Appointments <br/> Pending</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-3">
                            <Row className="bg-success px-4 py-5 text-white rounded align-items-center"> 
                                <Col md={4}>
                                    <h6>Your Profile</h6>
                                </Col>
                                <Col md={4}>
                                    <p>Appointments <br/> Pending</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    
                </Row>
                <Row className="p-3">
                <Col md={4}>
                        <div className="p-3">
                            <Row className="bg-warning px-4 py-5 text-white rounded align-items-center"> 
                                <Col md={4}>
                                    <h6>Your Profile</h6>
                                </Col>
                                <Col md={4}>
                                    <p>Appointments <br/> Pending</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-3">
                            <Row className="bg-danger px-4 py-5 text-white rounded align-items-center"> 
                                <Col md={4}>
                                    <h6>Your Profile</h6>
                                </Col>
                                <Col md={4}>
                                    <p>Appointments <br/> Pending</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-3">
                            <Row className="bg-primary px-4 py-5 text-white rounded align-items-center"> 
                                <Col md={4}>
                                    <h6>Your Profile</h6>
                                </Col>
                                <Col md={4}>
                                    <p>Appointments <br/> Pending</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    
                    
                </Row>
            
            </Container>
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

export default connect(mapStateToProps)(PatientDashboardRoot);