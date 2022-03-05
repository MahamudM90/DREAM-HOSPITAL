import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const BusinessInfo = () => {
    const businessInfo = [
        {
            title: 'Opeing Hours',
            description: 'We are open 7 days',
            icon: faClock,
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 3500, United States',
            icon: faMapMarkerAlt,
        },
        {
            title: 'Contact Us Now',
            description: '+880 1997412643',
            icon: faPhoneAlt,
        },
        {
            title: 'Subscribe Our Newsletter',
            description: `Sign Up`,
            icon: faEnvelope,
        }
    ];
    return (
        <section className="py-3 text-light" style={{marginBottom: '30px', backgroundColor : '#6ECBB8'}}>
            <Container>
                <Row>
                    {
                        businessInfo.map((info, idx) => 
                        <Col  md={3} key={idx} className="rounded text-center p-1 d-flex justify-content-center align-items-center border-left border-right">
                            <div style={{height : '130px'}} >
                                <div className=" text-center mt-2">
                                    <FontAwesomeIcon  icon={ info.icon } size="3x"/>
                                </div>
                                <div className="text-center">
                                    <h6 className="mt-2">{info.title}</h6>
                                    <small>{info.description}</small>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
            
        </section>
    );
};

export default BusinessInfo;