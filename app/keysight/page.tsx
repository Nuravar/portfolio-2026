"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Dither from '@/components/ui/dither';
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

import { ExternalLinkCard } from "@/components/link-preview";

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
                <BreadcrumbPage className="text-white">Keysight</BreadcrumbPage>
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
              <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <Dither
                  waveColor={[0.25, 0.2, 0.2]}
                  disableAnimation={false}
                  enableMouseInteraction={true}
                  mouseRadius={0.3}
                  colorNum={4}
                  waveAmplitude={0.3}
                  waveFrequency={3}
                  waveSpeed={0.01}
                />
              </div>

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
                  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                    Keysight
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Created a two-part web security device that allows homeowners to track movement in and out of their household using facial and voice recognition               
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-base">April 2024</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-4">
                
                {/* Industry */}
                <div>
                  <Badge variant="default" className="text-white bg-white/20 hover:bg-white/30">
                    Hackathon
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-white/30 to-transparent"></div>

                {/* Role */}
                <div className="text-gray-300">
                  <span className="font-semibold text-white text-base">Role:</span>
                  <span className="text-base ml-2">Full-Stack Developer</span>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-white/30 to-transparent"></div>

                {/* Contributors */}
                <TooltipProvider>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold text-base">Contributors:</span>
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
                        <TooltipContent className="text-white">
                          <p className="text-sm">Varun Kothandaraman</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button 
                            onClick={() => window.open('https://www.linkedin.com/in/hady-ibrahim/', '_blank')}
                            className="transition-transform hover:scale-110 hover:z-10 relative"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">HI</AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="text-white">
                          <p className="text-sm">Hady Ibrahim</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button 
                            onClick={() => window.open('https://www.linkedin.com/in/himanshu-singh03/', '_blank')}
                            className="transition-transform hover:scale-110 hover:z-10 relative"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">HS</AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="text-white">
                          <p className="text-sm">Himanshu Singh</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </TooltipProvider>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-white/30 to-transparent"></div>

                {/* Key Focus Areas */}
                <div className="space-y-2">
                  <span className="text-white font-semibold text-base block">Key Focus Areas:</span>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Home Security • Facial Recognition • Voice Recognition • Web Development • Real-Time Notifications • Firebase Integration • gRPC Communication • Raspberry Pi Hardware Control • UI/UX Design (Figma) • React Application
                  </p>
                </div>

                {/* External Links */}
                <div className="space-y-3 pt-2">
                  <ExternalLinkCard 
                    title="Devpost" 
                    description="See our winning Devpost project!" 
                    url="https://devpost.com/software/keysight"
                  />
                  <ExternalLinkCard 
                    title="GitHub" 
                    description="Check out the Keysight GitHub repository." 
                    url="https://github.com/itshady/keysight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content section with background color */}
        <div className="bg-[#131110] text-white">
          <div className="p-6 lg:p-12 max-w-4xl mx-auto">
            <article className="space-y-12">
              
              {/* Problem Statement Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Problem Statement</h2>
                
                <div className="w-full">
                  <div className="w-full max-w-4xl mx-auto">
                    <iframe
                      className="w-full h-64 md:h-96 lg:h-[500px] rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/xM34Z3SKnq0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you are at work or at home, the nagging worry of "who's at home?" fades away but it is hard to truly understand what is going on where you relax. Research labs, punch-in machines, and traditional home cameras not only are slow to use but provide limited data as to who is moving in and out of your house.
                </p>
              </section>

              {/* My Role Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white">My Role</h2>
                <ul className="space-y-3 text-lg text-gray-300 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-2">•</span>
                    <span>Created the UI design for desktop and mobile mockups in Figma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-2">•</span>
                    <span>Connected the frontend React app to the Firebase backend</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-2">•</span>
                    <span>Integrated communication to a Raspberry Pi via gRPC</span>
                  </li>
                </ul>
              </section>

              {/* Outcome Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Outcome</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Keysight is a two-part web security system that allows homeowners to monitor and track movement in and out of their household. Utilizing facial recognition and voice detection, Keysight is able to quickly identify whitelisted individuals as well as send notifications alerting of any guests or deliveries. Whenever there is any abnormal activity or threats, everyone in your house will be notified safely and remotely.
                </p>
                
                <div className="flex justify-center pt-4">
                  <Image
                    src="/keysight/keysight-dashboard.jpg"
                    height={900}
                    width={900}
                    alt="Keysight Dashboard"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </section>

              {/* Final Web Application Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Final Web Application Mockup</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Keysight was built using a combination of React, Firebase, and Chakra UI through UI/UX designs created in Figma. Firebase was utilized as the database to document and log user information that was initialized through Google authentication. We chose React as our main framework due to its ability for hot refresh alongside Firebase.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our design consists of a main dashboard that showcases all main information alongside a settings tab that allows for group creation through email invites.
                </p>
                
                <div className="pt-4">
                  <Carousel className="p-1">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="flex items-center justify-center">
                          <Image
                            src="/keysight/keysight-login.jpg"
                            alt="Keysight Login Screen"
                            height={900}
                            width={900}
                            className="rounded-lg object-contain max-h-full shadow-lg"
                            unoptimized
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="flex items-center justify-center">
                          <Image
                            src="/keysight/keysight-dashboard.jpg"
                            alt="Keysight Dashboard"
                            height={900}
                            width={900}
                            className="rounded-lg object-contain max-h-full shadow-lg"
                            unoptimized
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="flex items-center justify-center">
                          <Image
                            src="/keysight/keysight-facial.jpg"
                            alt="Keysight Facial Recognition"
                            height={900}
                            width={900}
                            className="rounded-lg object-contain max-h-full shadow-lg"
                            unoptimized
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="flex items-center justify-center">
                          <Image
                            src="/keysight/keysight-settings.jpg"
                            alt="Keysight Settings"
                            height={950}
                            width={950}
                            className="rounded-lg object-contain max-h-full shadow-lg"
                            unoptimized
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="flex items-center justify-center">
                          <Image
                            src="/keysight/keysight-grpc-lock.jpg"
                            alt="Keysight gRPC Lock Interface"
                            height={300}
                            width={300}
                            className="rounded-lg object-contain max-h-full shadow-lg"
                            unoptimized
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </section>

            </article>
          </div>
        </div>
        
        <Footer />
      </main>
    </SidebarProvider>
  );
}