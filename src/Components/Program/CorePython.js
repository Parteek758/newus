import React, { Fragment } from 'react'
import Program from './Program.module.css'
import './background.css'
import image from '../images/Core-python-at-newus-Dharmsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";
function CorePython() {
  return (
    <Fragment>
    <section className={`${Program.fullstack} Corejava`}>
        <div className={Program.fullstackwrapper}>
            <div className={Program.text}>
                <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
                Programing in Core Python
                </h1>
                <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Core Python</p>
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
      <h2 className='text-slate-900 font-extrabold tracking-tight'>Programing in Core Python</h2>
    </div>
    <div className={Program.coursecontant}>
      <div className={Program.contantitems}>
        <ul className={Program.unoderlist}>
          <li className={`${Program.listitems} text-blue-600`}>Some basic knowledge of computer.</li>
            <li className={`${Program.listitems} text-blue-600`}>Python Features</li>
            <li className={`${Program.listitems} text-blue-600`}>PVM</li>
            <li className={`${Program.listitems} text-blue-600`}>Python libraries</li>
            <li className={`${Program.listitems} text-blue-600`}>Displaying first message in Python</li>
            <li className={`${Program.listitems} text-blue-600`}>Datatypes, Variables</li>
            <li className={`${Program.listitems} text-blue-600`}>Operators</li>
            <li className={`${Program.listitems} text-blue-600`}>Control Statements</li>
            <li className={`${Program.listitems} text-blue-600`}>Strings & String methods</li>
            <li className={`${Program.listitems} text-blue-600`}>Lists, Tuples, Dictionaries & Sets</li>
            <li className={`${Program.listitems} text-blue-600`}>Functions</li>
            <li className={`${Program.listitems} text-blue-600`}>Modules and Packages</li>
            <li className={`${Program.listitems} text-blue-600`}>Import keyword</li>
            <li className={`${Program.listitems} text-blue-600`}>Object Oriented in Python</li>
            <li className={`${Program.listitems} text-blue-600`}>Features of Object Oriented.</li>
            <li className={`${Program.listitems} text-blue-600`}>What is class?</li>
            <li className={`${Program.listitems} text-blue-600`}>How to define a class</li>
            <li className={`${Program.listitems} text-blue-600`}>Objects</li>
            <li className={`${Program.listitems} text-blue-600`}>Inheritance</li>
            <li className={`${Program.listitems} text-blue-600`}>Interfaces and Abstract classes</li>
            <li className={`${Program.listitems} text-blue-600`}>File handling</li>
            <li className={`${Program.listitems} text-blue-600`}>Multithreading</li>
            <li className={`${Program.listitems} text-blue-600`}>Generic Classes</li>
            <li className={`${Program.listitems} text-blue-600`}>Wrapper Classes</li>
            <li className={`${Program.listitems} text-blue-600`}>GUI in Python</li>
            <li className={`${Program.listitems} text-blue-600`}>PDBC (Python Database Connectivity)</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
    </Fragment>
  )
}

export default CorePython