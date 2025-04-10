"use client"
import React from 'react'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          ScriptWiser
        </span>
        
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {!isSignedIn ? (
                <>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      Features
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </>
              ) : (
                <>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      Dashboard
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                      Projects
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </SignInButton>
        )}
      </div>
    </nav>
  )
}

export default Navbar

