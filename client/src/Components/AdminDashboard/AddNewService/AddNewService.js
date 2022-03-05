import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

const AddNewService = () => {

    const history = useHistory();
    const location = useLocation();


    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        const ServiceInfo = new FormData();
        ServiceInfo.append('serviceName', data.serviceName);
        ServiceInfo.append('serviceDetails', data.serviceDetails);
        ServiceInfo.append('serviceImage', data.serviceImage[0]);
        // doctorInfo.append('doctorCategory', data.doctorCategory);
        // doctorInfo.append('doctorImage', data.doctorImage[0]);
        // doctorInfo.append('userPassword', data.userPassword);
        // doctorInfo.append('role', 'doctor');

        fetch('https://floating-ocean-27822.herokuapp.com/addService',{
            method: 'POST',
            body: ServiceInfo
        })
        .then(res => res.json())
        .then(returnedData => {
            console.log(returnedData);
            history.replace(from);
        })
        .catch(err => console.log(err));

        data.value = ' '
    }
    return (
        <div className="" style={{textAlign: 'center', height : '700px',}}>

            <Container className="">
     
            <form className="rounded shadow p-5 border" style={{border : '1px solid #04020200', boxShadow : 'gray', marginTop : '80px', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-light">Add New Service</h2>

                <input className="form-control my-3 mt-4 p-3" type="text" name="serviceName" ref={register({ required: true,})} placeholder="Enter Service Name Name"/>           
                { errors?.serviceName && errors?.serviceName?.type === 'required' &&  <span className="text-danger">This field is required</span>}


                <textarea className="form-control my-3 p-3" style={{backgroundColor : '#E8F0FE'}}  rows={3}type="text" name="serviceDetails" ref={register({ required: true})} placeholder="Enter Service Details"/>           
                { errors?.serviceDetails && errors?.serviceDetails?.type === 'required' &&  <span className="text-danger">This field is required</span>}


                <input ref={register({ required: true})} name="serviceImage" className="form-control bg-transparent" placeholder="Upload Your Image" type="file" />
                {errors?.serviceImage && <span className="text-danger">This field is required</span>}


                <input type="submit" value="Add New Service" className="my-3 w-100 bg-primary py-1 rounded"/>
            </form>
            </Container>
        </div>
        // <div className="p-3 bg">
        //     <Form className="p-5 border rounded bg-light">
        //         <h2>Add New Service</h2>
        //         <Form.Group controlId="formGroupServiceName">
        //             <Form.Label>Service Name</Form.Label>
        //             <Form.Control type="text" name="serviceName" />
        //         </Form.Group>
        //         <Form.Group controlId="exampleForm.ControlTextarea1">
        //             <Form.Label>Service Details</Form.Label>
        //             <Form.Control as="textarea" rows={3} name="serviceDetails"/>
        //         </Form.Group>
        //         <Form.Group>
        //             <Form.File id="exampleFormControlFile1" name="serviceImage" className="form-control bg-transparent" placeholder="Upload Your Image" type="file"/>
        //         </Form.Group>
        //         <Button onClick="handleClick" variant="primary" type="submit">
        //             Add New Service
        //         </Button>
        //     </Form>
        // </div>
    );
};

export default AddNewService;