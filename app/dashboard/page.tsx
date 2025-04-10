import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Code, FileText, Users, Zap } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Script Wiser dashboard</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Generations</CardTitle>
                <Code className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground">+14% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 new this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Usage</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">of your monthly quota</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Performance</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2s</div>
                <p className="text-xs text-muted-foreground">avg. generation time</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent code generations and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/20">
                        <Code className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Generated React Component {i}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {i} hour{i !== 1 ? 's' : ''} ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used tools</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                <button className="flex items-center gap-2 rounded-lg border p-3 text-left text-sm transition-colors hover:bg-accent">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/20">
                    <Code className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">Generate New Component</div>
                </button>
                
                <button className="flex items-center gap-2 rounded-lg border p-3 text-left text-sm transition-colors hover:bg-accent">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/20">
                    <FileText className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">Create New Project</div>
                </button>
                
                <button className="flex items-center gap-2 rounded-lg border p-3 text-left text-sm transition-colors hover:bg-accent">
                  <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-900/20">
                    <Users className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="flex-1">Invite Team Member</div>
                </button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Content</CardTitle>
              <CardDescription>Detailed usage statistics will appear here</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center border-t">
              <p className="text-muted-foreground">Analytics dashboard coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports Content</CardTitle>
              <CardDescription>Your generated reports will appear here</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center border-t">
              <p className="text-muted-foreground">Reports dashboard coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Dashboard