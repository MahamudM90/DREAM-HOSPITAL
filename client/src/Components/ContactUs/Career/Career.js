import { Rowing } from '@material-ui/icons';
import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import BusinessInfo from '../../Hompage/BusinessInfo/BusinessInfo';
import UserInteraction from '../../Hompage/UserInteraction/UserInteraction';


const Career = () => {
    const history = useHistory()
    return (
        <div className="bg-light">
        <div className="d-flex align-items-center justify-content-center" style={{backgroundImage : 'url("https://www.hollandhospital.org/uploads/public/images/slider_elements/hh/holland-hospital-careers-about.jpg"), linear-gradient(gray, gray)', backgroundSize : 'cover', height : '600px'}}>
            <h1 className="about-us font-weight-bold display-4">Career Select</h1>       
             
            {/*    */}
        </div>
        <div>
            <UserInteraction></UserInteraction>
        </div>
        <div>
            <Container>
                
                <div>
                    <h1 className="text-center text-success p-5">Do You want to Work With Us? <br/> Just Register or Send a mail </h1>
                    <div style={{width : '20%', margin : '5px auto'}}>
                        <Button onClick={()=> history.push('/contact')}>Send Mail</Button>
                        <Button onClick={()=> history.push('/combine-login')} className="ml-2">Register</Button>
                    </div>
                </div>
                <Row className="d-flex justify-content-between mt-5 mb-5">
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}}   src="https://image.freepik.com/free-vector/map-point-location-business-symbol-realistic-icon-polygonal-delivery-worldwide-truck-car-shipping-online-shopping-direction-city-address-position-pin-illustration_115739-884.jpg" />
                    </Col>
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}}  src="https://previews.123rf.com/images/artursz/artursz2004/artursz200417594/144661605-word-writing-text-where-are-you-business-photo-showcasing-give-us-your-location-address-direction-po.jpg" />
                    </Col>
                    <Col md={4}>
                        <Image style={{width : '100%', height : '270px'}}  src="https://tbsnews.net/sites/default/files/styles/big_2/public/images/2019/09/05/apollo-hospitals-tbs.jpg?itok=6XJDuHbT&timestamp=1585670883" />
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

export default Career;