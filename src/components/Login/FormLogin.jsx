import React from 'react'

const FormLogin = () => {
  return (
    <form>
        <h2>Login</h2>
        <div>
          <div>
            <label htmlFor='email'>email</label>
            <input type='text' id='email'/>
          </div>
          <div>
            <label htmlFor='password' >Password</label>
            <imput type='password' id='password' />
          </div>
        </div>
    </form>
  )
}

export default FormLogin