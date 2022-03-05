import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentContainer = ({date, handleChangeDate}) => {
    return (
        <>
            <Container>
                <Row style={{height: '500px'}} className="d-flex align-items-center justify-content-between">
                    <Col md={5}>
                        <h1 className="display-5 font-weight-bold">Select Date</h1>
                        <div className="mt-5">
                            <Calendar onChange={handleChangeDate} value={new Date(date)} className="rounded shadow p-3"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Image src="https://www.varanasihospital.com/wp-content/uploads/2015/10/Contact-Us_Banner1-1280x800.jpg" fluid/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AppointmentContainer;