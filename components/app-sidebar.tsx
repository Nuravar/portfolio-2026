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
import {
  AtSign,
  Paperclip,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  CarFront,
  University,
  File,
} from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { id: "dana", name: "Dana Inc.", href: "/dana", icon: CarFront },
  {
    id: "mcmaster-formula",
    name: "McMaster Formula Student",
    href: "https://macformularacing.com/",
    icon: University,
  },
  {
    id: "mcmaster-solar",
    name: "McMaster Solar Car Project",
    href: "https://www.mcmastersolarcar.com/",
    icon: University,
  },
];

const projectItems = [
 
  { id: "heatsink", name: "Heatsink Design", href: "/heatsink", icon: File },
  {
    id: "slacker-chores",
    name: "Slacker Chores",
    href: "/slacker",
    icon: File,
  },
  { id: "keysight", name: "Keysight", href: "/keysight", icon: File },
  { id: "pace", name: "Pace++", href: "/paceplusplus", icon: File },
];

const socialItems = [
  {
    id: "email-link",
    name: "Email",
    href: "mailto:kothandv@mcmaster.ca",
    icon: AtSign,
  },
  {
    id: "resume-link",
    name: "Resume",
    href: "https://drive.google.com/file/d/17IM2GrhMg9kURvisMCVKyW9lMpiyQfuI/view?usp=sharing",
    icon: Paperclip,
  },
  {
    id: "linkedin-link",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/varun-ram/",
    icon: Linkedin,
  },
  {
    id: "github-link",
    name: "Github",
    href: "https://github.com/Nuravar",
    icon: Github,
  },
];

export function AppSidebar() {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  return (
    <Sidebar
      className="border-r border-border/20"
      style={{ backgroundColor: "#221D1B" }}
    >
      <SidebarHeader
        className="border-b border-border/20"
        style={{ backgroundColor: "#221D1B" }}
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="
    group relative transition-all duration-300 ease-out 
    hover:bg-white/5 hover:backdrop-blur-sm 
    focus:bg-white/10 
    rounded-md
  "
            >
              <Link href="/" className="flex items-center gap-3">
                <div className="flex-1 text-left">
                  <span
                    className="
        text-base font-medium text-white/80 
        group-hover:text-white 
        transition-all duration-300 ease-out 
        group-hover:translate-x-0.5 group-hover:tracking-wide
      "
                  >
                    Varun Kothandararaman
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent style={{ backgroundColor: "#221d1b" }}>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-white/50 px-3 py-2">
            Experience
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="transform transition-all duration-200 ease-out hover:translate-x-1"
                >
                  <SidebarMenuButton
                    asChild
                    className="h-8 px-3 text-sm font-normal hover:bg-white/5 text-white/70 hover:text-white transition-all duration-200 ease-out hover:shadow-sm"
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-2 w-full"
                    >
                      <div className="relative flex items-center justify-center w-3.5 h-3.5">
                        <div
                          className={`absolute inset-0 transition-all duration-200 ease-out ${
                            hoveredItemId === item.id
                              ? "scale-110 opacity-100"
                              : "scale-100 opacity-100"
                          }`}
                        >
                          {hoveredItemId === item.id ? (
                            <ChevronRight
                              className="w-3.5 h-3.5 text-blue-400"
                              strokeWidth={1.5}
                            />
                          ) : (
                            <item.icon
                              className="w-3.5 h-3.5"
                              strokeWidth={1.5}
                            />
                          )}
                        </div>
                      </div>
                      <span className="font-light transition-all duration-200 ease-out">
                        {item.name}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-white/50 px-3 py-2">
            Highlighted Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="transform transition-all duration-200 ease-out hover:translate-x-1"
                >
                  <SidebarMenuButton
                    asChild
                    className="h-8 px-3 text-sm font-normal hover:bg-white/5 text-white/70 hover:text-white transition-all duration-200 ease-out hover:shadow-sm"
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-2 w-full"
                    >
                      <div className="relative flex items-center justify-center w-3.5 h-3.5">
                        <div
                          className={`absolute inset-0 transition-all duration-200 ease-out ${
                            hoveredItemId === item.id
                              ? "scale-110 opacity-100"
                              : "scale-100 opacity-100"
                          }`}
                        >
                          {hoveredItemId === item.id ? (
                            <ChevronRight
                              className="w-3.5 h-3.5 text-blue-400"
                              strokeWidth={1.5}
                            />
                          ) : (
                            <item.icon
                              className="w-3.5 h-3.5"
                              strokeWidth={1.5}
                            />
                          )}
                        </div>
                      </div>
                      <span className="font-light transition-all duration-200 ease-out">
                        {item.name}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-white/50 px-3 py-2">
            Links
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialItems.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="transform transition-all duration-200 ease-out hover:translate-x-1"
                >
                  <SidebarMenuButton
                    asChild
                    className="h-8 px-3 text-sm font-normal hover:bg-white/5 text-white/70 hover:text-white transition-all duration-200 ease-out hover:shadow-sm"
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-2 w-full"
                      target="_blank"
                    >
                      <div
                        className="relative flex items-center justify-center w-3.5 h-3.5"
                        rel="noopener noreferrer"
                      >
                        <div
                          className={`absolute inset-0 transition-all duration-200 ease-out ${
                            hoveredItemId === item.id
                              ? "scale-110 opacity-100"
                              : "scale-100 opacity-100"
                          }`}
                        >
                          {hoveredItemId === item.id ? (
                            <ChevronRight
                              className="w-3 h-3 text-blue-400"
                              strokeWidth={1.5}
                            />
                          ) : (
                            <item.icon className="w-3 h-3" strokeWidth={1.5} />
                          )}
                        </div>
                      </div>
                      <span className="font-light transition-all duration-200 ease-out">
                        {item.name}
                      </span>
                      <ExternalLink
                        className="ml-auto w-3 h-3 text-white/40 group-hover:text-white/60 transition-colors duration-200"
                        strokeWidth={1.5}
                      />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter
        className="border-t border-border/20"
        style={{ backgroundColor: "#221D1B" }}
      ></SidebarFooter>
    </Sidebar>
  );
}
