import React, { Fragment } from 'react'
import './about.css'
import Aboutus from '../images/about-us-at-newus-Dharamsala.gif'
import image from '../../Images/Owner.jpeg'
const About = () => {
  return (
    <Fragment>
    <section className='about'>
    <div className="about-wrapper">
      <div className="about-headding">
          <h1 className="mt- font-display font-extrabold tracking-tight text-slate-900">
          About
            <br/>
            us
          </h1>
          <p className="mt- font-display font-extrabold tracking-tight text-blue-600">We are best in our business</p>
      </div>
      <div className="about-image">
      <img src={Aboutus} alt="About us" />
      </div>
    </div>
    </section>
    <section id="author" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 ">
        <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">

        </div>
        <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
        <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
        <img alt="" sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem" height="576" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" src={image} />
        </div>
        <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 ">
        <p className="mt- font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
        <span className="block text-blue-600">About Us</span> 
        {/* Hey there, I’m the author behind ‘Everything Starts as a Square’. */} Dinesh Sharma <br/>
        MD
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">newus earlier named as NIIT Dharamshala Center , a training institute in Skills and Talent Development takes an initiative to encourage aspiring professionals to enhance their knowledge through industry ready programme, together with their update academic curriculum. newus is also a Professional Website Development Company in Dharamshala. Our cutting-edge and dynamic web development service in Dharamshala is ideal for small to medium scale projects with complex and bespoke requirements. newus work hard to assure 100% client satisfaction with high-quality work and timely delivery.</p>
        </div>
        </div>
        </div>
        </section>
    </Fragment>
  )
}
export default About;