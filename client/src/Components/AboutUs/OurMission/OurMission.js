import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import BusinessInfo from '../../Hompage/BusinessInfo/BusinessInfo';
import UserInteraction from '../../Hompage/UserInteraction/UserInteraction';

const OurMission = () => {
    return (
        <div className="bg-light">
        <div className="d-flex align-items-center justify-content-center" style={{backgroundImage : 'url("https://media.glamour.com/photos/56957a198fa134644ec21f64/master/w_1500,h_1004,c_limit/entertainment-2014-02-16-greys-anatomy-main.jpg"), linear-gradient(gray, gray)', height : '700px'}}>
            <h1 className="about-us font-weight-bold display-4">Our Mission & Vision</h1>       
             
            {/*    */}
        </div>
        <div>
            <UserInteraction></UserInteraction>
        </div>
        <div>
            <Container>
                <h4 className="text-success mt-5">Our Vision/Mission and Values</h4>
                <hr/>
                <h4 className="text-success">Vision</h4>

                <hr/>
                <div className="text-secondary mt-4">
                    <p>SevenHills Group has over two decades of experience in the healthcare sector, providing quality healthcare and valuable experience, supported by a team of compassionate and dedicated medical professionals.</p>
                </div>

                
                <hr/>
                <h4 className="text-success">Mission</h4>

                <hr/>
                <div className="text-secondary mt-4">
                    <p>To deliver innovative clinical and service experiences, accomplish operational excellence and establish transdisciplinary care team with quality and humanized care.  .</p>
                </div>

                
                <hr/>
                <h4 className="text-success">CORE VALUES</h4>

                <hr/>
                <div className="text-secondary mt-4">
                    <ul>
                        <li>Agility</li>
                        <li>Innovation</li>
                        <li>Caring</li>
                    </ul>
                </div>

                <Row className="d-flex justify-content-between mt-5 mb-5">
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}}   src="https://media.glamour.com/photos/56957a198fa134644ec21f64/master/w_1500,h_1004,c_limit/entertainment-2014-02-16-greys-anatomy-main.jpg" />
                    </Col>
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}}  src="https://www3.ha.org.hk/ehaslink/issue106/images/fe-02-01.png" />
                    </Col>
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}}  src="https://www.hopkinsmedicine.org/sebin/n/m/BabyCard1b.jpg" />
                    </Col>
                </Row>
                <br/>
                <hr/>

                <h4 className="text-success">Patient and Staff Safety Statement</h4>

                <hr/>
                <div className="text-secondary mt-4">
                    <p className="text-secondary display-5 mb-5">Everyone at Bumrungrad Hospital PCL has responsibility for the safety of our patients and staff. The Hospital Governing Board has the overall responsibility of directing the commitment to safety. The Executive and Management teams have the responsibility to oversee, guide and implement the safety programs at Bumrungrad; however, everyone at Bumrungrad is responsible for safety. Safety is a team effort that is at the core of our business and central to our success and competitiveness.</p>
                    <p className="mt-2">We Believe that :</p>
                    <ol>
                        <li>Safety shall never be compromised</li>
                        <li>All errors are preventable.</li>
                        <li>Nothing is more important to Bumrungrad than the safety of our patients and our staff.</li>
                    </ol>
                </div>
            </Container>
        </div>
        <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default OurMission;