"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Code2,
  LayoutDashboard,
  Settings,
  ChevronRight,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export default function Sidebar({ 
  className, 
  isCollapsed = false,
  onToggle
}: SidebarProps) {
  const pathname = usePathname();
  
  const routes = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: "text-sky-500"
    },
    {
      label: 'Code Generation',
      icon: Code2,
      href: '/dashboard/code-generation',
      color: "text-violet-500"
    },
    {
      label: 'Billing',
      icon: CreditCard,
      color: "text-green-700",
      href: '/dashboard/billing',
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/dashboard/settings',
    },
  ];

  return (
    <div className={cn("flex h-full", className)}>
      {/* Desktop Sidebar */}
      <nav className={cn(
        "hidden md:flex flex-col h-full bg-white dark:bg-gray-950 shadow-sm border-r transition-all",
        isCollapsed ? "w-16" : "w-72"
      )}>
        <div className={cn(
          "p-6 flex items-center",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          {!isCollapsed && (
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Script Wiser
            </h1>
          )}
          <Button variant="ghost" size="icon" onClick={onToggle} className={isCollapsed ? "rotate-180" : ""}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <Separator />
        
        <div className="flex-1 overflow-auto py-2">
          <div className={cn("px-3 py-2", isCollapsed && "flex flex-col items-center")}>
            {!isCollapsed && (
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-muted-foreground">
                Main
              </h2>
            )}
            <div className={cn("space-y-1", isCollapsed && "flex flex-col items-center space-y-2")}>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-x-2 text-sm rounded-lg transition-all",
                    isCollapsed ? "p-2 justify-center" : "px-3 py-2",
                    pathname === route.href 
                      ? "bg-accent text-accent-foreground font-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                  title={isCollapsed ? route.label : undefined}
                >
                  <route.icon className={cn("h-5 w-5", route.color)} />
                  {!isCollapsed && route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}