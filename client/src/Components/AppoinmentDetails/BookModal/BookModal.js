import React, { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, FormControl, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { departments } from '../../../FakeData/departments';
import { fakeDoctors } from '../../../FakeData/fakeDoctors';

const BookModal = (props) => {
    const onHide = () => {
        props.onHide();
    }

    const history = useHistory();
    const location = useLocation();


    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();


    const [selectedDept, setSelectedDept] = useState('');
    const [hospitalDepts, setHospitalDepts] = useState([]);


    useEffect(() => {
        setHospitalDepts([...departments]);
    }, []);


    const handleDepartmentChange = e => {
        setSelectedDept(e);
    }
    

    const [patientDetails, setPatientDetails] = useState({
        patientName: '',
        email: '',
        phone: '',
        department: '',
        doctorName : ''
    })  
    
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
    // console.log(filterByDeptDoctors)


    const onSubmit = data =>{
        data.role = 'patient';
        data.status = 'new';
        fetch('https://floating-ocean-27822.herokuapp.com/addAppointments',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(returnedData => {
            console.log(returnedData);
            history.replace(from);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-center"
            centered>
               <Modal.Header closeButton>
                    <Modal.Title className="text-center">Appointment Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="p-5">
                        <form className="rounded shadow p-5 border" style={{ border : '1px solid #04020200', boxShadow : 'gray', marginTop : '10px', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)}>

                            <input className="form-control my-3 mt-4 p-3" type="text" name="userName" ref={register({ required: true,})} placeholder="User Full Name"/>           
                            { errors?.userName && errors?.userName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                            <input className="form-control my-3 mt-4 p-3" type="text" name="patientName" ref={register({ required: true,})} placeholder="Patient Full Name"/>           
                            { errors?.patientName && errors?.patientName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                            <input className="form-control my-3 p-3" type="email" name="userEmail" ref={register({ required: true })} placeholder="Email"/>           
                            {errors?.userEmail && <span className="text-danger">This field is required</span>}

                            <input className="form-control my-3 p-3" type="number" name="phoneNo" ref={register({ required: true})} placeholder="Enter Your Mobile Number"/>           
                            { errors?.phoneNo && errors?.phoneNo?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                            {/* <input className="form-control my-3 p-3" type="text" name="userGender" ref={register({ required: true})} placeholder="Gender"/>           
                            { errors?.userGender && errors?.userGender?.type === 'required' &&  <span className="text-danger">This field is required</span>} */}

                            <fieldset className="d-flex justify-content-between align-items-start bg-white text-left px-3 py-2 my-3">
                                Gender :
                                <div>
                                    <input type="radio" id="male" name="userGender" value="male" ref={register({ required: true })}/>
                                    <label className="mx-1"  for="male"> Male</label> 
                                </div>
                                <div>
                                    <input type="radio" id="female" name="userGender" value="female" ref={register({ required: true })}/>
                                    <label className="mx-1" for="female"> Female</label>
                                </div>
                                <div>
                                    <input type="radio" id="other" name="userGender" value="other" ref={register({ required: true })}/>
                                    <label className="mx-1" for="other"> Other</label>
                                </div>
                            </fieldset>

                            <DropdownButton
                                className="bg-light py-2 rounded"
                                size="sm"
                                title="Departments..."
                                onSelect={handleDepartmentChange} 
                                onChange={e => { setPatientDetails({...patientDetails, department: e.target.value})}}
                                >
                                    {
                                        hospitalDepts.map(dept => <Dropdown.Item key={dept.id} eventKey={dept.deptName}>{dept.deptName}</Dropdown.Item>)
                                    }
                            </DropdownButton>
                            {errors?.doctorCategory && <span className="text-danger">This field is required</span>}
                            <br/>

                            <select
                                ref={register({ required: true})} 
                                name="doctorName"
                                defaultValue="Select one..."
                                className="form-control"
                                >
                                    {
                                        filterByDeptDoctors.map(doctor => <option key={doctor._id} value={doctor.userName}>{doctor.userName}</option>)
                                    }
                            </select>
                            {errors?.doctorName && <span className="text-danger">This field is required</span>}
                            <br/>

                            <input type="submit" value="Book an Appointment" className="my-3 w-100 bg-primary py-1 rounded"/>

                        </form>
                    </div>
                 </Modal.Body>


                <Modal.Footer>
                 </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookModal;