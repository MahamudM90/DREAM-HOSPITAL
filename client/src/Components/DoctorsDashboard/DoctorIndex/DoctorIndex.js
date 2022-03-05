import React from 'react';
import { connect } from 'react-redux';
import { addLoggedinUser } from '../../../Redux/Actions/PortalActions';
import DoctorDashboardNav from '../DoctorDashboardNav/DoctorDashboardNav';

const DoctorIndex = ({user}) => {
    return (
        <>
            {
                user.verifyStatus === 'pending' ? 
                    <><h1 className="text-center display-1 text-danger font-weight-bold">Your Request is Pending. Please wait for admin confirmation !!</h1></> 
                    :
                    <DoctorDashboardNav></DoctorDashboardNav>

            }
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorIndex);