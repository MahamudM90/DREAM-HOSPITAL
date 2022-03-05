import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

const AddAdmin = () => {
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data =>{
        data.role = 'admin';
        fetch('https://floating-ocean-27822.herokuapp.com/addAdmin',{
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

    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <div className="p-5">
            <h1>Add an Admin</h1>
            <form className="rounded shadow p-5 border mt-3" style={{ border : '1px solid #04020200', boxShadow : 'gray', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control my-3 mt-4 p-3" type="text" name="userName" ref={register({ required: true,})} placeholder="Enter Full Name"/>           
                { errors?.userName && errors?.userName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                <input className="form-control my-3 p-3" type="email" name="userEmail" ref={register({ required: true })} placeholder="Email"/>           
                {errors?.userEmail && <span className="text-danger">This field is required</span>}

                <input className="form-control my-3" type="number" name="userPhone" ref={register({ required: true })} placeholder="Mobile Number"/>           
                {errors?.userPhone && <span className="text-danger">This field is required</span>}


                <input className="form-control my-3" type="text" name="userGender" ref={register({ required: true })} placeholder="Gender"/>           
                {errors?.userGender && <span className="text-danger">This field is required</span>}

                <input className="form-control my-3" type="password" name="userPassword" ref={register({ required: true })} placeholder="Password"/>           
                {errors?.userPassword && <span className="text-danger">This field is required</span>}

                <input type="submit" value="Add Doctor" className="my-3 w-100 bg-primary py-1 rounded"/>
            </form>
        </div>
    );
};

export default AddAdmin;