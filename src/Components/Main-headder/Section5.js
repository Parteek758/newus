import React,{Fragment} from 'react'
import image1 from '../../Images/training.gif'
export const Section5 = () => {
  return (
   <Fragment>
    <div className="section5">
        <div className="section5-wapper">
            <div className="section5text">
            <h2 className="mt- font-display text-3xl font-extrabold tracking-tight text-blue-600 sm:text-5xl">Do training cum development at newus.</h2>
            </div>
            <div className="section5-image">
                <img src={image1} alt=" training cum development " />
            </div>
        </div>
    </div>
   </Fragment>
  )
}
export default Section5