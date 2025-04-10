"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code, FileCode, Sparkles, ArrowRight, History } from "lucide-react"
import Editor from '@monaco-editor/react'

const CodeGeneration = () => {
  const [activeTab, setActiveTab] = useState("generate")
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("react")
  const [generatedCode, setGeneratedCode] = useState("")
  
  const handleViewAllHistory = () => {
    setActiveTab("history")
  }

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
  }

  // Map the language selection to Monaco language identifiers
  const getMonacoLanguage = (lang: string) => {
    switch(lang) {
      case 'react': return 'javascript';
      case 'vue': return 'html';
      case 'angular': return 'typescript';
      case 'node': return 'javascript';
      case 'python': return 'python';
      default: return 'javascript';
    }
  }
  
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Code Generation</h1>
        <p className="text-muted-foreground">Generate code with AI assistance</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 ">
        <TabsList className='gap-4'>
          <TabsTrigger value="generate">Generate</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="generate" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              {/* Prompt card */}
              <Card>
                <CardHeader>
                  <CardTitle>Prompt</CardTitle>
                  <CardDescription>Describe what code you want to generate</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Create a React component that displays a responsive image gallery with lazy loading..."
                    className="min-h-[200px] resize-none"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Select 
                      defaultValue="react" 
                      onValueChange={handleLanguageChange}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Language/Framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="angular">Angular</SelectItem>
                        <SelectItem value="node">Node.js</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Generate
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Generated code card */}
              <Card>
                <CardHeader>
                  <CardTitle>Generated Code</CardTitle>
                  <CardDescription>Your AI-generated code will appear here</CardDescription>
                </CardHeader>
                <CardContent className="min-h-[350px]">
                  {generatedCode ? (
                    <Editor
                      height="300px"
                      defaultLanguage={getMonacoLanguage(language)}
                      language={getMonacoLanguage(language)}
                      value={generatedCode}
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        wordWrap: 'on',
                      }}
                      theme="vs-dark"
                    />
                  ) : (
                    <div className="text-muted-foreground text-center h-[300px] flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-md">
                      <p>Code will appear here after generation</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      if (generatedCode) {
                        navigator.clipboard.writeText(generatedCode)
                      }
                    }}
                  >
                    <FileCode className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button variant="outline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              {/* Options card */}
              <Card>
                <CardHeader>
                  <CardTitle>Options</CardTitle>
                  <CardDescription>Customize your generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Model</label>
                    <Select defaultValue="gemini">
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gemini">Gemini</SelectItem>
                        <SelectItem value="gpt4" disabled>GPT-4 (Coming Soon)</SelectItem>
                        <SelectItem value="gpt35" disabled>GPT-3.5 (Coming Soon)</SelectItem>
                        <SelectItem value="claude" disabled>Claude (Coming Soon)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Code Style</label>
                    <Select defaultValue="modern">
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="functional">Functional</SelectItem>
                        <SelectItem value="oop">Object-Oriented</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Include Comments</label>
                    <Select defaultValue="moderate">
                      <SelectTrigger>
                        <SelectValue placeholder="Comment level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="detailed">Detailed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent generations card */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Recent Generations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-accent cursor-pointer">
                        <Code className="h-4 w-4 text-purple-600" />
                        <div className="text-sm truncate">React Image Gallery Component</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full"
                    onClick={handleViewAllHistory}
                  >
                    View All History
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* History tab content */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generation History</CardTitle>
              <CardDescription>Your previous code generations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4 hover:bg-accent/50 cursor-pointer">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/20">
                      <History className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">React Component: Image Gallery</p>
                      <p className="text-xs text-muted-foreground">{i} day{i !== 1 ? 's' : ''} ago</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CodeGeneration