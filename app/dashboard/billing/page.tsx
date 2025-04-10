"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Check, Zap, BarChart3, Clock, Download, X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Billing = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and payment methods</p>
      </div>

      <Tabs defaultValue="plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="history">Billing History</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>
        
        <TabsContent value="plans" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Free Plan */}
            <Card className="border-2 border-muted">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Basic features for personal use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>10 code generations per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Access to Gemini model</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Basic code templates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" disabled>
                  Current Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Pro</CardTitle>
                  <Badge>Popular</Badge>
                </div>
                <CardDescription>Advanced features for professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">$19<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Unlimited code generations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Priority access to new models</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Advanced code templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>Code optimization suggestions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Upgrade to Pro
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
           
          </div>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    Add Payment Method
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Payment Method</DialogTitle>
                    <DialogDescription>
                      Enter your card details to add a new payment method.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsPaymentModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" onClick={() => setIsPaymentModalOpen(false)}>
                      Save Card
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your past invoices and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: 'May 1, 2023', amount: '$0.00', status: 'Free Plan' },
                  { date: 'Apr 1, 2023', amount: '$0.00', status: 'Free Plan' },
                  { date: 'Mar 1, 2023', amount: '$0.00', status: 'Free Plan' }
                ].map((invoice, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{invoice.date}</p>
                        <p className="text-sm text-muted-foreground">{invoice.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{invoice.amount}</span>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Usage Statistics</CardTitle>
              <CardDescription>Monitor your resource usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Code Generations</span>
                    <span className="text-sm text-muted-foreground">7 / 10</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full dark:bg-slate-800">
                    <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Generations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-2xl font-bold">23</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">This Month</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-2xl font-bold">7</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Billing