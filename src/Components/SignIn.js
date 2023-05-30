import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { FaUser , FaEnvelope , FaLockOpen } from "react-icons/fa"
import './SignIn.css'


function SignIn() {
  // using form hook 
  const {register,handleSubmit,formState: { errors },} = useForm();
      
      const onSubmit = (data) => {
          console.log(data);
      };
      console.log(errors)

  return (
    <div className='wrapper'>
        <div className='box'>
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title">Welcome !</h1>
            <h3 style={{color:"white" }}>Please create your account befor going ahead</h3>
            <div className='Input'>
              <FaUser className='icons'/>
              <input type="text" name='name' placeholder='Name' {...register("name" , {required: "Name is required"})}/>
            </div>
              {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            <div className='Input'>
              <FaEnvelope className='icons'/>
              <input type="text" name="email" placeholder='Email'{...register("email", {required: "Email is required.",
              pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid."} })}/>
            </div>
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            <div className='Input'>
              <FaLockOpen className='icons'/>
              <input type="password" name="password" placeholder='Password' {...register("password", {required: "Password is required.",minLength: {value: 6,
                message: "Password should be at-least 6 characters."}})}/>
            </div>
            {errors.password && (<p className="errorMsg">{errors.password.message}</p>)}
             <button type={"submit"} id='btn' >SignIn</button>
        </form>
        <p class="account">already have account ?<br/><a>Login</a></p>
        </div>
        
    </div>
  )
}
export default SignIn
