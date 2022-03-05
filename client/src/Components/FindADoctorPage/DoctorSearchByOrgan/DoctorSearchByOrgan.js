import React, { useEffect, useState } from 'react';
import { Container, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { departments } from '../../../FakeData/departments';
import { departmentOrgan } from '../../../FakeData/depertmentOrgan';
import './DoctorSearchByOrgan.css'

const DoctorSearchByOrgan = ({setSelectedDept}) => {
    const [hospitalDepts, setHospitalDepts] = useState([]);
    useEffect(() => {
        setHospitalDepts([...departmentOrgan]);
    }, []);

    const handleDepartmentChange = e => {
        setSelectedDept(e);
    }
    return (
        <Container style={{backgroundColor : 'lightgray', height: '300px', backgroundSize : 'cover'}} className="d-flex mx-auto p-3 text-center mx-auto">
            <div className=" d-flex flex-wrap justify-content-center align-items-center">
            {
                hospitalDepts.map(dept => {
                    return (
                       <div onClick={()=>setSelectedDept(dept.deptName)} className="organ-image">
                           <img height={120} src={dept.depPic} key={dept.id} alt={dept.deptName}/>
                           <p>{dept.deptName}</p>
                       </div>
                    )
                })
            }
            </div>
                
        </Container>
    );
};

export default DoctorSearchByOrgan;