import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
<div className="text-center space-y-8 mb-24">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 pb-2 tracking-tight">
              Script Wiser
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-sm"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your scripts into powerful automation tools with our 
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> intelligent platform</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button size="lg" className="rounded-full text-base px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>  )
}

export default Hero