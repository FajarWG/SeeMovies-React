import React from 'react'

const Login = () => {
  return (
    <div className='container login'>
      <div className='text-center fw-bold fs-2 my-3'>Login</div>
      <form>
        <div class="mb-3">
          <label for="Email" class="form-label">Email address<span className='text-danger'>*</span></label>
          <input type="email" class="form-control" id="Email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password<span className='text-danger'>*</span></label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-dark">Login</button>
      </form>
    </div>
  )
}

export default Login