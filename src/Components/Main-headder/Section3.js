import React from 'react'
import Typed from "react-typed"
import background from '../../Images/background.jpg'
 const Section3 = () => {
  return (
    <React.Fragment>
    <section className=" section3 text-center mt-10">
    <div className='section3-back'>
      <img src={background} alt="Design your website with us" />
    </div>
    <Typed className="section3-write text-slate-900 text-4xl tracking-tight sm:text-5xl dark:text-white"
      strings={[
       "Get Training in latest IT Technologies",
       " Design your website with us"
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
    <figure>
    <blockquote>
    <p className="mt-6 max-w-3xl mx-auto text-lg text-white"><strong className="text-sky-900 font-semibold dark:text-sky-400">newus Dharamshala</strong>, a leader in Skills and Talent Development, announced Himachal's most significant IT & New-Age Careers Scholarship Programme , Ujjwal Bhavishya Scholarships’, to reward meritorious students desirous of building successful careers in today’s digital economy.<span className="text-sky-900 font-semibold dark:text-sky-400">Want to grow with latest technology, join us</span></p>
    </blockquote>
    </figure>
    </section> 
    </React.Fragment>
  )
}
export default Section3