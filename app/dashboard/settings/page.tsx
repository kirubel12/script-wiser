import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex max-w-full'>
      <UserProfile  />
    </div>
  )
}

export default Settings