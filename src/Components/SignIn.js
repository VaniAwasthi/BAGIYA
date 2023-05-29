import React from 'react'
import { useForm } from "react-hook-form";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser ,faLockOpen , faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
            <h1 className="title">Registration Form</h1>
             <FontAwesomeIcon  icon="fauser"/><input type="text" {...register("name")} />
             <FontAwesomeIcon  icon="faEnvelope"/><input type="email" {...register("email", { required: true })} />
            {errors.email && <span style={{ color: "red" }}>
            *Email* is mandatory </span>}
            <FontAwesomeIcon  icon="faLockOpen"/><input type="password" {...register("password")} />
            <input type={"submit"} id='btn' />
        </form>
        <p class="account">already have account ?<br/><a>Login</a></p>
        </div>
        
    </div>
  )
}
export default SignIn
