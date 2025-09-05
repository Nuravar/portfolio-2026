"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Silk from '@/components/ui/silk';


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
                <BreadcrumbPage className="text-white">Robot Operated Bed</BreadcrumbPage>
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
              <Silk
                speed={5}
                scale={1}
                color="#915E5C"
                noiseIntensity={1.5}
                rotation={0}
              />

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
                  <h1 className="blog-title">
                    Robot Operated Bed
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl leading-relaxed">
                  Designed and built a line-following robotic hospital bed porter that automates patient transport using sensor-based navigation, reducing nurse workload and improving hospital efficiency.                
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
                    Computer Vision
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Role */}
                <div className="text-[#E3DEE0]">
                  <span className="font-semibold text-white">Role:</span> Prototyping
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
                            onClick={() => window.open('https://www.linkedin.com/in/ahmedzabtia/', '_blank')}
                            className="transition-transform hover:scale-110 hover:z-10 relative"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">AZ</AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className='text-white'>
                          <p>Ahmed Zabtia</p>
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
                    Line Following • Sensor Navigation • PID Control • Raspberry Pi • Arduino • 3D Prototyping • Modular Design • Location Tracking • Obstacle Avoidance • Healthcare Robotics                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content section with background color */}
        <div className="bg-[#131110] text-white">
          <div className="p-6 lg:p-13 max-w-4xl mx-auto">
            <article className="space-y-8">


              {/* Testing & Verification Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Testing & Verification</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  In order to examine whether our physical prototype was functional, we created a testing platform to visually inspect our software performance. Our verification plan involved creating the Melbourne Grand Prix circuit for comprehensive testing.
                </p>

                {/* Test Track Image */}
                <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-6 text-center">
                  <p className="text-yellow-300 font-semibold">🏁 INSERT IMAGE: Test Track</p>
                  <p className="text-sm text-yellow-300 mt-2">Melbourne Grand Prix circuit mockup for verification testing (Untitled 7.png)</p>
                </div>

                {/* Verification Steps Table */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Verification Plan Steps</h3>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-12 gap-2 font-semibold text-gray-300 border-b border-gray-600 pb-2">
                      <div className="col-span-1">Step</div>
                      <div className="col-span-8">Description</div>
                      <div className="col-span-3">Expected Outcome</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-gray-300">
                      <div className="col-span-1">1</div>
                      <div className="col-span-8">Assemble completion course with black line and walls</div>
                      <div className="col-span-3">Ready test environment</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-gray-300">
                      <div className="col-span-1">2</div>
                      <div className="col-span-8">Place camera above circuit and start robot</div>
                      <div className="col-span-3">Begin video recording</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-gray-300">
                      <div className="col-span-1">3</div>
                      <div className="col-span-8">Review footage for wall collisions and line following</div>
                      <div className="col-span-3">Pass/fail analysis</div>
                    </div>
                  </div>
                </div>

                {/* Test Results */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">Test Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-900/30 border border-green-600 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-400 mb-2">✓ Passed Tests</h4>
                      <ul className="text-sm text-green-300 space-y-1">
                        <li>• Stayed centered on black line</li>
                        <li>• Smooth traversal with minimal stops</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-900/30 border border-yellow-600 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">⚠ Partial Success</h4>
                      <ul className="text-sm text-yellow-300 space-y-1">
                        <li>• Speed limited by camera framerate</li>
                        <li>• Struggled with sharp turns (camera only)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Video Placeholder */}
                <div className="bg-purple-600/20 border border-purple-500 rounded-lg p-6 text-center">
                  <p className="text-purple-300 font-semibold">🎥 INSERT VIDEO: ROB Verification</p>
                  <p className="text-sm text-purple-300 mt-2">Demo video showing robot following track (ROB-Verification.mov)</p>
                </div>
              </section>

              {/* Remote Communication Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Remote Communication & Control</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Although we did not implement it into our final physical prototype due to time constraints, through Tailscale and WebSockets, I was able to remotely communicate with the Raspberry Pi-based RC car and send it instructions. The plan was to use remote start signals to initiate the line-following program.
                </p>

                {/* Remote Control Demo Video */}
                <div className="bg-cyan-600/20 border border-cyan-500 rounded-lg p-6 text-center">
                  <p className="text-cyan-300 font-semibold">📡 INSERT VIDEO: Remote Control Demo</p>
                  <p className="text-sm text-cyan-300 mt-2">WebSocket communication demonstration (VID_20240331_022100.mp4)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technology Stack</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong>Tailscale VPN:</strong> Secure remote network access</li>
                      <li>• <strong>WebSocket Server:</strong> Real-time bidirectional communication</li>
                      <li>• <strong>Raspberry Pi:</strong> Embedded control system</li>
                      <li>• <strong>Remote Commands:</strong> Start/stop line following program</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Setup Process</h3>
                    <p className="text-gray-300 text-sm">
                      Tailscale creates a remote VPN on the current or external WiFi that allows two devices to locally communicate with each other without any complex setup. Through WebSockets, we created a server on the Raspberry Pi that enabled bidirectional signal communication.
                    </p>
                  </div>
                </div>
              </section>

              {/* Lessons Learned Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Lessons Learned & Future Improvements</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Throughout this project, I achieved most of my initial goals, fueled by a longstanding interest in robotics and a desire to create something both functional and visually appealing. However, the project faced several challenges that provided valuable learning experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* What I Learned */}
                  <div className="bg-green-900/20 border border-green-600 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-400 mb-3">🎓 What I Learned</h3>
                    <ul className="text-green-300 space-y-2 text-sm">
                      <li>• Crucial role of design inputs and outputs</li>
                      <li>• Value of FMEA and QFD tables for risk analysis</li>
                      <li>• Importance of early feasibility evaluation</li>
                      <li>• Integration of hardware and software systems</li>
                    </ul>
                  </div>

                  {/* Challenges Faced */}
                  <div className="bg-red-900/20 border border-red-600 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Challenges Faced</h3>
                    <ul className="text-red-300 space-y-2 text-sm">
                      <li>• Time management difficulties</li>
                      <li>• Mechanical assembly took longer than expected</li>
                      <li>• Phototransistor component failures</li>
                      <li>• Code development was underrepresented</li>
                    </ul>
                  </div>

                  {/* Future Improvements */}
                  <div className="bg-blue-900/20 border border-blue-600 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">🚀 For The Future</h3>
                    <ul className="text-blue-300 space-y-2 text-sm">
                      <li>• Prioritize physical construction from the start</li>
                      <li>• Consider purchasing existing platforms for faster development</li>
                      <li>• Use simulation software for behavior testing</li>
                      <li>• Focus efforts rather than dividing attention</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">Alternative Approaches</h3>
                  <p className="text-gray-300">
                    In hindsight, I could have opted for simpler solutions, like purchasing an Arduino line-following robot kit from Amazon to test our code. Other alternatives could have involved using simulation software to mimic the robot's behavior or leveraging existing open-source platforms to speed up development.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Takeaway</h3>
                  <p className="text-gray-300">
                    <em>"Rather than placing primary focus on coding, I'll prioritize the physical construction of the robot from the start. My aim is to smooth out the development process, reducing the likelihood of encountering unexpected delays and ensuring a more streamlined path to completion."</em>
                  </p>
                </div>
              </section>

              {/* Technical Specifications Summary */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Technical Specifications Summary</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="bg-gray-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center text-white">Scale</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold text-blue-400">1:6</div>
                      <p className="text-xs text-gray-400 mt-1">Hospital mockup scale</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center text-white">Line Accuracy</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold text-green-400">±2.35mm</div>
                      <p className="text-xs text-gray-400 mt-1">At 1:6 scale</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center text-white">Safety Factor</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold text-yellow-400">3.6</div>
                      <p className="text-xs text-gray-400 mt-1">Minimum FEA result</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center text-white">Target Speed</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold text-purple-400">10-15</div>
                      <p className="text-xs text-gray-400 mt-1">km/hr hospital speed</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Image Gallery Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Project Gallery</h2>
                
                {/* Main prototype images carousel */}
                <Carousel className="p-1">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="bg-indigo-600/20 border border-indigo-500 rounded-lg p-8 text-center h-64 flex flex-col justify-center">
                        <p className="text-indigo-300 font-semibold text-lg">🤖 Robot Assembly</p>
                        <p className="text-sm text-indigo-300 mt-2">Complete R.O.B prototype with all components</p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-pink-600/20 border border-pink-500 rounded-lg p-8 text-center h-64 flex flex-col justify-center">
                        <p className="text-pink-300 font-semibold text-lg">🔧 Hardware Layout</p>
                        <p className="text-sm text-pink-300 mt-2">Circuit diagrams and component placement</p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-emerald-600/20 border border-emerald-500 rounded-lg p-8 text-center h-64 flex flex-col justify-center">
                        <p className="text-emerald-300 font-semibold text-lg">🏗️ 3D CAD Model</p>
                        <p className="text-sm text-emerald-300 mt-2">SolidWorks assembly and FEA analysis</p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-amber-600/20 border border-amber-500 rounded-lg p-8 text-center h-64 flex flex-col justify-center">
                        <p className="text-amber-300 font-semibold text-lg">🏁 Test Track</p>
                        <p className="text-sm text-amber-300 mt-2">Melbourne Grand Prix verification circuit</p>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </section>

              {/* FEA Analysis Section */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Structural Analysis & FEA Study</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  In addition to the robotic prototype, our team designed a full 3D assembly to reflect our final prototype. We conducted a comprehensive static FEA analysis to ensure structural integrity under expected loads.
                </p>

                {/* FEA Images Carousel Placeholder */}
                <div className="bg-teal-600/20 border border-teal-500 rounded-lg p-6 text-center">
                  <p className="text-teal-300 font-semibold">🔬 INSERT CAROUSEL: FEA Analysis Images</p>
                  <p className="text-sm text-teal-300 mt-2">SolidWorks FEA study images (Untitled 8-15.png)</p>
                  <p className="text-sm text-teal-300">• Face selection • Applied forces • Mesh generation • Stress analysis • Safety factor results</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Key FEA Results</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong>Load Tested:</strong> 3000 N (300 kg equivalent)</li>
                      <li>• <strong>Minimum Safety Factor:</strong> 3.6</li>
                      <li>• <strong>Plastic Deformation:</strong> None detected</li>
                      <li>• <strong>Stress Concentration:</strong> At attachment points</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Material Strategy</h3>
                    <p className="text-gray-300 text-sm">
                      Our strategy focused on utilizing readily available and cost-effective materials. This approach ensures affordability and simplifies sourcing, making it easier to iterate and refine our design.
                    </p>
                  </div>
                </div>
              </section>
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Introduction</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  In modern medicine, hospitals are understaffed and nurses are overworked. This results in nurses having to focus on tasks that are outside of what is actually important, treating patients. Our device <strong>R.O.B (Robot Operated Bed) utilizes a sensor system to follow the lines commonly found on hospital floors to get from one point to another</strong> with the goal of delivering patients, goods, or information.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hospitals today face funding shortages, limiting their ability to handle patient influxes from disasters, pandemics, or mass casualties, demanding swift, efficient care. <strong>Nurses, crucial for patient care, are often overwhelmed with tasks</strong> like patient transport and delivering samples, leading to burnout and reduced care quality. <strong>Robotic porters present a solution by taking over these tasks</strong>, working non-stop, and improving accuracy, which boosts hospital efficiency and lets nurses focus on essential care roles.
                </p>
              </section>

              {/* Project Image Placeholder */}
              <div className="bg-blue-600/20 border border-blue-500 rounded-lg p-6 text-center">
                <p className="text-blue-300">🤖 INSERT PROJECT IMAGE: R.O.B prototype assembly</p>
                <p className="text-sm text-blue-300 mt-2">Main robot prototype photo from Untitled.png</p>
              </div>
              
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Project Impact</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our porter allows for the automation of menial hospital tasks in important situations. <strong>Robotic porters present a solution by taking over these tasks</strong>, working non-stop, and improving accuracy, which boosts hospital efficiency and lets nurses focus on essential care roles, <strong>enhancing patient support and overall care quality.</strong>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">Line Following Accuracy</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">±10%</div>
                      <p className="text-xs text-muted-foreground mt-1">Error from center line</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">Load Capacity</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">300kg</div>
                      <p className="text-xs text-muted-foreground mt-1">Maximum supported weight</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">Battery Life</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">12hr</div>
                      <p className="text-xs text-muted-foreground mt-1">Continuous operation</p>
                    </CardContent>
                  </Card>
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