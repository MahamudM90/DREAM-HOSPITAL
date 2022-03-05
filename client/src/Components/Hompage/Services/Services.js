import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import './Services.css'
import { Carousel, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Services = () => {
    const [services, setServices] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      useEffect(() => {
         fetch('https://floating-ocean-27822.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
      },[])
    
      console.log(services);
      

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <section className="d-flex align-items-center">
            <Container>
                <div className="text-center">
                    <h3  style={{ color: '#00594d', fontSize: '35px'}} className="headline mt-3 mb-3">Our Specialty Centers</h3>
                </div>
                <Slider {...settings} className="mt-5 bg-white mb-5" activeIndex={index} onSelect={handleSelect}>
                    {
                        services.map((service, idx )=> 
                                <Row className="d-flex align-items-center justify-content-center">
                                    <Col md={6}>
                                        <Image style={{height : '400px', width : '100%'}} src={service.serviceImage} alt="im"/></Col>
                                    <Col md={6}>
                                        <h3 style={{ color : '#17B995'}} className="mt-4 text-left">{service.serviceName}</h3>
                                        <hr style={{width : '20%', marginLeft: '0px', backgroundColor : '#d1c398', height : '2px'}}/>
                                        <p className="mt-2 mr-2 text-secondary">{service.serviceDetails}</p>
                                    </Col>
                                </Row>

                            )
                    }
                </Slider>
            
            </Container>
        </section>
    );
};

export default Services;