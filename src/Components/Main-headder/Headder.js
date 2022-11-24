import React from "react";
import About from "./About";
import './Headder.css'
import Seaction4 from "./Seaction4";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section5 from "./Section5";
import Testimonial from "./Testimonial";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
class Headder extends React.Component{
   
    render(){
        // const contant = {
        //     PhoneNo:123456789,
        //     WhatsApp:123456789
        // }
        return(
            <React.Fragment>
            <Section2/>
            <Section3/>
            <Seaction4/>
            <Section5/>
            <About/>
            <Testimonial/>
            <div className="whatsapp" id="hide">
                <a className="contact"  href="http://wa.me/">
                    <FaWhatsapp/>
                </a>
            </div>
            <div className="call" id="hide">
            <a className="contact"  href="tel:">
            <FaPhoneAlt/>
            </a>
            </div>
            </React.Fragment>
        )
    }
}

export default Headder;