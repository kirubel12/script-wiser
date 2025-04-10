import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="text-center space-y-6 mb-16">
      <div className="relative inline-block">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-2">
        Smooth Coding Starts Here, Thanks to AI
        </h1>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
      </div>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
    
      From crafting new snippets to understanding old ones, and even those tricky code transformations 
        </p>
      <Button size="lg" className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
        Get Started
      </Button>
    </div>
  )
}

export default Hero