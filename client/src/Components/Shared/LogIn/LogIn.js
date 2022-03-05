import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './LogIn.css'
import { connect } from 'react-redux';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';

const LogIn = ({user, addLoggedinUser}) => {

    const [admins, setAdmin] = useState([]);
    const [patients, setPatient] = useState([]);
    const [doctors, setDoctors] = useState([]);

    // console.log(admins)
    // console.log(patients)
    // console.log(doctors)

    useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/admins')
       .then(res => res.json())
       .then(data => setAdmin(data))
     },[])

     useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/patients')
       .then(res => res.json())
       .then(data => setPatient(data))
     },[])

     useEffect(() => {
        fetch('https://floating-ocean-27822.herokuapp.com/doctors')
       .then(res => res.json())
       .then(data => setDoctors(data))
     },[])

    const history = useHistory();
    const location = useLocation();


    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        console.log(data);

        const currentAdmin = admins.find((admin) => admin.userEmail.toString() === data.email.toString() && admin.userPassword.toString() === data.password.toString());

        const currentPatient = patients.find((patient) => patient.userEmail.toString() === data.email.toString() && patient.userPassword.toString() === data.password.toString());


        const currentDoctor = doctors.find((doctor) => doctor.userEmail.toString() === data.email.toString() && doctor.userPassword.toString() === data.password.toString());

        // console.log(currentDoctor)
        // console.log(currentPatient)
        // console.log(currentAdmin)

        if(currentDoctor){
            addLoggedinUser(currentDoctor)
            // history.push('/doctorportal')
            history.replace(from);
        }
        else if(currentPatient){
            addLoggedinUser(currentPatient)
            // history.push('/patientportal')
            history.replace(from);
        }
        else if(currentAdmin) {
            addLoggedinUser(currentAdmin)
            // history.push('/adminportal')
            history.replace(from);
        }
        else{
            console.log('wrong password')
        }


    }

    return (
        <div style={{height: '600px'}} className="log-in align-items-center">
            
                <div className="d-flex align-items-center justify-content-center text-center">
                    <form style={{width: '450px', border : '1px solid #04020200', boxShadow : 'gray', marginTop : '80px', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)} className="rounded shadow p-4 border">
                        <h1 className="text-center text-white">Login</h1>
                        <input className="w-100 my-3 rounded p-2" name="email" type="email" placeholder="Enter Your Email" refname="email" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                     

                        <input className="w-100 my-3 rounded p-2" type="password" name="password" placeholder="Enter your password" refname="password" ref={register({ required: true })} />
                
                        {errors.password && <span>This field is required</span>}
                        <p className="text-danger"><Link className="text-white">Forget PassWord?</Link></p>
                        <br/>
                        <input type="submit" className="my-1 w-100 bg-primary py-1 rounded" />
                        <p className="text-white font-weight-bold">Don't have an account?</p>

                        <Button onClick={() => history.push('/doctor-registration')} className=" float-left" variant="primary"> <FontAwesomeIcon  icon={faUser}/> Register As a Doctor</Button>
                        <Button onClick={() => history.push('/patient-registration')} className=" float-right" variant="success"> <FontAwesomeIcon  icon={faUser}/> Register As a Patient</Button>
                        
                    </form>
                    
                </div>
                
                
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn);