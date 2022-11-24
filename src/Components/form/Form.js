import React,{useState,Fragment} from 'react'
import form from './Form.module.css'
import { BsXLg } from "react-icons/bs";
 const Form = () => {
    const [user,setUser] = useState({
        email:"", name:"",phone:""
    });
let name,value
const handel = (e)=>{
    console.log(e);
    name = e.target.name;
    value= e.target.value;

    setUser({...user , [name]:value});
}
const submit = async (e)=>{
e.preventDefault();
const{ email, name,phone} = user;
const res = await fetch('/regester',{
    method:'POST',
    header:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({
        email, name,phone
    })
}) ;  
const data = await res.json();
if (data.status === 422 || !data ) {
    window.alert("invalid Registration")
    console.log("invalid Registration");
}else{
    window.alert("Registration Successfull")
    console.log("Registration Successfull");
    // history.push("/")
}
}
const [show , setShow] = useState(false)
  return (
    <Fragment>
    <div className={form.mainbutton}>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>setShow(true)}>
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download Brochure</span>
</button>
 {show?<div className={form.mainform} >
    
    <form method='POST' className={form.main}>
    <div className={form.icon}>
    <BsXLg onClick={()=>setShow(false)}/>
    </div>
    
    <label className={form.lable}>Name</label>
    <input 
    type="text" 
    name='name'
    placeholder='Your Name'  
    required
    value={user.name}
    onChange={handel} 
    className={form.input}/>
    <label className={form.lable}>Phone No...</label>
    <input 
    type="number" 
    placeholder='86796 86796' 
     required
     name='phone'
       value={user.phone}
       onChange={handel} 
       className={form.input}/>
    <label className={form.lable}>Email</label>
   <input 
   type="email" 
   placeholder='newusdhramshala@gmail.com' 
   required
   name='email'
       value={user.email}
       onChange={handel} 
       className={form.input}/>
   <button className={form.button} 
   onClick={submit}
   >Submit</button>
    </form>
     </div>:null}
    </div>
   
    </Fragment>
  )
}
export default Form