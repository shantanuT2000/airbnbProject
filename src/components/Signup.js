import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import './css/Hotel.css'
import NavBar from './NavBar'
import { useContext } from 'react'
import { AppContext } from '../App'
import Footer from './Footer'
import * as yup from 'yup';
import {yupResolver} from'@hookform/resolvers/yup'
const Signup = () => {
  const {navItems} = useContext(AppContext)
  

  const schema = yup.object().shape({
    fullName:yup.string().required(),
    email:yup.string().email().required(),
    age:yup.number().integer().min(18).max(30),
    password:yup.string().max(15).required(),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required(),
  })
   
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema),
  });
 const[submitted,setSubmitted] = useState(false);
  const onSubmit = (data) =>{
  console.log(data);
  setSubmitted(true);
  }
  return (
   
    <>
     <NavBar Navi={navItems}/>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Name' {...register("fullName")}/>
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder='Email' {...register('email')}/>
      <input type="number" placeholder='Age' {...register('age')}/>
      <input type="password" placeholder='password' {...register('password')}/>
      <input type="password" placeholder='confirm password'{...register('confirmPassword')} />
      <input type="submit" value='REGISTER' />
      {submitted && <p>submitted Succesfuuly</p>}
    </form>

    <Footer/>
    </>
    
  )
}

export default Signup;