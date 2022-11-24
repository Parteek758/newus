import React from 'react'
import './training.css'
import {Link} from "react-router-dom";
import fullstack from './images/full-stack-program-at-newus-Dharamsala.gif'
import bankingandfinance from './images/banking-and-finance-at-newus-Dharamsala.gif'
import datascience from './images/data-science-at-newus-Dharamsala.gif'
import DigitalMarketing from './images/Digital-Marketing-at-newus-Dharamsala.gif'
import AdvancedDigitalMarketing from './images/Advanced-Digital-Marketing-at-newus-Dharamsala.gif'
import DataStructures from './images/Data-Structures-at-newus-Dharamsala.gif'
import Php from './images/PHP-at-newus-Dharamsala.gif'
import python from './images/python-at-newus-Dharamsala.gif'
import AdvancedPhp from './images/Advanced-PHP-at-newus-Dharamsala.gif'
import PythonWebDevelopment from './images/Python-Web-Development-at-newus-Dharamsala.gif'
import kids from './images/kids-at-newus-Dharamsala.webp'
import MachineLearning from './images/Machine-Learning-at-newus-Dharamsala.gif'
import ArtificialIntelligence from './images/Artificial-Intelligence-at-newus-Dharamsala.gif'
import c from './images/C-Language-at-newus-Dharamsala.gif'
import CLanguage from './images/c++-Language-at-newus-Dharamsala.gif'
import WebDesigning from './images/Web-Designing-at-newus-Dharamsala.gif'
import Java from './images/Java-at-newus-Dharamsala.gif'
import autocad from './images/autocad-at-newus-Dharamsala.gif'
import Graphic from './images/Graphic-and-Animation-at-newus-Dharamsala.gif'


 const Training = () => {
  return (
<React.Fragment>
<section className="section-4">
    <div className="sectionwrapper4">
        <div className="section4-courseheadding">
            <h2>Job assured courses*</h2>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to="/FullStack">
                    <img src={fullstack} alt="Full stack program"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2>Certificate in <span>Full Stack Software Engineering</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>The demard of full stack Developer is at its peak today.</p>
            </div>
            <div className="join-course4">
                <Link to="/FullStack">Join course</Link>
            </div>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to ="/Banking-and-finance">
                    <img src={bankingandfinance} alt="Banking Finance"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2>Certificate in <span>Banking and Finance</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>According to a study, banking sector may create up to 20 lakh jobs in next 5-10 years.</p>
            </div>
            <div className="join-course4">
                <Link to ="/Banking-and-finance">Join course</Link>
            </div>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to="/Data-Science">
                    <img src={datascience} alt="Data science"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2>
                    Certificate in <span>Data science</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                    Data science is the fastest growing globally and has witnessed growth.
                </p>
            </div>
            <div className="join-course4">
            <Link className="image-link" to="/Data-Science">Join course  </Link>
              </div>
        </div>
    </div>
</section>    
{/* <!-- section-1  --> */}
<section className="section-1">
    <div className="sectionwrapper1">
        <div className="section1-courseheadding">
            <h2>Digital Marketing Courses </h2>
        </div>
        <div className="course-section1">
            <div className="course-section1-image">
                <Link className="image-link" to ="/Digital-Marketing">
                    <img src={DigitalMarketing} alt="Digital Marketing"/>
                </Link>
            </div>
            <div className="course-section1-text">
                <h2>
                    Certificate in  <span>Digital Marketing</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                    Digital marketing, also called online marketing, is the promotion of brands
                </p>
            </div>
            <div className="join-course4">
                <Link to ="/Digital-Marketing">Join course</Link>
              </div>
        </div>
        <div className="course-section1">
            <div className="course-section1-image">
                <Link className="image-link" to="/Advance-Digital-Marketing">
                    <img src={AdvancedDigitalMarketing} alt="Advance Digital Marketing"/>
                </Link>
            </div>
            <div className="course-section1-text">
                <h2>
                    Certificate in  <span>Advance Digital Marketing</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                    The basis for the NextGen marketing strategies using the data captured from various marketing channels.
                </p>
            </div>
            <div className="join-course4">
                <Link to="/Advance-Digital-Marketing">Join course</Link>
              </div>
        </div>
    </div>
</section>
{/* <!-- section-2  --> */}
<section className="section-2">
    <div className="sectionwrapper2">
        <div className="section2-courseheadding">
            <h2>Certificate in Web Development </h2>
        </div>
        <div className="course-section2">
            <div className="course-section1-image">
                <Link to="/Web-Development-using-PHP" className="section2image-link">
                    <img src={Php} alt="Web Development using PHP"/>
                </Link>
            </div>
            <div className="course-section2-text">
                <h2> Certificate in <span>  Web Development using PHP</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>PHP is is a powerfull tool for making dynamic and interactive wabpages.</p>
            </div>
            <div className="join-course2">
                <Link to="/Web-Development-using-PHP">Join course</Link>
            </div>
        </div>
        <div className="course-section2">
            <div className="course-section1-image">
                <Link to="/Advance-Web-Development-using-PHP" className="section2image-link">
                    <img src={AdvancedPhp} alt="Web Development using PHP"/>
                </Link>
            </div>
            <div className="course-section2-text">
                <h2> Advance certificate in <span> Web Development using PHP</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>it is designed for experienced developers and those who have completed PHP coures</p>
            </div>
            <div className="join-course2">
                <Link to="/Advance-Web-Development-using-PHP">Join course</Link>
            </div>
        </div>
        <div className="course-section2">
            <div className="course-section1-image">
                <Link to="/Web-Development-using-Python" className="section2image-link">
                    <img src={python} alt="Web Development using Python"/>
                </Link>
            </div>
            <div className="course-section2-text">
                <h2>Certificate in <span>Web Development using Python</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>Advance concepts so you can be on you way to become a master of the python.</p>
            </div>
            <div className="join-course2">
                <Link to="/Web-Development-using-Python">Join course</Link>
            </div>
        </div>
        <div className="course-section2">
            <div className="course-section1-image">
                <Link to="/Advance-Web-Development-using-Python" className="section2image-link">
                    <img src={PythonWebDevelopment } alt="Web Development using Python"/>
                </Link>
            </div>
            <div className="course-section2-text">
                <h2> Advance certificate in<span> Web Development using Python</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>Advance concepts so you can be on you way to become a master of the python.</p>
            </div>
            <div className="join-course2">
                <Link to="/Advance-Web-Development-using-Python">Join course</Link>
            </div>
        </div>
    </div>
</section>
{/* <!-- section-3  --> */}
<section className="section-3">
    <div className="sectionwrapper3">
        <div className="section3-courseheadding">
            <h2> Advanced computer sciences</h2>
        </div>
        <div className="course-section3">
            <div className="course-section3-image">
                <Link className="image-link" to="/Data-Structures">
                    <img src={DataStructures} alt="Data Structures"/>
                </Link>
            </div>
            <div className="course-section3-text">
                <h2>
                    Certificate in <span>Data Structures</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                    A data structure is a particular way of organizing data in a computer so that it can be used effectively.
                </p>
            </div>
            <div className="join-course3">
                <Link to="/Data-Structures">Join course</Link>
              </div>
        </div>
        <div className="course-section3">
            <div className="course-section3-image">
                <Link className="image-link" to = "/Machine-Learning">
                <img src={MachineLearning} alt="Machine Learning"/>
                </Link>
            </div>
            <div className="course-section3-text">
                <h2>Certificate in <span>Machine Learning</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                    Machine  to imitate Intelligent human behavior.
                </p>
            </div>
            <div className="join-course3">
                <Link to = "/Machine-Learning">Join course</Link>
              </div>
        </div>
        <div className="course-section3">
            <div className="course-section3-image">
                <Link className="image-link" to="/Artificial-Intelligence">
                    <img src={ArtificialIntelligence} alt="Artificial Intelligence"/>
                </Link>
            </div>
            <div className="course-section3-text">
                <h2>
                    Certificate in  <span>Artificial Intelligence</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                    Earlier robots were just programmed externally to do each and every thing.<br/>
                    Alexa is one of the them.
                </p>
            </div>
            <div className="join-course3">
                <Link to="/Artificial-Intelligence">Join course</Link>
              </div>
        </div>
        </div>
    </section>
{/* <!-- section-3  --> */}
<section className="game">
    <div className="game-wrapper">
        <div className="game-courseheadding">
            <h2>Coding for Juniors</h2>
        </div>
        <div className="game-course">
            <div className="game-course-image">
                <Link className="image-link" to="/Kid">
                    <img src={kids} alt="Coding for Juniors"/>
                </Link>
            </div>
            <div className="game-course-text">
                <h2> Kids Must Learn<span> Coding</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>If, Kids will be taught coding they can make wonders.</p>
            </div>
            <div className="join-game">
                <Link to="/Kid">Join course</Link>
            </div>
        </div>
    </div>
</section>
{/* <!-- section-4  --> */}
<section className="section-4">
    <div className="sectionwrapper4">
        <div className="section4-courseheadding">
            <h2>Short Term Programs</h2>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to="/C">
                    <img src={c} alt="Certificate in C"/>
                </Link>
                </div>
                <div className="course-section4-text">
                <h2>
                    Certificate in <span>C</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                C programming language is used to create many types of applications and operating systems.
                </p>
            </div>
            <div className="join-course4">
                <Link to="/C">Join course</Link>
              </div>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to="/C++">
                    <img src={CLanguage} alt="Certificate in C++"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2>
                    Certificate in <span>C++</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                C++ is an object oriented programing language use to create applications such as Web Browsers, Compilers etc.
                </p>
            </div>
            <div className="join-course4">
                <Link to="/C++">Join course</Link>
              </div>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to="/Web-Designing">
                    <img src={WebDesigning} alt="Certificate in Web Designing"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2>
                    Certificate in <span>Web Designing</span>
                </h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>
                Web Designing is used to create front-end websites
                </p>
            </div>
            <div className="join-course4">
                <Link to="/Web-Designing">Join course</Link>
              </div>
        </div>   
    </div>
</section>
{/* <!-- section-4 Part two --> */}
<section className="section-4">
    <div className="sectionwrapper4">
        <div className="section4-courseheadding">
            <h2>Short Term Programs</h2>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                 <Link className="image-link" to='/Core-java'>
                    <img src={Java} alt="Program in Core Java"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2> Program in<span> Core Java</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>Core Java is used for developing console and desktop applications.</p>
            </div>
            <div className="join-course4">
                <Link to='/Core-java'>Join course</Link>
            </div>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to="/Core-Python">
                    <img src={PythonWebDevelopment} alt="Program in Core Python"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2> Program in<span> Core Python </span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>Core python is used for developing console and desktop applications.</p>
            </div>
            <div className="join-course4">
                <Link to="/Core-Python">Join course</Link>
            </div>
        </div>
        <div className="course-section4">
            <div className="course-section4-image">
                <Link className="image-link" to="/Autocad">
                    <img src={autocad} alt="Program in Autocad"/>
                </Link>
            </div>
            <div className="course-section4-text">
                <h2> Program in<span> Autocad</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>AutoCAD is a commercial computer-aided design and drafting software application.</p>
            </div>
            <div className="join-course4">
                <Link to="/Autocad">Join course</Link>
            </div>
        </div>
    </div>
</section>
{/* <!-- Graphic and Designing  --> */}
<section className="game">
    <div className="game-wrapper">
        <div className="game-courseheadding">
            <h2> Graphic and Animation</h2>
        </div>
        {/* <!-- <div className="game-course">
            <div className="game-course-image">
                <a className="image-link" href="game.php?course=game designing&path=newus-brochure-pdfs\brochure-of-Game Designing-@-newus.pdf">
                    <img src="image/game.webp" alt="#">
                </a>
            </div>
            <div className="game-course-text">
                <h2> Program in<span> Game Designing</span></h2>
                <p>Game designing and development will become the most  demanding career.</p>
            </div>
            <div className="join-game">
                <a href="game.php?course=game designing&path=newus-brochure-pdfs\brochure-of-Game Designing-@-newus.pdf">Join course>></a>
            </div>
        </div> --> */}
        <div className="game-course">
            <div className="game-course-image">
                <a className="image-link" href="Graphic-and-Animation.php?course=Graphic and Animation">
                    <img src={Graphic} alt="Graphic and Animation"/>
                </a>
            </div>
            <div className="game-course-text">
                <h2> Program in<span> Graphic and Animation </span></h2>
                {/* <!-- <p>Game designing and development will become the most  demanding career.</p> --> */}
            </div>
            <div className="join-game">
                <a href="Graphic-and-Animation.php?course=Graphic and Animation">Join course</a>
            </div>
        </div>
    </div>
</section>
{/* <!-- section-game  --> */}
{/* <section className="game">
    <div className="game-wrapper">
        <div className="game-courseheadding">
            <h2 className='block text-blue-600'>Design and Development Game</h2>
        </div>
        <div className="game-course">
            <div className="game-course-image">
                <a className="image-link" href="game.php?course=game designing&path=newus-brochure-pdfs\brochure-of-Game Designing-@-newus.pdf">
                    <img src="image/game.webp" alt="#"/>
                </a>
            </div>
            <div className="game-course-text">
                <h2> Program in<span> Game Designing</span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>Game designing and development will become the most  demanding career.</p>
            </div>
            <div className="join-game">
                <a href="game.php?course=game designing&path=newus-brochure-pdfs\brochure-of-Game Designing-@-newus.pdf">Join course</a>
            </div>
        </div>
        <div className="game-course">
            <div className="game-course-image">
                <a className="image-link" href="Game-Development.php?course=Game Development">
                    <img src="image/gamegif.gif" alt="#"/>
                </a>
            </div>
            <div className="game-course-text">
                <h2> Program in<span> Game Development </span></h2>
                <p className='mt-4 text-lg tracking-tight text-slate-700'>Game designing and development will become the most  demanding career.</p>
            </div>
            <div className="join-game">
                <a href="Game-Development.php?course=Game Development">Join course</a>
            </div>
        </div>
    </div>
</section> */}
    </React.Fragment>
  )
}
export default Training;