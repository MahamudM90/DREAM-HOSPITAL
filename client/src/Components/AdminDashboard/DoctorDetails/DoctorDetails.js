import React, { useEffect, useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';

const DoctorDetails = ({show, handleClose, id}) => {
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/doctors/'+id)
            .then(res => res.json())
            .then(data =>{setDoctor(data)
                
             })
    })
    console.log(doctor)
    return (
        <div>
            <Modal size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={show} onHide={handleClose} className="w-100">
            <Modal.Header closeButton>
            <Modal.Title style={{height : '400px', width : '100%', margin : '3px auto'}}>
                <Image style={{height : '300px', width : '300px', margin : '3px auto', borderRadius : '50%'}} src={doctor.doctorImage} alt="im"/>
                    
                <h2>{id}</h2>
            </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {doctor.userName}
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default DoctorDetails;