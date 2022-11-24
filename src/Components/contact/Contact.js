import React, { Fragment } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";
import './contact.css'
import image from '../images/Contact-us-at-newus-Dharmsala.gif'
 const Contact = () => {
  return (
    <Fragment>
      <section className="contactmain">
        <div className="contact-wrapper">
          <div className="conatct-headding">
            <h1 className='mt- font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl'>About us</h1>
          </div>
          <div className="contact-info">
            <div className="contant-no">
              <FaPhoneAlt className='icon'/>
              <p>86796 86796</p>
            </div>
            <div className="contant-no">
              <FaWhatsapp className='icon'/>
              <p>86796 86796</p>
            </div>
            <div className="contant-no">
              <FaEnvelope className='icon'/>
              <p>newusdhramshala@gmail.com</p>
            </div>
            <div className="contant-no">
              <FaPhoneAlt className='icon'/>
              <p>86790 99867</p>
            </div>
          </div>
          <div className="contact-image">
            <img src={image}alt="Contact us" />
          </div>
        </div>
      </section>
      <section className='location'>
        <div className="location-wrapper">
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.8944375313586!2d76.32666416121018!3d32.202097697641456!2m3!1f0!2f38.97434877852622!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x391b511c22b65243%3A0x8433138aed0f3902!2snewus%20Dharamshala!5e1!3m2!1sen!2sin!4v1665468896500!5m2!1sen!2sin" loading="lazy" title='newus'></iframe>
          </div>
          <div className="location-form">
            <form action="" className='form'>
              <input  name="Your_name" id="name" placeholder="Your name*" >

              </input>
              <input  name="Your_email" id="email" placeholder="Your email*">

              </input>
              <input  id="subject" type="text" placeholder="subject"/>
              <textarea placeholder="Enter message...">

              </textarea>
              <button type="submit" className="button">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default Contact;