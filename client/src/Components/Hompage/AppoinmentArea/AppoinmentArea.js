import React from 'react';
import { Button, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppoinmentArea = () => {
    return (
        <Container>
            <Jumbotron className="bg-transparent" style={{marginTop : '80px', marginBottom : '70px', padding: '0px'}}>
                    <Row className="d-flex align-items-center justify-content-between">
                        <Col md={5}>
                            <h1 className="display-5 font-weight-bold">Your New Smile <br/>Starts Here</h1>
                            <p className="text-secondary">
                            Hospitals are usually funded by public funding, health organisations (for profit or nonprofit), health insurance companies, or charities, including direct charitable donations. Historically, hospitals were often founded and funded by religious orders, or by charitable individuals and leaders
                            </p>
                            <Link to="/appointments">
                                <Button variant="primary" className="font-weight-bold">Get Appointment</Button>
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Image src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" fluid/>
                        </Col>
                    </Row>
            </Jumbotron>  
        </Container>
    );
};

export default AppoinmentArea;