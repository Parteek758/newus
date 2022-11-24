import React, { Fragment } from 'react'
import Program from './Program.module.css'
import './background.css'
import image from '../servies/Sevices/Training/images/autocad-at-newus-Dharamsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";

 function Autocad() {
  return (
    <Fragment>
    <section className={`${Program.fullstack} Autocad`}>
        <div className={Program.fullstackwrapper}>
            <div className={Program.text}>
                <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
                Programing in Autocad
                </h1>
                <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Programing in Autocad</p>
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
      <h2 className='text-slate-900 font-extrabold tracking-tight'>Programing in Autocad</h2>
    </div>
    <div className={Program.coursecontant}>
      <div className={Program.contantitems}>
        <ul className={Program.unoderlist}>
          <li className={`${Program.listitems} text-slate-900 font-extrabold`}>Introduction to Autocad</li>
          <li className={`${Program.listitems} text-slate-900 font-extrabold`}>Installation of Autocad</li>
          <li className={`${Program.listitems} text-slate-900 font-extrabold`}>Working in 2d Workspace</li>
          <li className={`${Program.listitems} text-blue-600`}>Draw Toolbar</li>
          <li className={`${Program.listitems} text-blue-600`}>Coordinate System</li>
          <li className={`${Program.listitems} text-blue-600`}>Modify Toolbar</li>
          <li className={`${Program.listitems} text-blue-600`}>Annotation</li>
          <li className={`${Program.listitems} text-blue-600`}>Layers</li>
          <li className={`${Program.listitems} text-blue-600`}>Blocks</li>
          <li className={`${Program.listitems} text-blue-600`}>Group</li>
          <li className={`${Program.listitems} text-blue-600`}>Define Attributes</li>
          <li className={`${Program.listitems} text-blue-600`}>Viewports</li>
          <li className={`${Program.listitems} text-blue-600`}>Parametric</li>
          <li className={`${Program.listitems} text-blue-600`}>Record</li>
          <li className={`${Program.listitems} text-slate-900 font-extrabold`}>Working in 3d Workspace</li>
          <li className={`${Program.listitems} text-blue-600`}>Modeling</li>
          <li className={`${Program.listitems} text-blue-600`}>Mesh</li>
          <li className={`${Program.listitems} text-blue-600`}>Boolean</li>
          <li className={`${Program.listitems} text-blue-600`}>Solid Editing</li>
          <li className={`${Program.listitems} text-blue-600`}>Section</li>
          <li className={`${Program.listitems} text-blue-600`}>Coordinates</li>
          <li className={`${Program.listitems} text-blue-600`}>Visualize</li>
          <li className={`${Program.listitems} text-blue-600`}>Gizmo</li>
          <li className={`${Program.listitems} text-slate-900 font-extrabold`}>Attach PDF file to Autocad Drawing</li>
          <li className={`${Program.listitems} text-slate-900 font-extrabold`}>Plot Autocad Drawing into PDF</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
    </Fragment>
  )
}
export default Autocad