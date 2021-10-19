import React from 'react';
import Footer from '../Footer/Footer';


import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Ourvices from '../OurServices/Ourservice';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Ourvices></Ourvices>
            <Services></Services>
            <Doctor></Doctor>
             <Contact></Contact>
            <Footer></Footer>
         
        </div>
    );
};

export default Home;