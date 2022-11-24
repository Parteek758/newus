import React, { Fragment } from 'react'
import Program from './Program.module.css'
import './background.css'
import image from '../servies/Sevices/Training/images/C-Language-at-newus-Dharamsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";

function C() {
  return (
    <Fragment>
    <section className={`${Program.fullstack} C`}>
        <div className={Program.fullstackwrapper}>
            <div className={Program.text}>
                <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
                Programing in C
                </h1>
                <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Programing in C</p>
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
      <h2 className='text-slate-900 font-extrabold tracking-tight'>Programing in C</h2>
    </div>
    <div className={Program.coursecontant}>
      <div className={Program.contantitems}>
        <ul className={Program.unoderlist}>
          <li className={`${Program.listitems} text-blue-600`}>Some basic knowledge of computer.</li>
            <li className={`${Program.listitems} text-blue-600`}>IDE</li>
            <li className={`${Program.listitems} text-blue-600`}>First program of C</li>
            <li className={`${Program.listitems} text-blue-600`}>Datatypes, Variables</li>
            <li className={`${Program.listitems} text-blue-600`}>Operators</li>
            <li className={`${Program.listitems} text-blue-600`}>Control Statements</li>
            <li className={`${Program.listitems} text-blue-600`}>Arrays</li>
            <li className={`${Program.listitems} text-blue-600`}>Functions in C</li>
            <li className={`${Program.listitems} text-blue-600`}>Pointers</li>
            <li className={`${Program.listitems} text-blue-600`}>Character array</li>
            <li className={`${Program.listitems} text-blue-600`}>Structure</li>
            <li className={`${Program.listitems} text-blue-600`}>File Handling</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
    </Fragment>
  )
}

export default C