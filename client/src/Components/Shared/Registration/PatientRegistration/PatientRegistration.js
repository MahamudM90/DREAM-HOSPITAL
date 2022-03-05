import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

const PatientRegistration = () => {

    const history = useHistory();
    const location = useLocation();


    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        data.role = 'patient';
        fetch('https://floating-ocean-27822.herokuapp.com/addPatient',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(returnedData => {
            console.log(returnedData);
            history.push('/patientportal')
        })
        .catch(err => console.log(err));
    }
    return (
        <div className="log-in align-items-center" style={{textAlign: 'center', height : '700px'}}>
            <div className="d-flex align-items-center justify-content-center text-center">
     
                <form style={{width: '450px', border : '1px solid #04020200', boxShadow : 'gray', marginTop : '90px', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)} className="rounded shadow p-4 border">
                    <h2 className="text-light">Create a New Account</h2>

                    <input className="form-control my-3 p-3 mt-4" type="text" name="userName" ref={register({ required: true,})} placeholder="Enter Full Name"/>           
                    { errors?.userName && errors?.userName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                    <input className="form-control my-3 p-3" type="email" name="userEmail" ref={register({ required: true })} placeholder="Email"/>           
                    {errors?.userEmail && <span className="text-danger">This field is required</span>}

                    {/* <input className="form-control my-3 p-3" type="text" name="userGender" ref={register({ required: true })} placeholder="Gender"/>           
                    {errors?.userGender && <span className="text-danger">This field is required</span>} */}
                    
                    <fieldset className="d-flex justify-content-between align-items-start bg-white text-left px-3 py-2">
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

                    <input className="form-control my-3 p-3" type="tel" name="mobileNumber"
                    ref={register({
                        required: "This input is required.",
                        pattern: {
                          value: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                          message: "Only Bangladeshi Number is required"
                        }
                      })} placeholder="Mobile Number"/> 
                        <ErrorMessage errors={errors}        name="multipleErrorInput">
                            {({ messages }) => {
                            console.log(messages);
                            return (
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                <p className="text-danger" key={type}>{message}</p>
                                ))
                            );
                            }}
                        </ErrorMessage>          
                    {/* {errors?.mobileNumber === "required" && <span className="text-danger">This field is required</span>}
                    {errors?.mobileNumber === "pattern" && <span className="text-danger">Must be a Bangladeshi Number</span>} */}
                    {/* /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/ */}

                    <input className="form-control my-3 p-3" type="password" name="userPassword" ref={register({ required: true })} placeholder="Password"/>           
                    {errors?.userPassword && <span className="text-danger">This field is required</span>}

                    <input type="submit" value="Sign Up" className="my-3 w-100 bg-primary py-1 rounded"/>
                </form>
            </div>  
        </div>
    );
};

export default PatientRegistration;