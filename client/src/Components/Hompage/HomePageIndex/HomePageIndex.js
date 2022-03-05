import React from 'react';
import AppoinmentArea from '../AppoinmentArea/AppoinmentArea';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import OurBlog from '../OurBlog/OurBlog';
import OurDoctors from '../OurDoctors/OurDoctors';
import SearchArea from '../SearchArea/SearchArea';
import Services from '../Services/Services';
import UserInteraction from '../UserInteraction/UserInteraction';

const HomePageIndex = () => {
    return (
        <div style={{backgroundColor : '#F0F0F0'}}>
            <SearchArea></SearchArea>
            <UserInteraction></UserInteraction>
            <AppoinmentArea></AppoinmentArea>
            <Services></Services>
            <OurBlog></OurBlog>
            <OurDoctors></OurDoctors>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default HomePageIndex;