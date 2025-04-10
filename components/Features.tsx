import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

const Features = () => {
  return (
    <section id="features">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Powerful Features
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Everything you need to automate your workflow
        </p>
      </div>
      <ScrollArea className="w-full px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Easy Integration",
              description: "Seamlessly integrate with your existing workflow and tools",
              color: "blue",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              ),
              details: "Connect with popular tools like GitHub, Slack, and more with just a few clicks."
            },
            {
              title: "Powerful Automation",
              description: "Automate repetitive tasks with intelligent scripting solutions",
              color: "purple",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              ),
              details: "Create complex workflows with our visual editor and powerful scripting engine."
            },
            {
              title: "Smart Analytics",
              description: "Get insights into your automation performance and efficiency",
              color: "pink",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
              ),
              details: "Track performance metrics and identify optimization opportunities with real-time analytics."
            }
          ].map((feature, index) => (
            <HoverCard key={index} openDelay={200}>
              <HoverCardTrigger asChild>
                <Card className="border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer group bg-white dark:bg-gray-800/90 backdrop-blur-sm min-w-[300px] mx-2 md:mx-0">
                  <div className={`absolute inset-0 bg-${feature.color}-50/30 dark:bg-${feature.color}-900/20 rounded-lg transition-opacity`}></div>
                  <CardHeader className="relative space-y-4 p-6">
                    <div className={`w-12 h-12 rounded-xl bg-${feature.color}-100 dark:bg-${feature.color}-900/50 flex items-center justify-center text-${feature.color}-600 dark:text-${feature.color}-300 shadow-md`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 shadow-xl border-0 bg-white dark:bg-gray-800">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{feature.title} Features</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{feature.details}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </ScrollArea>

      {/* CTA Section (removed View Demo button) */}
      
    </section>
  )
}

export default Features