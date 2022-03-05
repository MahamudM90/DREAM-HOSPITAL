import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fakeDoctors } from '../../../FakeData/fakeDoctors';
import FindDoctorCard from '../FindDoctorCard/FindDoctorCard';

const DoctorContainer = ({selectedDept}) => {

    const [doctors, setDoctor] = useState([]);

    const [filterByDeptDoctors, setFilterByDeptDoctors] = useState([]);

    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/doctors')
       .then(res => res.json())
       .then(data => setDoctor(data))
     },[])

    useEffect(() => {
        const filteredDocs = doctors.filter(doctor => doctor.doctorCategory === selectedDept);
        setFilterByDeptDoctors(filteredDocs);
    },[selectedDept])

    return (
        <Container className="d-flex flex-wrap justify-content-between mt-5">
            {
                filterByDeptDoctors.map(selectedDoc => <FindDoctorCard key={selectedDoc.id} selectedDoc={selectedDoc}></FindDoctorCard>)
            }
        </Container>
    );
};

export default DoctorContainer;