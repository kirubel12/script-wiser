import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center m-10'>
        
        <SignUp />
    </div>
  )
}

export default Register