"use client";

import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, User, Briefcase, Mail, FileText, AtSign, Paperclip, Linkedin, Github, ExternalLink, ChevronRight, CarFront, University, Car, File } from "lucide-react";

const navigationItems = [
  { id: 'dana', name: "Dana Inc.", href: "/dana", icon: CarFront },
  { id: 'mcmaster-uni', name: "McMaster University", href: "/mcmastereng", icon: University },
  { id: 'mcmaster-formula', name: "McMaster Formula Electric", href: "/mcmastereng", icon: Car },
  { id: 'mcmaster-solar', name: "McMaster SolarCar Project", href: "/mcmastereng", icon: Car },
];

const projectItems = [
  { id: 'robot-bed', name: "Robot Bed", href: "/rob", icon: File },
  { id: 'slacker-chores', name: "Slacker Chores", href: "/slacker", icon: File },
  { id: 'pace', name: "Pace++", href: "/paceplusplus", icon: File },
];

const socialItems = [
  { id: 'email-link', name: "Email", href: "mailto:kothandv@mcmaster.ca", icon: AtSign },
  { id: 'resume-link', name: "Resume", href: "/", icon: Paperclip },
  { id: 'linkedin-link', name: "LinkedIn", href: "https://www.linkedin.com/in/varun-ram/", icon: Linkedin },
  { id: 'github-link', name: "/Github", href: "https://github.com/Nuravar", icon: Github },
];

export function AppSidebar() {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  return (
    <Sidebar className="border-r border-border/20" style={{ backgroundColor: '#1F1818' }}>
      <SidebarHeader className="border-b border-border/20" style={{ backgroundColor: '#1F1818' }}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              size="lg" 
              asChild 
              
              className="group transition-all duration-300 ease-out"
            >
              <a href="/" className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-12">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ease-out group-hover:shadow-lg" style={{ backgroundColor: '#372F32' }}>
                    <svg 
                      className="w-4 h-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-12" 
                      viewBox="0 0 24 24" 
                      fill="#afa5aa"
                    >
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <span className="text-base font-medium text-white/80 group-hover:text-white transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:tracking-wide">
                    Varun Ram
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent style={{ backgroundColor: '#1F1818' }}>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-white/50 px-3 py-2">Experience</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="transform transition-all duration-200 ease-out hover:translate-x-1"
                >
                  <SidebarMenuButton asChild className="h-8 px-3 text-sm font-normal hover:bg-white/5 text-white/70 hover:text-white transition-all duration-200 ease-out hover:shadow-sm">
                    <a href={item.href} className="flex items-center gap-2 w-full">
                      <div className="relative flex items-center justify-center w-3.5 h-3.5">
                        <div className={`absolute inset-0 transition-all duration-200 ease-out ${hoveredItemId === item.id ? 'scale-110 opacity-100' : 'scale-100 opacity-100'}`}>
                          {hoveredItemId === item.id ? (
                            <ChevronRight className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.5} />
                          ) : (
                            <item.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                          )}
                        </div>
                      </div>
                      <span className="font-light transition-all duration-200 ease-out">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-white/50 px-3 py-2">Highlighted Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="transform transition-all duration-200 ease-out hover:translate-x-1"
                >
                  <SidebarMenuButton asChild className="h-8 px-3 text-sm font-normal hover:bg-white/5 text-white/70 hover:text-white transition-all duration-200 ease-out hover:shadow-sm">
                    <a href={item.href} className="flex items-center gap-2 w-full">
                      <div className="relative flex items-center justify-center w-3.5 h-3.5">
                        <div className={`absolute inset-0 transition-all duration-200 ease-out ${hoveredItemId === item.id ? 'scale-110 opacity-100' : 'scale-100 opacity-100'}`}>
                          {hoveredItemId === item.id ? (
                            <ChevronRight className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.5} />
                          ) : (
                            <item.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                          )}
                        </div>
                      </div>
                      <span className="font-light transition-all duration-200 ease-out">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-white/50 px-3 py-2">Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="transform transition-all duration-200 ease-out hover:translate-x-1"
                >
                  <SidebarMenuButton asChild className="h-8 px-3 text-sm font-normal hover:bg-white/5 text-white/70 hover:text-white transition-all duration-200 ease-out hover:shadow-sm">
                    <a href={item.href} className="flex items-center gap-2 w-full">
                      <div className="relative flex items-center justify-center w-3.5 h-3.5">
                        <div className={`absolute inset-0 transition-all duration-200 ease-out ${hoveredItemId === item.id ? 'scale-110 opacity-100' : 'scale-100 opacity-100'}`}>
                          {hoveredItemId === item.id ? (
                            <ChevronRight className="w-3 h-3 text-blue-400" strokeWidth={1.5} />
                          ) : (
                            <item.icon className="w-3 h-3" strokeWidth={1.5} />
                          )}
                        </div>
                      </div>
                      <span className="font-light transition-all duration-200 ease-out">{item.name}</span>
                      <ExternalLink className="ml-auto w-3 h-3 text-white/40 group-hover:text-white/60 transition-colors duration-200" strokeWidth={1.5} />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/20" style={{ backgroundColor: '#1F1818' }}>
<div className="p-3">
  <p className="text-xs font-light text-white/40">
    © Varun Ram, 2025 | <kbd className="bg-white/10 text-white/60 px-1.5 py-0.5 rounded border border-white/20 text-[10px]">Ctrl + B</kbd> 
  </p>
</div>
      </SidebarFooter>
    </Sidebar>
  );
}