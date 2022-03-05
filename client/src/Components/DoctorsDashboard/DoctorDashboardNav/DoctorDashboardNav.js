import { faCalendarCheck, faChartLine, faCog, faFileAlt, faProcedures, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';
import DoctorProfile from '../DoctorProfile/DoctorProfile';
import DoctorDashboardRoot from '../DoctorsDashboardRoot/DoctorDashboardRoot';
import DoctorsPatients from '../DoctorsPatients/DoctorsPatients';
import OldAppointments from '../OldAppointments/OldAppointments';

const DoctorDashboardNav = ({user, addLoggedinUser}) => {
    const signOut = () => {
        // handleSignOut()
        // .then(res => {
        //     addLoggedinUser(res);
        // })
    }
    return (
        <>
        <Tab.Container  id="left-tabs-example" defaultActiveKey="dashboard">
            <Row className="min-vh-100 pb-5">
                <Col className="bg-secondary px-5" sm={3}>
                    <Nav variant="pills" className="font-weight-bold flex-column text-white">
                        {/* {
                            user.email &&
                            <Nav.Item>
                                Siged in as: <br/> {user.email}
                            </Nav.Item>
                        } */}
                        <Row className="mt-5 ml-2  mb-3">
                            <Col md={5}>
                            <FontAwesomeIcon className="mr-2 border p-4 rounded-pill bg-warning" icon={faUser} size="6x"/>
                            </Col>
                            <Col md={7} className="mt-3">
                                <h7 className="text-danger"> {user.userName}</h7>
                                <p>{user.role}</p>
                            </Col>
                        </Row>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="dashboard"><FontAwesomeIcon className="mr-2" icon={faChartLine} />Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="profile"><FontAwesomeIcon className="mr-2" icon={faUser} />Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="appointments"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Remaining Patient </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="old-appointments"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Old Patient</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="add-doctor"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Add Doctor</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="doctors-record"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Doctor's Record</Nav.Link>
                        </Nav.Item> */}
                        
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="prescriptions"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Prescriptions</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="add-admin"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Add Admin</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="corona-patient"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Corona Patients List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="corona-vaccine"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Corona Vaccine List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="new-corona-patient"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Add New Corona Patient</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="add-outbreaks"><FontAwesomeIcon className="mr-2" icon={faProcedures} />Add Outbreaks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="likely-outbreaks"><FontAwesomeIcon className="mr-2" icon={faProcedures} />Likely Outbreaks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="settings"><FontAwesomeIcon className="mr-2" icon={faCog} />Settings</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link eventKey="password"><FontAwesomeIcon className="mr-2" icon={faCog} />Change Password</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link onClick={signOut} className="text-white  mb-5" eventKey="signout"><FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="dashboard">
                        <DoctorDashboardRoot/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="profile">
                        <DoctorProfile />
                    </Tab.Pane>
                    <Tab.Pane eventKey="appointments">
                        <DoctorsPatients/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="add-doctor">
                        {/* <AddDoctor /> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="old-appointments">
                        <OldAppointments />
                    </Tab.Pane>
                    <Tab.Pane eventKey="patients">
                        <h1>This is patients</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="prescriptions">
                        <h1>This is prescriptions</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="add-admin">
                        <h1>This is prescriptions</h1>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
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


export default connect(mapStateToProps, mapDispatchToProps)(DoctorDashboardNav);