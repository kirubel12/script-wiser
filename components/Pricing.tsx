import React from 'react'
import { Button } from './ui/button'
import { CheckIcon } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const Pricing = () => {
  return (
    <main id="pricing" className="mb-24 container mx-auto px-4 max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8  justify-between">
        {[
          {
            title: "Starter",
            price: "0.00",
            features: ["Limited code generation", "Basic code explanation", "10 conversions"],
            badge: "",
          },
          {
            title: "Pro",
            price: "4.99",
            features: ["Unlimited code generation", "Advanced code explanation", "Unlimited conversions"],
            badge: "Popular",
          },
          
        ].map((plan, index) => (
          <Card key={index} className="relative border-none shadow-xl hover:shadow-2xl transition-shadow">
            {plan.badge && (
              <Badge className="absolute -top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600">
                {plan.badge}
              </Badge>
            )}
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

export default Pricing