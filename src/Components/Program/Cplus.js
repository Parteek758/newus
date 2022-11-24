import React, { Fragment } from 'react'
import Program from './Program.module.css'
import './background.css'
import image from '../images/C++-at-newus-Dharmsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";

function Cplus() {
  return (
    <Fragment>
    <section className={`${Program.fullstack} Cplus`}>
        <div className={Program.fullstackwrapper}>
            <div className={Program.text}>
                <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
                Programing in C++
                </h1>
                <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Programing in C++</p>
            </div>
            <div className={Program.image}>
                <img src={image} alt="FullStack" />
            </div>
        </div>
    </section>
    {/* section Couse  */}
    <section className={Program.courseinfo}>
        <div className={Program.courseinfowrapper}>
            <div className={Program.courseinfocont}>
            <FaBusinessTime className={Program.courseicon}/>
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>45hrs</h5>
            </div>
            <div className={Program.courseinfocont}>
            <HiStatusOnline className={Program.courseicon}/>
            <HiOutlineStatusOffline className={Program.courseicon}/>
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>Online/Offline classes</h5>
            </div>
            {/* <div className={Program.courseinfocont}>
            <BsPatchCheckFill className={Program.courseicon}/>
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>Job Assured Program*</h5>
            </div> */}
            <div className={Program.courseinfocont}>
            <FaCreditCard className={Program.courseicon}/>
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>Easy EMI Plans</h5>
            </div>
            <div className={Program.courseinfocont}>
            <SiDeepin className={Program.courseicon}/>
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>Deep Skilling</h5>
            </div>
        </div>
    </section>
<section className={Program.courseoutline}>
  <div className={Program.courseoutlinewrapper}>
    <div className={Program.courseheadding}>
      <h2 className='text-slate-900 font-extrabold tracking-tight'>Certificate in C++</h2>
    </div>
    <div className={Program.coursecontant}>
      <div className={Program.contantitems}>
        <ul className={Program.unoderlist}>
          <li className={`${Program.listitems} text-blue-600`}>Object Oriented Programming</li>
            <li className={`${Program.listitems} text-blue-600`}>Features of OOP</li>
            <li className={`${Program.listitems} text-blue-600`}>First program of C++</li>
            <li className={`${Program.listitems} text-blue-600`}>Classes and Objects</li>
            <li className={`${Program.listitems} text-blue-600`}>Array of objects</li>
            <li className={`${Program.listitems} text-blue-600`}>Passing object to a function</li>
            <li className={`${Program.listitems} text-blue-600`}>Function overloading</li>
            <li className={`${Program.listitems} text-blue-600`}>Constructor and type of constructors</li>
            <li className={`${Program.listitems} text-blue-600`}>Inheritance</li>
            <li className={`${Program.listitems} text-blue-600`}>Virtual function</li>
            <li className={`${Program.listitems} text-blue-600`}>Pure virtual function</li>
            <li className={`${Program.listitems} text-blue-600`}>File Handling</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
    </Fragment>
  )
}

export default Cplus