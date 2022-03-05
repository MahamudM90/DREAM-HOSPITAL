import React from 'react';
import './Footer.css';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Find A Doctor" , link: "/find-doctor"},
        {name: "Medicine" , link: "/checkup"},
        {name: "Neurology" , link: "/personal-treatment"},
        {name: "Cardiology" , link: "/tooth-extract"},
        {name: "ENT" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Uttara - Dhaka, Bangladesh" , link: "//google.com/map"},
        {name: "Bangladesh" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Make Appointment" , link: "/appointments"},
        {name: "Gynecology" , link: "/checkup"},
        {name: "Dental" , link: "/personal-treatment"},
        {name: "Cancer" , link: "/tooth-extract"},
        {name: "General Surgeon" , link: "/checkup"},
    ]
    const services = [
        {name: "Our Services" , link: "/find-doctor"},
        {name: "Emergency & Observasion" , link: "/checkup"},
        {name: "Dialysis Unit" , link: "/personal-treatment"},
        {name: "ICU" , link: "/tooth-extract"},
        {name: "Indoor & Outdoor" , link: "/checkup"},
        {name: "Dental Care" , link: "/checkup"},
        {name: "Vaccination Unit" , link: "/checkup"},
        {name: "Laser Skin Care Unit" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Categories"} menuItems={noNamed}/>
                    <FooterCol key={3} menuTitle="Categories" menuItems={oralHealth}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        {/* <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebook} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul> */}
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801997412643</button>
                        </div>
                    </FooterCol>
                </div>
                
            </div>
            <div className="copyRight text-center py-1" style={{backgroundColor : '#6ECBB8'}}>
                    <p className="mt-1">Copyright {(new Date()).getFullYear()} All Rights Reserved By Dream Hospital</p>
                </div>
        </footer>
        
    );
};

export default Footer;