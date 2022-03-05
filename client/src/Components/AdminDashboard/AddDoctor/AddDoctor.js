
import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { departments } from '../../../FakeData/departments';

const AddDoctor = () => {
    const [hospitalDepts, setHospitalDepts] = useState([]);

    const onSubmit = data =>{
        console.log(data)
       
    } 

    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
        setHospitalDepts([...departments]);
    }, []);

    const handleDepartmentChange = e => {
        // setUser({...user, dept: e});
    }

    return (
        <div className="p-5">
            <h1>Add a doctor</h1>
            <form className="rounded shadow p-5 border mt-3" style={{ border : '1px solid #04020200', boxShadow : 'gray', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control my-3 mt-4 p-3" type="text" name="userName" ref={register({ required: true,})} placeholder="Enter Full Name"/>           
                { errors?.userName && errors?.userName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                <input className="form-control my-3 p-3" type="email" name="userEmail" ref={register({ required: true })} placeholder="Email"/>           
                {errors?.userEmail && <span className="text-danger">This field is required</span>}

                <input className="form-control my-3 p-3" type="text" name="hospitalName" ref={register({ required: true})} placeholder="Enter Hospital Name"/>           
                { errors?.hospitalName && errors?.hospitalName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                <DropdownButton
                    ref={register({ required: true})} 
                    name="category"
                    title="Select one..."
                    onSelect={handleDepartmentChange}
                    >
                        {
                            hospitalDepts.map(dept => <Dropdown.Item key={dept.id} eventKey={dept.deptName}>{dept.deptName}</Dropdown.Item>)
                        }
                </DropdownButton>
                {errors?.category && <span className="text-danger">This field is required</span>}
                <br/>

                <button className="btn btn-outline-success btn-block"><input ref={register({ required: true })} name="imageUpload" className="form-control bg-transparent" placeholder="Upload Your Image" type="file" /></button>
                {errors.imageUpload && <span className="text-danger">This field is required</span>}

                <input className="form-control my-3" type="text" name="userGender" ref={register({ required: true })} placeholder="Gender"/>           
                {errors?.userGender && <span className="text-danger">This field is required</span>}

                <input type="submit" value="Add Doctor" className="my-3 w-100 bg-primary py-1 rounded"/>
            </form>
        </div>
    );
};

export default AddDoctor;