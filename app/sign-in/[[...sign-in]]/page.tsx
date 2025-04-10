import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center m-10'>
        
        <SignIn />
    </div>
  )
}

export default Login