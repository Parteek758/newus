import React, { Fragment } from 'react'
import Program from './Program.module.css'
import image from '../images/Machine-learning-at-newus-Dharmsala.gif'
import { FaBusinessTime} from "react-icons/fa";
import { FaCreditCard} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiDeepin } from "react-icons/si";
import {HiStatusOnline } from "react-icons/hi";
import {HiOutlineStatusOffline } from "react-icons/hi";

function MachineLearning() {
  return (
    <Fragment>
    <section className={`${Program.fullstack} MachineLearning`}>
  <div className={Program.fullstackwrapper}>
      <div className={Program.text}>
          <h1 className={`${Program.texth1} 'mt- font-display font-extrabold tracking-tight '`}>
          Machine Learning
          </h1>
          <p className={`${Program.textp} mt-4 text-lg tracking-tight text-slate-700`}>Certificate in Machine Learning</p>
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
      <h5 className={`${Program.courseh5} text-lg tracking-tight text-slate-700`}>240hrs</h5>
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
Machine Learning</h2>
</div>
<div className={Program.coursecontant}>
<div className={Program.contantitems}>
  <ul className={Program.unoderlist}>
    <li className={`${Program.listitems} text-blue-600`}>Data Science Overview</li>
          <li className={`${Program.listitems} text-blue-600`}>Introduction to Artificial Intelligence and Machine Learning</li>
          <li className={`${Program.listitems} text-blue-600`}>Data Analytics Overview</li>
          <li className={`${Program.listitems} text-blue-600`}>Statistical Analysis and Business Applications</li>
          <li className={`${Program.listitems} text-blue-600`}>Python Environment Setup and Essentials</li>
          <li className={`${Program.listitems} text-blue-600`}>Mathematical Computing with Python</li>
          <li className={`${Program.listitems} text-blue-600`}>Scientific computing with Python</li>
          <li className={`${Program.listitems} text-blue-600`}>Data Manipulation with Pandas</li>
          <li className={`${Program.listitems} text-blue-600`}>Machine Learning with Scikit–Learn</li>
          <li className={`${Program.listitems} text-blue-600`}>Natural Language Processing with Scikit Learn</li>
          <li className={`${Program.listitems} text-blue-600`}>Data Visualization in Python using matplotlib</li>
          <li className={`${Program.listitems} text-blue-600`}>Data Preprocessing</li>
          <li className={`${Program.listitems} text-blue-600`}>Supervised Learning</li>
          <li className={`${Program.listitems} text-blue-600`}>Feature Engineering</li>
          <li className={`${Program.listitems} text-blue-600`}>Supervised Learning-Classification</li>
          <li className={`${Program.listitems} text-blue-600`}>Unsupervised learning</li>
          <li className={`${Program.listitems} text-blue-600`}>Time Series Modelling</li>
          <li className={`${Program.listitems} text-blue-600`}>Ensemble Learning</li>
          <li className={`${Program.listitems} text-blue-600`}>Recommender Systems</li>
          <li className={`${Program.listitems} text-blue-600`}>Text Mining</li>
  </ul>
</div>
</div>
</div>
</section>
</Fragment>
  )
}

export default MachineLearning