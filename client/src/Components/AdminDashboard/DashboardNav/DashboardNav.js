import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faChartLine, faCalendarCheck, faProcedures, faFileAlt, faCog, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
// import AdminAppointments from '../AdminAppointments/AdminAppointments';
import AdminDashboardRoot from '../AdminDashboardRoot/AdminDashboardRoot';
import AdminAllAppoinments from '../AdminAllAppoinments/AdminAllAppoinments';
import AdminProfile from '../AdminProfile/AdminProfile';
import AddDoctor from '../AddDoctor/AddDoctor';
import AvailableDoctors from '../AvailableDoctors/AvailableDoctors';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddNewService from '../AddNewService/AddNewService';
import AllServices from '../AllServices/AllServices';
import { connect } from 'react-redux';
// import { handleSignOut } from './signOutManager';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';
import AllPatients from '../AllPatients/AllPatients';
import PendingDoctors from '../PendingDoctors/PendingDoctors';

const DashboardNav = ({user, addLoggedinUser}) => {
    const signOut = () => {
        addLoggedinUser([])
    }

    return (
        <>
        <Tab.Container  id="left-tabs-example" defaultActiveKey="dashboard">
            <Row className="min-vh-100 pb-5">
                <Col className="bg-warning px-5" sm={3}>
                    <Nav variant="pills" className="font-weight-bold flex-column text-white">
                        {/* {
                            user.email &&
                            <Nav.Item>
                                Siged in as: <br/> {user.email}
                            </Nav.Item>
                        } */}
                        <Row className="mt-5 ml-2  mb-3">
                            <Col md={5}>
                            <FontAwesomeIcon className="mr-2 border p-4 rounded-pill bg-secondary" icon={faUser} size="6x"/>
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
                            <Nav.Link className="text-white" eventKey="appointments"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Appointments Book</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="patients"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Patients Book</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="add-doctor"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Add Doctor</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="doctors-available"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Available Doctors</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="doctors-pending"><FontAwesomeIcon className="mr-2" icon={faCalendarCheck} />Pending Doctors</Nav.Link>
                        </Nav.Item>
                        
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="prescriptions"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Prescriptions</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="add-admin"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Add Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="services"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" eventKey="add-service"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Add New Service</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="corona-patient"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Corona Patients List</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="corona-vaccine"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Corona Vaccine List</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="new-corona-patient"><FontAwesomeIcon className="mr-2" icon={faFileAlt} />Add New Corona Patient</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="add-outbreaks"><FontAwesomeIcon className="mr-2" icon={faProcedures} />Add Outbreaks</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="text-white" eventKey="likely-outbreaks"><FontAwesomeIcon className="mr-2" icon={faProcedures} />Likely Outbreaks</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link eventKey="settings" disabled><FontAwesomeIcon className="mr-2" icon={faCog} />Settings</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link eventKey="password" disabled><FontAwesomeIcon className="mr-2" icon={faCog} />Change Password</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link onClick={signOut} className="text-white  mb-5" eventKey="signout"><FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="dashboard">
                        <AdminDashboardRoot/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="profile">
                        <AdminProfile />
                    </Tab.Pane>
                    <Tab.Pane eventKey="appointments">
                        <AdminAllAppoinments />
                    </Tab.Pane>
                    <Tab.Pane eventKey="patients">
                        <AllPatients />
                    </Tab.Pane>
                    <Tab.Pane eventKey="add-doctor">
                        <AddDoctor />
                    </Tab.Pane>
                    <Tab.Pane eventKey="add-admin">
                        <AddAdmin />
                    </Tab.Pane>
                    <Tab.Pane eventKey="doctors-available">
                        <AvailableDoctors />
                    </Tab.Pane>
                    <Tab.Pane eventKey="doctors-pending">
                        <PendingDoctors />
                    </Tab.Pane>
                    <Tab.Pane eventKey="add-service">
                        <AddNewService />
                    </Tab.Pane>
                    <Tab.Pane eventKey="services">
                        <AllServices />
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="patients">
                        <h1>This is patients</h1>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="prescriptions">
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav);