import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import image2 from '../../Images/google/second.jpg'
// import image3 from '../../Images/google/Third.jpg'
// import image4 from '../../Images/google/four.jpg'
// import image5 from '../../Images/google/Six.jpg'
const Testimonial = () => {
  return (
  <React.Fragment >
 <div className='Testimonial'>
 <div className="Swiper-Headding">
  <h1 className="mt- font-display text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl">Google reviews</h1>
 </div>
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <h4>Rizual Rana</h4>
          <p>I had a great experience of learning at newus Dharamshala.. it's a great place to learn various skills and technologies. The staff is also nice, cooperative and helpful... <br/> <br/>
          Learnings-HTML, CSS, ReactJS, MongoDB</p>
        </SwiperSlide>
        <SwiperSlide><h4>Akash Tamang</h4>
          <p>I have done my industrial training in python from here,It was a great experience with highly skilled and professional faculty.<br/>
I would highly recommend to everyone<br/>
~Akash<br/>
Course -Python<br/>
College -RGGEC</p>
          </SwiperSlide>
        <SwiperSlide><h4>Vishakha Kaundal</h4>
          <p>I have done my training from NEWUS Dharamshala,  so  my experience is very good from this Institute. All the staff handles us very well, they are very much corporative. I have done my course in Python, so it being very well in short duration of time I have learnt more things, and knows how programming is related to our daily life.<br/>
          Thank you<br/>
          Name-Vishakha kaundal<br/>
          From- kangra<br/>
          Course-Python<br/>
          College -RGGEC</p>
          </SwiperSlide>
        <SwiperSlide><h4>Ayush</h4>
          <p>"This is the first time I have attended a class in both Teaching Board and smart class format and wondered how effective it would be easy to learn with smart board to clear up the things in programming language . It was very effective and therefore I would definitely be interested in attending other classes in the same format. The instructor was very knowlegeable and provided a wealth of information about the programme which I have done so far</p>
          </SwiperSlide>
        <SwiperSlide><h4>Vinod Kumar
</h4>
          <p>I have done training in java from here.And what I like about this institute is that there is more attention given to practical knowledge rather than theoretical knowledge.The faculty is very nice
And give full attention to the students.<br/>
Vinod Kumar<br/>
From : Sunder Nagar,Mandi<br/>
Course :  Java<br/>
College Name: ABVGIET PRAGATI NAGAR</p>
          </SwiperSlide>
        <SwiperSlide><h4>Isha Vashisht</h4>
          <p>I have done c course from Newus Dharmshala. It was a great experience here. Newus has experienced trainers to teach students. I have learnt so many things from here. I'm fully satisfied with this course.The trainer was good.<br/>
Thankyou<br/>
Name : Isha vashisht<br/>
College : nit Hamirpur<br/>
Branch : CSE</p>
          </SwiperSlide>
        <SwiperSlide><h4>Romy Python</h4>
          <p>It was amazing experience learning here at newus dharamshala. I enjoyed learning here.
I learnt here how to learn. I had never tasted this kind of environment.
Rohit<br/>
From Indora, Himachal pardesh<br/>
Courses Done: Python, Full stack web developer.</p>
          </SwiperSlide>
        <SwiperSlide><h4>ishani thakur</h4>
          <p>The best training institute for engineering students to do trainings.
Varsha mam always trying to solve our every doubt.
The faculty is friendly and helpful.the place is clean,I would recommend everyone to come here gain much more knowledge from newus❤️♥️</p>
          </SwiperSlide>
        <SwiperSlide><h4>Hemanshu</h4>
          <p>I joined this institute to take training for Core Python. My all over experience is very good. The knowledge given by the sir is very helpful to me & during training they solve thought related to the topic.
Name: Hemanshu<br/>
From: Kangra<br/>
Course: Core Python<br/>
College name: GHEC, Solan</p>
          </SwiperSlide>
      </Swiper>
 </div>
  </React.Fragment>
  )
}
export  default Testimonial;