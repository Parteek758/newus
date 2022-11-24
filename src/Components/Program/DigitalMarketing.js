import React, { Fragment } from 'react'
import Program from './Program.module.css'
import image from '../images/Digital-Marketing-at-newus-Dharmsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";
function DigitalMarketing() {
  return (
    <Fragment>
          <section className={`${Program.fullstack} Digital`}>
        <div className={Program.fullstackwrapper}>
            <div className={Program.text}>
                <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
                Digital Marketing
                </h1>
                <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Digital Marketing</p>
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
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>160hrs</h5>
            </div>
            <div className={Program.courseinfocont}>
            <HiStatusOnline className={Program.courseicon}/>
            <HiOutlineStatusOffline className={Program.courseicon}/>
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>Online/Offline classes</h5>
            </div>
            <div className={Program.courseinfocont}>
            <BsPatchCheckFill className={Program.courseicon}/>
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>Job Assured Program*</h5>
            </div>
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
      <h2 className='text-slate-900 font-extrabold tracking-tight'>
      Digital Marketing</h2>
    </div>
    <div className={Program.coursecontant}>
      <div className={Program.contantitems}>
        <ul className={Program.unoderlist}>
          <li className={`${Program.listitems} text-blue-600`}> Search engine optimizaion.</li>
          <li className={`${Program.listitems} text-blue-600`}> Search engine marketing.</li>
          <li className={`${Program.listitems} text-blue-600`}> Social media marketing on all social media platforms such as facebook etc.</li>
          <li className={`${Program.listitems} text-blue-600`}> Pay per click advertising. - Google ads.  - facebook ads etc.</li>
          <li className={`${Program.listitems} text-blue-600`}>Local listing sites advertising.</li>
          <li className={`${Program.listitems} text-blue-600`}>Affilate marketing.</li>
          <li className={`${Program.listitems} text-blue-600`}> Email marketing.</li>
          <li className={`${Program.listitems} text-blue-600`}> Content marketing.</li>
          <li className={`${Program.listitems} text-blue-600`}> Youtube analytic etc.</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
    </Fragment>
  )
}

export default DigitalMarketing