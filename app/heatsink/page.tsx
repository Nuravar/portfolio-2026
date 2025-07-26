"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image";
import DarkVeil from '@/components/ui/dark-veil';

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
                <BreadcrumbPage className="text-white">Heatsink</BreadcrumbPage>
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
              {/* <video
                autoPlay
                // loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://videos.pexels.com/video-files/2435376/2435376-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <DarkVeil hueShift={245} />
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
                    Heat Sink Design 
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl leading-relaxed">
                Designed and optimized a custom CPU heatsink using natural convection, reducing peak temperature from 198 °C to 132 °C through iterative modeling and thermal analysis.
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Sep 2024</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-2">
                
                {/* Industry */}
                <div>
                  <Badge variant="default" className="text-white">
                    Finite Element Analysis
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Role */}
                <div className="text-[#E3DEE0]">
                  <span className="font-semibold text-white">Role:</span> FEA Simulations and Design
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
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button 
                            onClick={() => window.open('https://www.linkedin.com/in/brian-mano/', '_blank')}
                            className="transition-transform hover:scale-110 hover:z-10 relative"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">BM</AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className='text-white'>
                          <p>Brian Manomaisupat</p>
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
                    Thermal Analysis • Heat Transfer • Natural Convection • Fusion 360 • Topology Optimization • FEA • Materials Engineering • Manufacturing Methods • Product Design • Research 
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

              {/* <Alert className="border-orange-200 ">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note:</strong> Due to an NDA, much of the information on this page has been intentionally generalized.
                </AlertDescription>
              </Alert> */}

              {/* Introduction Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Introduction</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As the automotive industry rapidly transitions toward electrification, thermal management has emerged as one of the most critical challenges in electric vehicle development. At Dana Incorporated, I led a comprehensive research initiative focused on developing next-generation thermal management solutions for electric vehicle battery systems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Over the course of 15 months, our team worked to address the fundamental challenge of maintaining optimal battery temperatures while maximizing energy efficiency and extending battery life. This project resulted in breakthrough innovations that improved cooling efficiency by 25% and significantly enhanced overall vehicle performance.
                </p>
              </section>
              
              <section className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">Cooling Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">+25%</div>
                      <p className="text-xs text-muted-foreground mt-1">Improvement over baseline</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">Battery Life</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">+18%</div>
                      <p className="text-xs text-muted-foreground mt-1">Extended operational life</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">Energy Consumption</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">-12%</div>
                      <p className="text-xs text-muted-foreground mt-1">Reduced cooling energy</p>
                    </CardContent>
                  </Card>
                </div>
              </section>


              <AspectRatio ratio={16 / 9}>
              <div className="relative w-full h-full">
                <Image
                  src="https://cdn.motor1.com/images/mgl/BXxr9A/s3/il-prototipo-camuffato-della-nuova-jaguar-elettrica-2024.jpg"
                  alt="Image"
                  unoptimized
                  className="rounded-md object-cover"
                  fill
                />
              </div>
            </AspectRatio>

            <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Challenges</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As the automotive industry rapidly transitions toward electrification, thermal management has emerged as one of the most critical challenges in electric vehicle development. At Dana Incorporated, I led a comprehensive research initiative focused on developing next-generation thermal management solutions for electric vehicle battery systems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Over the course of 15 months, our team worked to address the fundamental challenge of maintaining optimal battery temperatures while maximizing energy efficiency and extending battery life. This project resulted in breakthrough innovations that improved cooling efficiency by 25% and significantly enhanced overall vehicle performance.
                </p>
              </section>

              <div className="flex gap-4">
                <AspectRatio ratio={4 / 3} className="">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://i.guim.co.uk/img/media/0e123a1c4f010f2868c2357da8df3f0cd5dc5393/0_72_2161_1297/master/2161.jpg?width=465&dpr=1&s=none&crop=none"
                      alt="Jaguar"
                      unoptimized
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                </AspectRatio>

                <AspectRatio ratio={16 / 9} className="">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://media.wired.com/photos/674874547f9330001e85096a/3:2/w_2560%2Cc_limit/JagTopArt2.jpg"
                      alt="Another Car"
                      unoptimized
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                </AspectRatio>
              </div>

            <section className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  As the automotive industry rapidly transitions toward electrification, thermal management has emerged as one of the most critical challenges in electric vehicle development. At Dana Incorporated, I led a comprehensive research initiative focused on developing next-generation thermal management solutions for electric vehicle battery systems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Over the course of 15 months, our team worked to address the fundamental challenge of maintaining optimal battery temperatures while maximizing energy efficiency and extending battery life. This project resulted in breakthrough innovations that improved cooling efficiency by 25% and significantly enhanced overall vehicle performance.
                </p>
              </section>

            <Carousel
              // plugins={[
              //   Autoplay({
              //     delay: 10000,
              //   }),
              // ]}
            className="p-1">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://skinnonews.com/global/wp-content/uploads/sites/2/2022/07/1180px_3.jpg"
                      alt="Slide 2"
                      fill
                      className="object-cover rounded-md"
                      unoptimized
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://media.wired.com/photos/655692cf7a953ed215c7b1d8/master/pass/Ford-F-150-Lightning-Featured-Gear.jpg"
                      alt="Slide 1"
                      fill
                      className="object-cover rounded-md"
                      unoptimized
                    />
                  </AspectRatio>
                </CarouselItem>

                <CarouselItem>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://images.mktw.net/im-47931009?width=1260&height=840"
                      alt="Slide 3"
                      fill
                      className="object-cover rounded-md"
                      unoptimized
                    />
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>






















            </article>
          </div>
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
}