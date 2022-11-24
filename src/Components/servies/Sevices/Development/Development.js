import React from 'react'
import './Development.css'
import {Link} from "react-router-dom";
import image from './images/development-at-newus-Dharamsala.gif'
export const Development = () => {
  return (
    <React.Fragment>
    <section className="Development">
    <div className="Development-wrapper">
    <div className="px-4 py-10  wrapper-text">
        <p className="mt- font-display  font-extrabold tracking-tight text-slate-900 ">
        <span className="block text-blue-600">Make your website with us</span> </p>
       <p className="mt- font-display  font-extrabold tracking-tight text-slate-900 ">Choose your website type</p>
       <p className="mt- font-display  font-extrabold tracking-tight text-slate-900 ">Grow your Business  with us</p>
        </div>
        <div className="wrapper-text1">
       <img src={image} alt='Development'></img>
        </div>
        </div>
        </section>
   
{/* <!-- section-2 --> */}
<section className="Development-2">
<div className="Development-2-wrapper">
<div className="colume">
<div className="columes">
 <Link to="">
 <h2>SCHOOL</h2>
 </Link>
 </div>
 <div className="columes">
  <Link to="">
  <h2>COLLEGE</h2>
  </Link>
  </div>
   <div className="columes">
   <Link to="">
   <h2>SHOP</h2>
   </Link>
   </div>
   <div className="columes">
    <Link to="">
    <h2>TRANINIG CENTRE</h2>
    </Link>
     </div>
     <div className="columes">
     <Link to="">
     <h2>HOTEL</h2>
     </Link>
     </div>
     <div className="columes">
     <Link to="">
     <h2>HOSPITAL</h2>
     </Link>
     </div>
     <div className="columes">
     <Link to="">
     <h2> BEAUTY PARLOUR</h2>
     </Link>
     </div>
     <div className="columes">
     <Link to="">
     <h2> RESTAURANT</h2>
     </Link>
     </div>
     <div className="columes">
     <Link to="">
     <h2>BUILDING SOCIETY</h2>
     </Link>
     </div>
     <div className="columes">
     <Link to="">
     <h2>PHOTO STUDIOS</h2>
     </Link>
      </div>
      <div className="columes">
       <Link to="">
       <h2>LAWYERS</h2>
       </Link>
       </div>
       <div className="columes">
       <Link to="">
       <h2>MORE</h2>
       </Link>
       </div>
       </div>
       </div>
       <div>
        
       </div>
       </section>
    </React.Fragment>
  )
}
export default Development