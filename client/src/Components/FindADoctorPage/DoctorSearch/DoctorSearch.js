import React, { useEffect, useState } from 'react';
import { Container, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { departments } from '../../../FakeData/departments';

const DoctorSearch = ({setSelectedDept}) => {

    const [hospitalDepts, setHospitalDepts] = useState([]);
    useEffect(() => {
        setHospitalDepts([...departments]);
    }, []);

    const handleDepartmentChange = e => {
        setSelectedDept(e);
    }

    return (
        <Container style={{backgroundImage : 'url("https://img.freepik.com/free-photo/close-up-doctor-front-bright-background_53419-4416.jpg?size=626&ext=jpg")', height: '300px', backgroundSize : 'cover'}} className="d-flex mx-auto p-3 align-items-center">
            <Form.Group style={{width: '200px', margin : '30px auto'}}>
                <Form.Label>Search by departments</Form.Label>
                <DropdownButton
                    size="lg"
                    title="Departments..."
                    onSelect={handleDepartmentChange}
                    >
                        {
                            hospitalDepts.map(dept => <Dropdown.Item key={dept.id} eventKey={dept.deptName}>{dept.deptName}</Dropdown.Item>)
                        }
                </DropdownButton>
            </Form.Group>
        </Container>
    );
};

export default DoctorSearch;