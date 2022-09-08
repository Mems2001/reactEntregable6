import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../../store/slices/user.slice'

const FormLogin = () => {

  const userL = useSelector (state => state.userSlice)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const defaultUser = {
    email: '' ,
    password: ''
  }

  const { register , handleSubmit , reset } = useForm()

  const submit = data => {
    console.log (data)
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'

    axios.post (URL , data)
    .then (res => {
      console.log(res.data)
      localStorage.setItem('token' , res.data.data.token)
      dispatch(setLogin ())
      reset(defaultUser)
      navigate ('/')
    })
    .catch (err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <div>
          <div>
            <label htmlFor='email'>email</label>
            <input {...register('email')} type='text' id='email'/>
          </div>
          <div>
            <label htmlFor='password' >password</label>
            <input {...register('password')} type='password' id='password' />
          </div>
        </div>
        <button>Login</button>
    </form>
  )
}

export default FormLogin