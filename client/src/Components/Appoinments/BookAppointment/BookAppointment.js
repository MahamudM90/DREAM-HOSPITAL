import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BookAppointment = ({date}) => {
    const history = useHistory();
    return (
        <section>
            <Container>
                <h1 className="text-center text-brand mb-5">Selected Date {date}</h1>
                {
                    <Button className="py-2 px-5 font-weight-bold display-2" style={{marginLeft : '45%'}} onClick={() => history.push('/appointment-details-root')} variant="primary">Proceed</Button>
                }
            </Container>
        </section>
    );
};

export default BookAppointment;