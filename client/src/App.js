import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CombineLogIn from './Components/CombineLogIn/CombineLogIn';
import HomePageIndex from './Components/Hompage/HomePageIndex/HomePageIndex';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import FindDoctorIndex from './Components/FindADoctorPage/FindDoctorIndex/FindDoctorIndex';
import AdminDashboardRoot from './Components/AdminDashboard/AdminDashboardRoot/AdminDashboardRoot';
import DoctorDashboardRoot from './Components/DoctorsDashboard/DoctorsDashboardRoot/DoctorDashboardRoot';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LogIn from './Components/Shared/LogIn/LogIn';
import DoctorRegistration from './Components/Shared/Registration/DoctorRegistration/DoctorRegistration';
import PatientRegistration from './Components/Shared/Registration/PatientRegistration/PatientRegistration';
import Appointments from './Components/Appoinments/Appointments/Appointments';
// import AppointmentDetailsRoot from './Components/AppointmentDetails/AppointmentDetailsRoot/AppointmentDetailsRoot';
import DashboardNav from './Components/AdminDashboard/DashboardNav/DashboardNav';
import DoctorDashboardNav from './Components/DoctorsDashboard/DoctorDashboardNav/DoctorDashboardNav';
import AppointmentDetailsRoot from './Components/AppoinmentDetails/AppointmentDetailsRoot/AppointmentDetailsRoot';
import PatientDashboardNav from './Components/PatientDashboard/PatientDashboardNav/PatientDashboardNav';
import AdminProfileUpdate from './Components/AdminDashboard/AdminProfileUpdate/AdminProfileUpdate';
import AboutDreamHospital from './Components/AboutUs/AboutDreamHospital/AboutDreamHospital';
import ContactWithUs from './Components/ContactUs/ContactWithUs/ContactWithUs';
import ServiceView from './Components/AdminDashboard/AllServices/ServiceView';
import FindDoctorRoot from './Components/FindADoctorPage/FindDoctorRoot/FindDoctorRoot';
import FindDoctorOrganicIndex from './Components/FindADoctorPage/FindDoctorOrganicIndex/FindDoctorOrganicIndex';
import DoctorIndex from './Components/DoctorsDashboard/DoctorIndex/DoctorIndex';
import OurMission from './Components/AboutUs/OurMission/OurMission';
import HospitalInfo from './Components/ContactUs/HospitalInfo/HospitalInfo';
import Career from './Components/ContactUs/Career/Career';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import DoctorsProfile from './Components/DoctorsProfile/DoctorsProfile';



function App() {
  return (
    <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomePageIndex></HomePageIndex>
            </Route>
            <Route path="/combine-login">
              <CombineLogIn></CombineLogIn>
            </Route>
            <Route path="/find-doctor">
              <FindDoctorRoot></FindDoctorRoot>
            </Route>
            <Route path="/find-doctor-static">
              <FindDoctorIndex></FindDoctorIndex>
            </Route>
            <Route path="/find-doctor-organ">
              <FindDoctorOrganicIndex></FindDoctorOrganicIndex>
            </Route>
            <Route path="/appointments">
              <Appointments></Appointments>
            </Route>
            <Route path="/about">
              <AboutDreamHospital></AboutDreamHospital>
            </Route>
            <Route path="/mission">
              <OurMission></OurMission>
            </Route>
            <Route path="/info">
              <HospitalInfo></HospitalInfo>
            </Route>
            <Route path="/career">
              <Career></Career>
            </Route>
            <Route path="/contact">
              <ContactWithUs></ContactWithUs>
            </Route>
            <Route path="/doctors-profile/:id">
              <DoctorsProfile></DoctorsProfile>
            </Route>
            <PrivateRoute path="/adminportal">
              <DashboardNav></DashboardNav>
            </PrivateRoute>
            <PrivateRoute path="/doctorportal">
              <DoctorIndex></DoctorIndex>
            </PrivateRoute>
            <PrivateRoute path="/patientportal">
              <PatientDashboardNav></PatientDashboardNav>
            </PrivateRoute>
            <PrivateRoute path="/appointment-details-root">
              <AppointmentDetailsRoot />
            </PrivateRoute>
            <Route path="/doctor-registration">
              <DoctorRegistration></DoctorRegistration>
            </Route>
            {/* <Route path="/:id">
              <ServiceView></ServiceView>
            </Route> */}
            <Route path="/admin-profile-update">
              <AdminProfileUpdate></AdminProfileUpdate>
            </Route>
            <Route path="/patient-registration">
              <PatientRegistration></PatientRegistration>>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        <MessengerCustomerChat
          pageId="115428890103284"
          appId="319709819819482"
          htmlRef="<REF_STRING>"
        />
    </div>
  );
}

export default App;
