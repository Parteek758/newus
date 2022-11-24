import React, { Fragment } from 'react'
import Program from './Program.module.css'
import image from '../images/Banking-Finance-at-newus-Dharamsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";
const Bankingandfinance = () => {
  return (
    <Fragment>
    <section className={`${Program.fullstack} banking`}>
        <div className={Program.fullstackwrapper}>
            <div className={Program.text}>
                <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
                Banking and Finance
                </h1>
                <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Banking Finance</p>
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
            <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>480hrs</h5>
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
      <h2 className='text-slate-900 font-extrabold tracking-tight'>Banking Finance</h2>
    </div>
    <div className={Program.coursecontant}>
      <div className={Program.contantitems}>
        <ul className={Program.unoderlist}>
          <li className={`${Program.listitems} text-blue-600`}>Principles & Practices of Banking</li>
          <li className={`${Program.listitems} text-blue-600`}>Legal & Regulatory Aspects of Banking</li>
          <li className={`${Program.listitems} text-blue-600`}>Accounting & Finance for Bankers</li>
          <li className={`${Program.listitems} text-blue-600`}>Business Economics</li>
          <li className={`${Program.listitems} text-blue-600`}>Corporate Social Responsibility</li>
          <li className={`${Program.listitems} text-blue-600`}>Organizational Behavior</li>
          <li className={`${Program.listitems} text-blue-600`}> Marketing of Financial Services</li>
          <li className={`${Program.listitems} text-blue-600`}>Business Law</li>
          <li className={`${Program.listitems} text-blue-600`}> Taxation–Direct and Indirect</li>
          <li className={`${Program.listitems} text-blue-600`}> Retail Banking</li>
          <li className={`${Program.listitems} text-blue-600`}> Information Systems for Managers</li>
          <li className={`${Program.listitems} text-blue-600`}> Business Communication and Etiquette</li>
          <li className={`${Program.listitems} text-blue-600`}> Blockchain in cryptocurrency</li>
          <li className={`${Program.listitems} text-blue-600`}> Litecoin, Bitcoin, Ethereum</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
    </Fragment>
  )
}

export default Bankingandfinance