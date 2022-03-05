import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { departments } from '../../../../FakeData/departments';
import { addLoggedinUser } from '../../../../Redux/Actions/PortalActions';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker
// } from '@material-ui/pickers';

const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const DoctorRegistration = ({user, addLoggedinUser}) => {
    const fixedOptions = [];
    const [value, setValue] = useState([...fixedOptions, days[0]]);

    const [selectedTime, setSelectedTime] = useState({
        startTime : new Date(),
        endTime : new Date()
    });

    const handleStartTime = (time) => {       
        setSelectedTime({...selectedTime, startTime : time});
      };

      const handleEndTime = (time) => {
        setSelectedTime({...selectedTime, endTime : time});
      };

    const [hospitalDepts, setHospitalDepts] = useState([]);
    const history = useHistory();
    const location = useLocation();


    let { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        console.log(data);
        const doctorInfo = new FormData();
        doctorInfo.append('userName', data.userName);
        doctorInfo.append('userEmail', data.userEmail);
        doctorInfo.append('hospitalName', data.hospitalName);
        doctorInfo.append('doctorCategory', data.doctorCategory);
        doctorInfo.append('doctorImage', data.doctorImage[0]);
        doctorInfo.append('availableDays', value);
        doctorInfo.append('startTime', timeSplit(selectedTime.startTime));
        doctorInfo.append('endTime', timeSplit(selectedTime.endTime));
        doctorInfo.append('userPassword', data.userPassword);
        doctorInfo.append('role', 'doctor');
        doctorInfo.append('verifyStatus', 'pending');

        fetch('https://floating-ocean-27822.herokuapp.com/addDoctor',{
            method: 'POST',
            body: doctorInfo
        })
        .then(res => res.json())
        .then(returnedData => {
            console.log(returnedData);
            addLoggedinUser(returnedData)
            history.push('/doctorportal')
        })
        .catch(err => console.log(err));
    } 

    useEffect(() => {
        setHospitalDepts([...departments]);
    }, []);

    const timeSplit = (data) => {
        const time = data.getHours() +':' + data.getMinutes() ;
        console.log(time);
        return time;
    }

    // console.log(selectedTime)

    return (
        <div className="" style={{textAlign: 'center', height : '800px', backgroundImage : 'url("https://wallpaperaccess.com/full/619974.jpg")', backgroundPosition : 'center center', backgroundSize :'cover'}}>

            <Container className="">   
            <form className="rounded shadow p-4 border float-right" style={{width: '450px', border : '1px solid #04020200', boxShadow : 'gray', marginTop : '80px', backgroundColor : '#343a4059'}} onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-light">Create a New Account</h2>

                <input className="form-control my-3 mt-4 p-3" type="text" name="userName" ref={register({ required: true,})} placeholder="Enter Full Name"/>           
                { errors?.userName && errors?.userName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                <input className="form-control my-3 p-3" type="email" name="userEmail" ref={register({ required: true })} placeholder="Email"/>           
                {errors?.userEmail && <span className="text-danger">This field is required</span>}

                <input className="form-control my-3 p-3" type="text" name="hospitalName" ref={register({ required: true})} placeholder="Enter Hospital Name"/>           
                { errors?.hospitalName && errors?.hospitalName?.type === 'required' &&  <span className="text-danger">This field is required</span>}

                <select
                    ref={register({ required: true})} 
                    name="doctorCategory"
                    defaultValue="Select one..."
                    className="form-control"
                    >
                        {
                            hospitalDepts.map(dept => <option key={dept.id} value={dept.deptName}>{dept.deptName}</option>)
                        }
                </select>
                {errors?.doctorCategory && <span className="text-danger">This field is required</span>}
                <br/>

                <input ref={register({ required: true})} name="doctorImage" className="form-control bg-transparent" placeholder="Upload Your Image" type="file" />
                {errors?.doctorImage && <span className="text-danger">This field is required</span>}

                

                <Autocomplete
                    className="my-3"
                    multiple
                    value={value}
                    onChange={(event, newValue) => {
                        setValue([
                        ...fixedOptions,
                        ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                        ]);
                    }}
                    options={days}
                    getOptionLabel={(option) => option}
                    renderTags={(tagValue, getTagProps) =>
                        tagValue.map((option, index) => (
                        <Chip
                            label={option}
                            {...getTagProps({ index })}
                            disabled={fixedOptions.indexOf(option) !== -1}
                        />
                        ))
                    }
                    style={{ width: '100%' }}
                    renderInput={(params) => (
                        <TextField {...params} label="Available Days" variant="outlined" placeholder="Select Another Days" />
                    )}
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardTimePicker
                            style={{width : '50%', float : 'left'}}
                            margin="normal"
                            id="start-time-picker"
                            label="Start Time"
                            value={selectedTime.startTime}
                            onChange={handleStartTime}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                            <KeyboardTimePicker
                            style={{width : '50%', float : 'left'}}
                            margin="normal"
                            id="end-time-picker"
                            label="End Time"
                            value={selectedTime.endTime}
                            onChange={handleEndTime}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                        </Grid>
                        </MuiPickersUtilsProvider>

                        <input className="form-control my-3" type="password" name="userPassword" ref={register({ required: true })} placeholder="Password"/>           
                        {errors?.userPassword && <span className="text-danger">This field is required</span>}


                <input type="submit" value="Sign Up" className="my-3 w-100 bg-primary py-1 rounded"/>
            </form>
            </Container>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        state : state.state
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}



export default connect(mapStateToProps,mapDispatchToProps)(DoctorRegistration);