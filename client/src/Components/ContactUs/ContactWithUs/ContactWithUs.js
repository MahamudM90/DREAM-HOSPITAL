import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import BusinessInfo from '../../Hompage/BusinessInfo/BusinessInfo';
import UserInteraction from '../../Hompage/UserInteraction/UserInteraction';

const ContactWithUs = () => {
    return (
        <div className="bg-light">
            <div className="d-flex align-items-center justify-content-center" style={{backgroundImage : 'url("https://www.varanasihospital.com/wp-content/uploads/2015/10/Contact-Us_Banner1-1280x800.jpg")', backgroundSize : 'cover', height : '500px', backgroundPosition : 'center'}}>
                <h1 className="about-us font-weight-bold display-4">Contact Dream Hospital</h1>       
                
                {/*    */}
            </div>
            <div>
                <UserInteraction></UserInteraction>
            </div>
            <Container className="my-5 font-weight-bold">
            <Form className="border p-5 rounded shadow" style={{backgroundColor : '#00000026'}}>
                <h3 className="about-us text-center">Send Us Your Inquiry</h3>
                <Form.Row className="mt-5 font-weight-bold">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group> */}
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button style={{marginLeft: '40%'}} className="px-5 py-2" variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
            <BusinessInfo></BusinessInfo>
       
        </div>
    );
};

export default ContactWithUs;