import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'

const SignIn = () => {
  const [formData,setFormData] = useState({})
  const {isLoading,error} = useSelector((state)=> state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e)=>{
    setFormData({...formData,
    [e.target.id]:e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      dispatch(signInStart())
    const res = await fetch('/api/auth/sign-in', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    if(data.success === false){
      dispatch(signInFailure(data.message))     
      return
    }
    dispatch(signInSuccess(data))
    navigate('/')
    } catch (error) {
      dispatch(signInFailure(data.message))
    }
    
  }
  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign IN</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='email' className="border p-3 rounded-lg" id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className="border p-3 rounded-lg" id='password' onChange={handleChange}/>
        <button disabled={isLoading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{ isLoading ? 'Loading' : 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>dont have an account?</p>
        <Link to={"/sign-up"}>Sign up</Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
  )
}

export default SignIn