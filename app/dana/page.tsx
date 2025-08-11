"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle,  } from "lucide-react";
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BlogCaseStudyPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        {/* Top header with breadcrumb and mobile sidebar trigger */}
        <div className="flex h-16 shrink-0 items-center justify-between px-4 lg:px-6 relative z-20">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Home className="ml-auto w-3 h-3" />
                <BreadcrumbLink href="/" className="text-white/70 hover:text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Dana Inc</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Hide on desktop (lg and up), show on mobile/tablet, positioned at top right */}
          <div className="lg:hidden">
            <SidebarTrigger className="text-white hover:bg-white/10" />
          </div>
        </div>

        {/* Hero Section with Background */}
        <div className="relative min-h-screen flex flex-col -mt-16">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 z-0">
            {/* You can replace this with an actual image/video/gif URL */}
            <div className="w-full h-full relative overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                // loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://videos.pexels.com/video-files/2435376/2435376-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Optional Overlay for readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Gradient fade to #131110 at bottom */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_70%,#131110_100%)]"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex-1 flex flex-col justify-center p-6 lg:p-10 max-w-7xl mx-auto text-white pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column - Title and Description */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight ">
                    Dana Incorporated
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl leading-relaxed">
                  Developed new technologies and techniques for manufacturing electric vehicle battery cooling systems with a focus on manufacturing and materials engineering.
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>May 2024 - August 2025</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-2">
                
                {/* Industry */}
                <div>
                  <Badge variant="default" className="text-white">
                    Automotive Engineering
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Role */}
                <div className="text-[#E3DEE0]">
                  <span className="font-semibold text-white">Role:</span> R&D Engineering Intern
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#E3DEE0]/30 to-transparent"></div>

                {/* Contributors */}
                <TooltipProvider>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">Contributors:</span>
                    <div className="flex -space-x-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button 
                            onClick={() => window.open('https://www.linkedin.com/in/varun-ram/', '_blank')}
                            className="transition-transform hover:scale-110 hover:z-10 relative"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">VK</AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className='text-white'>
                          <p>Varun Kothandaraman</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </TooltipProvider>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Key Focus Areas */}
                <div className="space-y-1">
                  <span className="text-white font-semibold block">Key Focus Areas:</span>
                  <p className="text-[#E3DEE0] leading-relaxed">
                    Brazing • Design of Experiements • GD&T • Materials Engineering • Mechanical Engineering • Research • Manufacturing • Heat Transfer Analysis • Corrosion Engineering • Performance Testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content section with background color */}
        <div className="bg-[#131110] text-white">
          <div className="p-6 lg:p-13 max-w-4xl mx-auto">
            <article className="space-y-8">

              <Alert className="border-orange-200 ">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note:</strong> Due to an NDA, much of the information on this page has been intentionally generalized.
                </AlertDescription>
              </Alert>

              {/* Introduction Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Introduction</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    What is an automotive heat exchanger, what are the types
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Brazing as the key technology and why it is important for heat exchangers
                </p>
                <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Summary of resume bullet points
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  [diagram of the time I spent at DANA, 8 months at BC, 8 months at MJTR]
                </p>
              </section>
              
              {/* BC Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Product Engineering Internship</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Detail your responsibilities: QA testing (hipot, leak, GD&T), designing/fabricating test fixtures (mention PTC Creo), and testing JLR battery cold plates.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Discuss your research into process improvements, especially the glueing-after-brazing method versus brazing everything together.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Mention prototype process investigations (sectioning, hipot testing) for potential quality/cost benefits.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Highlight teamwork with manufacturing and QA teams.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Explain your Python automation scripts to reduce manual workload (specify GD&T dimensional tracking and shipping list automation).                
                </p>
              </section>

              {/* MJTR Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Material Engineering Internship</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Describe your role testing 1000+ aluminum and copper alloy samples for properties like tensile strength, corrosion resistance, thermal conductivity.                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Explain how you studied brazing quality factors and contributed to process improvements (alloy replacements, downgauging).                
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Detail your work with Digital Image Correlation (DIC) technology and creation of Python-based material property databases.                
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Discuss your role in global Dana cost reduction initiatives tied to material research. 
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Explain your Python automation scripts to reduce manual workload (specify GD&T dimensional tracking and shipping list automation).                
                </p>
              </section>

              {/* MJTR Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Personal Initiative</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Focus on your self-started Python automation projects across both roles.         
                </p>       
                <p className="text-lg text-gray-300 leading-relaxed">
                  Explain how you studied brazing quality factors and contributed to process improvements (alloy replacements, downgauging).                
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Detail your work with Digital Image Correlation (DIC) technology and creation of Python-based material property databases.                
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Discuss your role in global Dana cost reduction initiatives tied to material research. 
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Explain your Python automation scripts to reduce manual workload (specify GD&T dimensional tracking and shipping list automation).                
                </p>
              </section>
























            </article>
          </div>
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
}