"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import DarkVeil from '@/components/ui/dark-veil';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
  <div className="p-6 lg:p-12 max-w-4xl mx-auto">
    <article className="space-y-12">
      
      {/* Problem Statement Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Problem Statement</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          As a part of a design challenge, my partner and I tasked ourselves with creating a custom CPU heatsink that performed better than an engineering drawing we were provided as an example. Utilizing concepts of thermodynamics from our own background research, I created a more efficient heatsink powered by natural convection, the simulations used to test efficacy, the methods of manufacturing, and future areas of improvement.
        </p>

        <Carousel className="p-1">
                <CarouselContent>
                  <CarouselItem className="">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/heatsink/heatsink-model.png"
                        alt="Slide 1"
                        height={600}
                        width={600}
                        className="rounded-md object-contain max-h-full"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="">
                    <div className="flex items-center justify-center">
                      <Image
                       src="/heatsink/heatsink-cpu.png"
                        alt="Slide 2"
                        height={600}
                        width={600}
                        className="rounded-md object-contain max-h-full"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="">
                    <div className=" flex items-center justify-center">
                      <Image
                        src="/heatsink/heatsink-plate.png"
                        alt="Slide 3"
                        height={600}
                        width={600}
                        className="rounded-md object-contain max-h-full"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

        <div className="pt-4">
          <div className="w-full">
            <div className="w-full max-w-4xl mx-auto">
              <iframe
                className="w-full h-96 lg:h-[600px] rounded-lg shadow-lg border border-gray-600"
                src="/heatsink/Thermal_DEV_Challenge_Heat_Sink_Drawing_Package.pdf"
                title="Default Heatsink CAD Drawing"
              />
            </div>
            <p className="text-center text-base text-gray-400 italic mt-2">Original heatsink engineering specifications</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Solution</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong className="text-white">For our design,</strong> we were able to lower the maximum temperature of the heatsink from <strong className="text-white">198°C → 132°C</strong> between the first and the last designs that we created.
        </p>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          With our main goal being to reduce the temperature as much as possible, we decided to set our heatsink material to copper alongside creating our design with thermal savings in mind. Throughout our entire process, <strong className="text-white">our main focus was the movement of hot air throughout our entire heatsink from top to bottom.</strong>
        </p>
      </section>

      {/* My Role Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">My Role</h2>
        <ul className="space-y-3 text-lg text-gray-300 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-white mt-2">•</span>
            <span>Modelled the different root, stem, and shape iterations for the heatsink design</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white mt-2">•</span>
            <span>Conducted simulations to test design iterations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white mt-2">•</span>
            <span>Researched various concepts relating to heatsink design and fluid thermodynamics</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white mt-2">•</span>
            <span>Researched various methods of manufacturing</span>
          </li>
        </ul>
      </section>

      {/* Background Research Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Background Research</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          To begin, our first challenge was to answer the question: <strong className="text-white"> How do we start to design a heatsink?</strong>
        </p>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          Modern heatsink designs for most CPUs generally involved several types: natural convection, fans, liquid cooling, or complex structures created through additive manufacturing to guide air through a specific path to cool the CPU located underneath.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Restrictions</h3>
          <ol className="space-y-2 text-lg text-gray-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-white font-semibold">1.</span>
              <span>We are only able to use natural convection to cool our CPU. No fans or liquid.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white font-semibold">2.</span>
              <span>We are only able to use Fusion 360 to guide our decision-making process.</span>
            </li>
          </ol>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed">
          Currently on the market there are several types of heatsink designs that are used to cool down CPUs depending on the performance criteria, but generally natural convector heatsinks are used to cool down low temperature/performance CPUs.
        </p>

        <div className="flex justify-center pt-6">
          <Image
            src="/heatsink/noctua.png"
            height={600}
            width={600}
            alt="Noctua CPU Cooler for Natural Convection"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <p className="text-center text-base text-gray-400 italic">Noctua CPU cooler designed for natural convection alongside a fan</p>

        <p className="text-lg text-gray-300 leading-relaxed">
          In my preliminary research, I found a couple of interesting articles and features regarding how natural convector heatsinks are designed. Generally, natural convection heatsinks are designed around thin, vertical fins that allow for the easy movement of air throughout the entire heatsink.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          The goal is to facilitate the movement of hot air out of the top of the heatsink while making room for cold air to come in and fill the new space created. This allows the CPU to be cooled effectively and is crucial to creating a high functioning heatsink design.
        </p>
      </section>

      {/* Initial Design & Iterations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Initial Heatsink Design & Iterations</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          From our research, we identified what we wanted to solve and the type of structure that we wanted to create in our design. But our goal was to make informed decisions on each of our features.
        </p>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          From the initial tree-like design, we modelled a variety of features onto the initial structure. From there we utilized Fusion360's thermal simulations to measure if the maximum temperature measured increased or decreased.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          It is important to note, that Fusion360's thermal simulations is not a computational fluid simulation which resulted in inaccurate results. However, Fusion360 is a good first step towards getting a first version of our design.
        </p>

        <div className="flex justify-center pt-6">
          <Image
            src="/heatsink/iterations.png"
            height={700}
            width={700}
            alt="Heatsink Design Iteration Overview"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="space-y-6 pt-8">
          <h3 className="text-xl font-semibold text-white">Holes</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            For optimal airflow, we experimented with different hole quantities throughout the entire design. The idea was to allow hot air to flow upward (buoyancy) between tree branches while reducing total volume:
          </p>

          <div className="flex justify-center">
            <Image
              src="/heatsink/holes.png"
              height={700}
              width={700}
              alt="Iteration Graph of Holes vs Temperature"
              unoptimized
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <p className="text-center text-base text-gray-400 italic">Iteration graph of number of holes in relation to temperature</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Lattice Structure</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            During our research, we found many heatsink designs that utilized lattice structures alongside fans to optimize heat dissipation. In our case, since we decided to specify ourselves to only natural convection, <strong className="text-white">a volumetric lattice would have many microstructures where airflow would be interrupted and become turbulent resulting in decreased performance.</strong>
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Fins</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Numerous characteristics of the fins, such as their quantity, curvature, and shape, were modified and fine-tuned.
          </p>

          <div className="flex justify-center">
            <Image
              src="/heatsink/fins.png"
              height={700}
              width={700}
              alt="Temperature Values per Design Iteration"
              unoptimized
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <p className="text-center text-base text-gray-400 italic">Temperature values simulated per iteration of our design</p>
        </div>
      </section>

      {/* Topology Optimization Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Topology Optimized Heatsinks</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          However, looking at the initial heatsink design, we were curious as to why it looked like a tree. Doing some further research, we found some really interesting articles based on optimized heatsink structures.
        </p>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          In an article written by Ho et al, using topology optimization and additive manufacturing, they found that a tree-like structure resulted in better thermal performance to dissipate heat from a chip.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          In another article written by Han-Ling Li et al, they utilized a black-box topology optimization simulation to create additional designs for natural convection problems:
        </p>

        <div className="pt-6">
          <Carousel className="p-1">
            <CarouselContent>
              <CarouselItem>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/heatsink/hoetal.png"
                      height={650}
                      width={650}
                      alt="Topology-optimized Structures by Ho et al"
                      unoptimized
                      className="rounded-lg object-contain max-h-full shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">Topology-optimized structures developed based on two-dimensional steady state heat transfer in the Ho et al study</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/heatsink/hangli.png"
                      height={500}
                      width={500}
                      alt="Designs by Han-Ling Li Study"
                      unoptimized
                      className="rounded-lg object-contain max-h-full shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">Designs obtained by TO for different heat sink volumes in the Han-Ling Li study</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/heatsink/seeetal.png"
                      height={600}
                      width={600}
                      alt="Designs by Han-Ling Li Study"
                      unoptimized
                      className="rounded-lg object-contain max-h-full shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">Designs obtained by TO for different heat sink volumes in the Han-Ling Li study</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

      

        <p className="text-lg text-gray-300 leading-relaxed">
          We found these structures really interesting due to their influence from nature and decided to model our final heatsink off of these structures.
        </p>
      </section>

      {/* Roots Design Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Roots of the Tree</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          After completing our hole and fin design, we noticed that the hottest parts were at the bottom near the edges of the CPU where the heatsink was not touching and at the base.
        </p>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          To combat the high temperatures at the base, we experimented with adding different amounts of mass while keeping the tree branch design. We also saw that consistently the maximum temperatures in the overall assembly were found at the edges of the CPU that were in contact with air.
        </p>

        <div className="pt-6">
          <Carousel className="p-1">
            <CarouselContent>
              <CarouselItem>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/heatsink/bottom-root.png"
                      height={650}
                      width={650}
                      alt="Topology-optimized Structures by Ho et al"
                      unoptimized
                      className="rounded-lg object-contain max-h-full shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">Topology-optimized structures developed based on two-dimensional steady state heat transfer in the Ho et al study</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/heatsink/press-fit.png"
                      height={500}
                      width={500}
                      alt="Designs by Han-Ling Li Study"
                      unoptimized
                      className="rounded-lg object-contain max-h-full shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">Designs obtained by TO for different heat sink volumes in the Han-Ling Li study</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
            <div className="space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/heatsink/root-graph.png"
                  height={750}
                  width={750}
                  alt="Initial Design Temperature Simulation"
                  unoptimized
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <p className="text-center text-base text-gray-400 italic">Temperature simulation per root design.</p>
            </div>
      {/* Final Design Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Final Design</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          Ultimately, we found ourselves being constrained by the time limit set by the challenge. We initially had one full week to complete our heatsink design but creating mini "studies" for each feature ate up a lot of the time we had.
        </p>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Initial vs Final Temperature Results</h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/heatsink/initial-temp.png"
                  height={650}
                  width={650}
                  alt="Initial Design Temperature Simulation"
                  unoptimized
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <p className="text-center text-base text-gray-400 italic">Temperature simulation for first deliverable</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/heatsink/final-temp.png"
                  height={650}
                  width={650}
                  alt="Final Design Temperature Simulation"
                  unoptimized
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <p className="text-center text-base text-gray-400 italic">Temperature graph of final model</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Image
            src="/heatsink/final-multiview-drawing.png"
            height={500}
            width={700}
            alt="Final Design Multi-view Drawing"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <p className="text-center text-base text-gray-400 italic">The final design multi-view drawing</p>
      </section>

      {/* Manufacturing Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Manufacturing</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          Initially, we assumed that metal 3D printing would solve all of our manufacturing concerns. Since we had internal holes and complex structures that would either be extremely difficult to manufacture.
        </p>

        <div className="flex justify-center pb-6">
          <Image
            src="/heatsink/3d-printing-examples.png"
            height={400}
            width={600}
            alt="3D Printed Heatsink Examples"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-300 leading-relaxed">
          During our research, we saw a lot of really cool 3D printed designs for natural convection and fan powered CPU heatsinks for a variety of additive manufacturing competitions. Additionally, a lot of the tree-shaped optimized heatsinks also used SLM printing to create prototypes for their parts.
        </p>

        <div className="space-y-4 pt-6">
          <div className="flex justify-center">
            <Image
              src="/heatsink/3d-print.jpg"
              height={400}
              width={600}
              alt="SLM Printed Topology Optimized Heatsink"
              unoptimized
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <p className="text-center text-base text-gray-400 italic">SLM printed topology optimized heatsink by See et al</p>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed">
          However, since our main goal was to reduce the maximum temperature as much as possible, we decided that 3D printing would be feasible for prototyping but not for actually creating a mass-produced product due to concerns with porosity and lack of material selection.
        </p>

        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-semibold text-white">CNC Milling</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Advantages</h4>
              <ul className="space-y-2 text-lg text-gray-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>High level of precision compared to other metalworking applications, allowing our prototypes to stay consistent and precise</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Disadvantages</h4>
              <ul className="space-y-2 text-lg text-gray-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Expensive to program the path and to operate the machine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Would require the part to be separated into different pieces that are machined separately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Metal would be wasted as large blocks of metal are milled from a block, thus inefficient costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Extremely difficult to mill the holes between the heatsink fins, as new designs would be necessary to accommodate the mill</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-semibold text-white">Injection Moulding</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Advantages</h4>
              <ul className="space-y-2 text-lg text-gray-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Allows for lowered material use, creating less waste per volume</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Heatsink fin holes can be manufactured without complication by placing a cylinder inside of the mold</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Disadvantages</h4>
              <ul className="space-y-2 text-lg text-gray-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Imprecise nature of the molding. However, since the final heatsink does not undergo any physical strain or hold fluids, it does not need to be extremely precise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>High porosity that would affect performance of the heatsink</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Difficult to mold pure aluminum and copper which results in porosity. Might be better to use an alloy instead</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Materials</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          In the evaluation of <strong className="text-white">materials</strong> for our heatsink design, some standard choices like aluminum, copper, and silver were considered.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Cost vs Performance</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Copper offers superior thermal performance at a higher cost, while aluminum is the most affordable but less efficient in high-heat scenarios. Silver is too expensive for practical use despite its slight conductivity advantage over copper.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Manufacturability</h3>
            <ul className="space-y-2 text-lg text-gray-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-white mt-2">•</span>
                <span><strong className="text-white">CNC:</strong> Copper is abrasive on tools but allows precise finishes, aluminum is easy to machine with low cost, and silver is soft, prone to deformation, and inefficient to machine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-2">•</span>
                <span><strong className="text-white">Injection Moulding:</strong> Aluminum is by far the easiest to mold as copper has issues with oxidation, high melting points, and poor flow in molding processes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Image
            src="/heatsink/material-comparison.png"
            height={400}
            width={600}
            alt="Material Performance Comparison"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-300 leading-relaxed pt-4">
          Another idea would be to create a heatsink with a mix of copper and aluminum. We would place copper near the CPU where more heat dissipation is required and aluminum on areas where performance is not as important.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          This can be done through a specialized brazing and plating process to combine the two metals, but the research is still in early stages and not commercially viable.
        </p>
      </section>

      {/* Future Steps Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Future Steps</h2>
        
        <ul className="space-y-3 text-lg text-gray-300 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-white mt-2">•</span>
            <span>Running CFD simulations alongside thermal FEA simulations</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white mt-2">•</span>
            <span>High-performance organizations, like F1 teams, develop algorithms to automate pre and post processing CFD simulations for their aerodynamic studies. To increase the efficiency of the workflow, scripts can be used to adjust boundary conditions and visualize data</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white mt-2">•</span>
            <span>Black-box topology optimizations</span>
          </li>
        </ul>
      </section>

    </article>
  </div>
</div>
        <Footer />
      </main>
    </SidebarProvider>
  );
}