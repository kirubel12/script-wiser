import React from 'react'
import { Button } from './ui/button'
import { CheckIcon, Sparkles } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const Pricing = () => {
  return (
    <section id="pricing" className="mb-24 container mx-auto px-4 max-w-6xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/30 via-transparent to-transparent dark:from-purple-900/10 rounded-3xl blur-3xl -z-10" />
      
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 dark:text-gray-300">Choose the plan that's right for you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "Starter",
            price: "0.00",
            features: ["Limited code generation", "Basic code explanation", "10 conversions"],
            badge: "",
            highlighted: false
          },
          {
            title: "Pro",
            price: "4.99",
            features: ["Unlimited code generation", "Advanced code explanation", "Unlimited conversions", "Priority support", "Custom templates"],
            badge: "Most Popular",
            highlighted: true
          },
        ].map((plan, index) => (
          <Card 
            key={index} 
            className={`relative transition-all duration-300 group overflow-hidden ${
              plan.highlighted 
                ? 'scale-105 shadow-2xl bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-background border border-purple-500/50' 
                : 'shadow-xl hover:shadow-2xl hover:scale-[1.02] border-transparent'
            }`}
          >
            <div className={`absolute inset-0 ${
              plan.highlighted 
                ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:opacity-75' 
                : 'group-hover:bg-purple-50/50 dark:group-hover:bg-purple-900/20'
            } transition-all duration-500`} />
            
            {plan.badge && (
              <div className="absolute -top-1 right-4 flex items-center gap-1 z-10">
                <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-sm font-medium">
                  {plan.badge}
                </Badge>
              </div>
            )}

            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {plan.title}
                {plan.highlighted && <Sparkles className="w-5 h-5 text-yellow-500" />}
              </h3>
              <div className="text-4xl font-bold mb-6 flex items-end gap-2">
                ${plan.price}
                <span className="text-lg text-gray-500 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckIcon className={`w-5 h-5 shrink-0 ${
                      plan.highlighted ? 'text-purple-500' : 'text-green-500'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full rounded-full transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:shadow-purple-500/50 hover:translate-y-[-2px]' 
                    : 'bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 hover:shadow-lg'
                }`}
              >
                {plan.highlighted ? 'Upgrade to Pro' : 'Get Started'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Pricing