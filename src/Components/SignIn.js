import React from 'react'
import { useForm } from "react-hook-form";
import { FaUser , FaEnvelope , FaLockOpen } from "react-icons/fa"
import './SignIn.css'


function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
      const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
          if (userData.password === data.password) {
            console.log(userData.name + " You Are Successfully Logged In");
          } else {
            console.log("Email or Password is not matching with our record");
          }
        } else {
          console.log("Email or Password is not matching with our record");
        }
      };

  return (
    <div className='wrapper'>
        <div className='box'>
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title">Welcome !</h1>
            <h3 style={{color:"white" }}>Please create your account befor going ahead</h3>
            <div className='Input'><FaUser className='icons'/><input type="text" {...register("name")} /></div>
             <div className='Input'><FaEnvelope className='icons'/><input type="email" {...register("email", { required: true })} /></div>
            {errors.email && <span style={{ color: "red" }}>
            *Email* is mandatory </span>}
            <div className='Input'><FaLockOpen className='icons'/><input type="password" {...register("password")} /></div>
            <input type={"submit"} id='btn' />
        </form>
        <p class="account">already have account ?<br/><a>Login</a></p>
        </div>
        
    </div>
  )
}
export default SignIn
