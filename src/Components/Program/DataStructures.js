import React, { Fragment } from 'react'
import Program from './Program.module.css'
import image from '../images/Data-Structures-at-newus-Dharmsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";
function DataStructures() {
  return (
    <Fragment>
    <section className={`${Program.fullstack} Structures`}>
        <div className={Program.fullstackwrapper}>
            <div className={Program.text}>
                <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
                Data Structures</h1>
                <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Data Structures</p>
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
      <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>120hrs</h5>
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
            <h2 className='text-slate-900 font-extrabold tracking-tight'>Data Structures</h2>
        </div>
        <div className={Program.coursecontant}>
            <div className={Program.contantitems}>
                <ul className={Program.unoderlist}>
                    <li className={`${Program.listitems} text-blue-600`}> Search engine optimizaion.</li>
                    <li className={`${Program.listitems} text-blue-600`}>Introduction to Programming</li>
          <li className={`${Program.listitems} text-blue-600`}>Basic constructs of Programming.</li>
          <li className={`${Program.listitems} text-blue-600`}>Algorithms</li>
          <li className={`${Program.listitems} text-blue-600`}>Notaions</li>
          <li className={`${Program.listitems} text-blue-600`}>Complexities</li>
          <li className={`${Program.listitems} text-blue-600`}>Arrays.</li>
          <li className={`${Program.listitems} text-blue-600`}>Linked lists</li>
          <li className={`${Program.listitems} text-blue-600`}>Stacks.</li>
          <li className={`${Program.listitems} text-blue-600`}>Tower of Hanoi</li>
          <li className={`${Program.listitems} text-blue-600`}>Queues</li>
          <li className={`${Program.listitems} text-blue-600`}>Trees</li>
          <li className={`${Program.listitems} text-blue-600`}>Graphs</li>
                </ul>
            </div>
        </div>
    </div>
</section>
</Fragment>
  )
}

export default DataStructures