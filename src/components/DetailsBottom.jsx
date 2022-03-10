import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../styles/styles.css";
// //import validator from 'validator'
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";

function Third(){
   
  const initialValues={username:"",email:"",mobile:""};
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(e.target);
    setFormValues({...formValues,[name]:value});
    setIsSubmit(true);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(Validate(formValues));
  }
  
  useEffect(()=>{ 
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
    
  },[formErrors])
  
  const Validate=(values)=>{
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username="Enter your name";
    }
    if(!values.email){
      errors.email="Enter your email ID";
    }else if(!regex.test(values.email))
    {
      errors.email="Enter a valid email ID";
    }
    if(!values.mobile){
      errors.mobile="Enter your mobile number";
    }else if(values.mobile.length !==10){
     errors.mobile="Enter a valid phone number"; 
    }
    
    return errors;
  }
  
  return (<>
    <form onSubmit={handleSubmit} className="top">
      <div>
        
         <div className="label-input">
            <label>Name</label>
            <input type="text"  value={formValues.username} name="username" onChange={handleChange}></input>
           <span style={{color: 'brown'}}>
                {formErrors.username}
            </span>
         </div>
        
         <div className="label-input">
            <label>Email</label>
            <input type="email" id="userEmail" value={formValues.email}
             name="email"  onChange={handleChange}></input>
            <span style={{color: 'brown'}}>
                {formErrors.email}
            </span>
         </div>
        
         <div className="label-input">
            <label>Phone number</label>
            <input type="number" value={formValues.mobile} name="mobile" onChange={handleChange}/> 
            <span style={{color: 'brown'}}>
              {formErrors.mobile}
            </span>
         </div>
        
      </div>
       
      <div className="bottom small">
        <hr />
         <span >Amount</span>
         <span className="right"><span class="rupee-container " data-testid="rupee-value-container">&#8377;400</span></span>
       <hr />
      </div>
      
      {Object.keys(formErrors).length === 0 && isSubmit?<Link to="/QR"><input type="submit" value="Next" id="btn"/></Link>:<div><input type="submit" value="Next" id="btn"/></div>}
      

      
    
    </form>
  </>)
}
export default Third;
