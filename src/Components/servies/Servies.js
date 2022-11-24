import React from "react";
import './services.css'
import devolment from './Sevices/images/devolment-image.gif'
import training from './Sevices/images/traning-newus.gif'
import {Link} from "react-router-dom";
class Servies extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="servies">
           <div className="servie-wrapper">
           <h1 className="mt- font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">OUR SERVICES</h1>
           {/* Training  */}
           <Link className="link-page" to="/Training">
           <div className="courses1">
           <div className="image">
           <img src={training} alt="Training"/>
           </div>
           <div className="course-name">
           <h2 className='mt- font-display text-xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            TRAINING
          </h2>
        </div>
        <div className="about-course">
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            Get IT Training from Professionals.
          </p>
        </div>
        <div className="join">
          <h2 className='mt- font-display text-xl font-bold tracking-tight text-blue-600 sm:text-2xl'>
            Join our Courses
          </h2>
        </div>
      </div>
    </Link>
    {/* Development  */}
            <Link className="link-page" to="/Development">
      <div className="courses1">
        <div className="image">
          <img src={devolment} alt="Development"/>
        </div>
        <div className="course-name">
          <h2 className='mt- font-display text-xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            Development
          </h2>
        </div>
        <div className="about-course">
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
            Design your website with newus.
          </p>
        </div>
        <div className="join">
          <h2 className='mt- font-display text-xl font-bold tracking-tight text-blue-600 sm:text-2xl'>
            Choose your Industry
          </h2>
        </div>
      </div>
    </Link>
           </div>
            </div> 
            </React.Fragment>
        )
        }
}

export default Servies