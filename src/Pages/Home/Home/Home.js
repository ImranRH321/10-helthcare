import React from 'react';
import Footer from '../Footer/Footer';


import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Ourvices from '../OurServices/Ourservice';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Doctor></Doctor>
            <Ourvices></Ourvices>
            <About></About>
            <Services></Services>
             <Contact></Contact>
            {/* <Footer></Footer> */}
         
        </div>
    );
};

export default Home;