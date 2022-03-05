import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import BusinessInfo from '../../Hompage/BusinessInfo/BusinessInfo';
import UserInteraction from '../../Hompage/UserInteraction/UserInteraction';
import './AboutDreamHospital.css';

const AboutDreamHospital = () => {
    return (
        <div className="bg-light">
        <div className="d-flex align-items-center justify-content-center" style={{backgroundImage : 'url("https://www.amzhospitalbd.com/uploads/hospital.jpg ")', backgroundSize : 'cover', height : '500px', backgroundPosition : 'center'}}>
            <h1 className="about-us font-weight-bold display-4">About Dream Hospital</h1>       
             
            {/*    */}
        </div>
        <div>
            <UserInteraction></UserInteraction>
        </div>
        <div>
            <Container>
                <h2 className="about-headline text-success my-5">World-class Care</h2>
                <p className="text-secondary display-5 mb-5">Founded in 1980, Bumrungrad International Hospital has been a global pioneer in providing world-class healthcare services and international patient support for nearly four decades. Located in the heart of Bangkok, Thailand, a cosmopolitan megacity nicknamed “The City of Angels” and renowned for its culture of exceptional hospitality and delicious cuisine. Bumrungrad is an internationally accredited, multi-specialty hospital listed on the Stock Exchange of Thailand since 1989. One of the largest private hospitals in Southeast Asia, Bumrungrad International Hospital cares for over 1.1 million patients from more than 190 countries annually.</p>
                <hr/>

                <h4 className="text-success">Milestone</h4>

                <hr/>
                <ul className="text-secondary mt-4">
                    <li>Opened 200 bed facility: September 17, 1980</li>
                    <li>Listed on the Stock Exchange of Thailand: 1989</li>
                    <li>Replacement hospital building commissioned: January 1, 1997</li>
                    <li>Opening of the Bumrungrad International Clinic Building: May 2008</li>
                    <li>Joint Commission International accreditation: Since February 2002</li>
                    <li>Global Healthcare Accreditation with Excellence: September 2017</li>
                </ul>
                <Row className="d-flex justify-content-between mt-5 mb-5">
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}}  src="https://www.healthcarefacilitiestoday.com/media/graphics/2018/18034-operating-room.jpg" />
                    </Col>
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hBiSdSzdDrmIgT144a84vdzCFPDNqjv_Yg&usqp=CAU" />
                    </Col>
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}} src="https://aquinahealth.com/wp-content/uploads/2018/09/Pulse_91918.jpeg" />
                    </Col>
                </Row>
                <br/>
                <hr/>

                <h4 className="text-success">Quality, Safety with Measurable Results</h4>

                <hr/>
                <div className="text-secondary mt-4">
                    <p className="text-secondary display-5 mb-5">Bumrungrad International Hospital is the first hospital in Asia accredited by the US-based Joint Commission International (JCI), achieving accreditation five consecutive times since 2002. In 2017, Bumrungrad also became the first hospital in Asia to be DNV GL MIR Certified for Infection Risk, and became the first non-US hospital to earn Global Healthcare Accreditation with Excellence designation from GHA, which signifies the highest international quality and safety standards for overseas patients traveling to Bumrungrad International Hospital for treatment and care. Through our consistent clinical standards and many international accreditations, Bumrungrad has demonstrated some of the highest clinical success rates and lowest infection rates in the region and world.</p>
                </div>
            </Container>
        </div>
        <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default AboutDreamHospital;