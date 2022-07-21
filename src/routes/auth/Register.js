import React from 'react'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const registerSchema = yup.object().shape({
  name: yup.string().min(5).matches(/^[aA-zZ\s]+$/).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const Register = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = data => localStorage.setItem('user', JSON.stringify(data));


  return (
    <div className='container'>
      <div className='text-center fw-bold fs-2 my-3'>Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name<span className='text-danger'>*</span></label>
          <input type="text" className="form-control" name="name" {...register("name")}/>
          <div className='text-danger fst-italic mt-1 fs-6'> {errors.name?.message}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address<span className='text-danger'>*</span></label>
          <input type="text" className="form-control" name="email" {...register("email")}/>
          <div className='text-danger fst-italic mt-1 fs-6'> {errors.email?.message}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password<span className='text-danger'>*</span></label>
          <input type="password" className="form-control" name="password"  {...register("password")}/>
          <div className='text-danger fst-italic mt-1 fs-6'> {errors.password?.message}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password Confirmation<span className='text-danger'>*</span></label>
          <input type="password" className="form-control" name="confirmPassword" {...register("confirmPassword")} />
          <div className='text-danger fst-italic mt-1 fs-6'> {errors.confirmPassword && "Password Should Match!"}</div>
        </div>
        <button type="submit" className="btn btn-dark">Register</button>
      </form>
    </div>
  )
}

export default Register