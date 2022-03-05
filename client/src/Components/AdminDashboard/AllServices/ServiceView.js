import React, { useEffect, useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceView = ({show, handleClose, id}) => {
    const [service, setService] = useState();

    // const {id} = useParams()
    console.log(id)

    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/service/'+id)
            .then(res => res.json())
            .then(data =>{ setService(data)
                
             })
    })
    // console.log(id)
   
    return (
        <Modal size="lg"
        aria-labelledby="contained-modal-title-center"
         show={show} onHide={handleClose} className="w-100">
            <Modal.Header closeButton>
            <Modal.Title>
                {/* <Image style={{height : '400px', width : '100%'}} src={service.serviceImage} alt="im"/> */}
                    
                {/* <h2>{id}</h2> */}
                {/* <h2>{service.serviceName}</h2> */}

            </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {/* {service.serviceDetails} */}
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" setId={[ ]} onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" setId={[ ]} onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ServiceView;