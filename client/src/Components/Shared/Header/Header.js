import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import { connect } from 'react-redux';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';

const Header = ({user,addLoggedinUser}) => {
    const history = useHistory();
    const signOut = () =>{
        addLoggedinUser([])
    }

    const handleClick = (user) => {
        if(user.role === 'doctor'){
            history.push('/doctorportal');
        }
        else if(user.role === 'admin'){
            history.push('/adminportal');
        }
        else if(user.role === 'patient'){
            history.push('/patientportal');
        }
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <>
                    <Navbar.Brand><img style={{float: 'left', marginLeft : '15px'}}  width = "180px" height ="100px" src={logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end font-weight-bold" id="responsive-navbar-nav">
                  
                        <Nav className="ml-5  mt-5">
                            <Link className="mr-5 text-secondary" to="/"> Home </Link>
                            {/* <Link to="/about" className="mr-5">About Us</Link> */}
                            <NavDropdown title="About Us" id="collasible-nav-dropdown" className="mr-4 ml-0 text-primary" style={{marginTop: '-7px', color: 'blue'}}>
                                <NavDropdown.Item className="border-bottom py-3 "><Link to="/about">About Dream Hospital</Link></NavDropdown.Item>
                                <NavDropdown.Item className="border-bottom py-3 "><Link to="/mission">Our Vision/Mission</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Contact Us" id="collasible-nav-dropdown" className="mr-4 ml-0 text-primary" style={{marginTop: '-7px', color: 'blue'}}>
                                <NavDropdown.Item className="border-bottom py-3 "><Link to="/info">Hospital Contact Information</Link></NavDropdown.Item>
                                <NavDropdown.Item className="border-bottom py-3"><Link to="/contact">Send a Query</Link></NavDropdown.Item>
                                <NavDropdown.Item className="border-bottom py-3"><Link to="/career">Career</Link></NavDropdown.Item>
                            </NavDropdown>
                            
                            {/* <Link to="/contact" className="mr-5 text-secondary">Contact Us</Link> */}
                            <Link to="/find-doctor" className=" mr-4 text-secondary">Find a Doctor</Link>
                            <Link to="/appointments" className="mr-5 text-secondary">Get Appoinment</Link>
                            {/* <Link className="mr-5 text-secondary">Blog</Link> */}
                            {/* <Button onClick={handliClick} variant="danger" className="mr-2 font-weight-bold rounded px-lg-4">LogIn</Button> */}
                            { user.userEmail ? 
                            <Button style={{marginRight : '15px'}}  variant="danger" onClick={signOut} className="nav-link mr-2">Logout ({user.userName})</Button>
                            :
                            <Button style={{marginRight : '15px'}} variant="primary" as={Link} to={'/combine-login'} className="nav-link">Login</Button>}
                            { 
                                user.userEmail && 
                                <Button style={{marginRight : '15px'}}  onClick={()=> handleClick(user)}>Dashboard</Button>
                            
                            } 
                        </Nav>
                    </Navbar.Collapse>
                </>
            </Navbar>
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


export default connect(mapStateToProps,mapDispatchToProps)(Header);