import React from 'react'
import {useForm} from 'react-hook-form'
import './css/Hotel.css'
const Login = () => {
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) =>{
  console.log(data);
  }
  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Name' {...register("fullName")}/>
      <input type="text" placeholder='Email' {...register('email')}/>
      <input type="number" placeholder='Age' {...register('age')}/>
      <input type="password" placeholder='password' {...register('password')}/>
      <input type="password" placeholder='confirm password'{...register('confirmPassword')} />
      <input type="submit" value='submit' />
    </form>
    </>
  )
}

export default Login;