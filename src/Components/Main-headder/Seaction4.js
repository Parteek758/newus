import React from 'react'
import image from '../../Images/background-new.jpg'
import image2 from '../../Images/section4.png'
const Seaction4 = () => {
  return (
    <React.Fragment>
    <div className='section4'>
      <div className="backimage">
        <img src={image} alt="" />
      </div>
      <div className="section4-content">
      <div className="Section4-image">
          <img src={image2} alt="" />
        </div>
        <div className="Content">
          <h1>Get IT Training <br/> from <br/> Professionals</h1>
        </div>
        
      </div>
    </div>
    </React.Fragment>
  )
}
export  default Seaction4