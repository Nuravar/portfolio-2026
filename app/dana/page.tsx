"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Lightbulb  } from "lucide-react";
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Timeline from "@/components/coop-timeline";
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
                  <h1 className="blog-title ">
                    Dana Incorporated
                  </h1>
                </div>
                
                <h3>
                  Developed new technologies and techniques for manufacturing electric vehicle battery cooling systems with a focus on manufacturing and materials engineering.
                </h3>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">May 2024 - August 2025</p>
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
                  <p>
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
              <section className="space-y-6">
                
                <div className="grid gap-8">
                  <div className="space-y-4">
                   

                    <h3>
                      Electric vehicle heat exchangers are the unsung heroes of EV performance. They are critical components that regulate temperature in the battery module, electric motor, inverter, and vehicle computing systems. Without proper thermal management, EVs can't meet their range requirements, and more importantly, they become safety hazards.
                    </h3>
                    
                     <h3>
                      At Dana Incorporated, I spent 16 months working on the complete product development lifecycle of brazed automotive heat exchangers for EVs currently on the road and coming to market. 
                    </h3>
        
                  </div>
                </div>

                {/* Timeline Visual */}
                <div className="hidden md:block">
                  <Timeline/>
                </div>
                
                <section className="space-y-6">
                
                <p className="text-lg text-gray-300 leading-relaxed">
                    As an intern, I was the bridge between engineering design and manufacturing reality. My primary focus was on battery cold plates for Jaguar Land Rover (JLR) and other major automotive manufacturers.
                </p>
                 <div className="flex justify-center pt-4 overflow-hidden ">
                  <Image 
                    src="/dana/coldplate.jpg"
                    height={700}
                    width={700}
                    alt="Noctua CPU Cooler for Natural Convection"
                    unoptimized
                    className=" object-cover shadow-lg rounded-lg"
                  />  
                </div>
                <div className="text-center text-sm text-gray-400 italic">Diagram of a battery cold plate from Hou et al, note the cooling channels where coolant flows through the cold plate.</div>

                <p>
                  Battery cold plates are heat-exchanging devices, typically made of aluminum or copper, that absorb heat from battery cells and transfer it to a circulating liquid coolant. At Dana, the main technology that I worked with was brazing. 
                </p>
                <div className="flex justify-center pt-4 overflow-hidden rounded-lg">
                  <Image 
                    src="/dana/cfdcoldplate.png"
                    height={800}
                    width={800}
                    alt="Noctua CPU Cooler for Natural Convection"
                    unoptimized
                    className=" object-cover shadow-lg scale-y-115 scale-x-102 "
                  />  
                </div>
                <div className="text-center text-sm text-gray-400 italic">CFD of the movement of coolant through a battery cold plate.</div>
                <p>
                    <strong className="text-white">Brazing</strong> is a metal joining process where two pieces of metal are fused together using a filler material (called clad) that melts at a lower temperature than the base metals. Unlike welding, which melts the base materials themselves, brazing creates strong joints while preserving the structural integrity of the original metals.
                  </p>
                   <div className="flex justify-center pt-4 overflow-hidden">
                  <Image 
                    src="/dana/brazed.png"
                    height={600}
                    width={600}
                    alt="Noctua CPU Cooler for Natural Convection"
                    unoptimized
                    className=" rounded-lg object-cover shadow-lg"
                  />  
                </div>
                <div className="text-center text-sm text-gray-400 italic">Two metal core plates after brazing, note the internal fillets.</div>
                <p>
                  For cold plates, brazing is ideal because it creates leak-tight seals for internal coolant channels while maintaining excellent thermal conductivity. The process allows us to manufacture complex internal geometries cost-effectively at production scale - something that would be impossible with traditional machining or welding.
                </p>
                <p>
                  While these components appear deceptively simple - essentially two formed metal plates brazed together - they're among the most safety-critical parts in an electric vehicle. This is due to concerns about coolant from the cold plate leaking or the battery causing a short leading to a thermal runaway event. 
                </p>
                 <div className="flex justify-center pt-4 overflow-hidden ">
                  <Image 
                    src="/dana/forming.png"
                    height={500}
                    width={500}
                    alt="Noctua CPU Cooler for Natural Convection"
                    unoptimized
                    className=" object-cover shadow-lg rounded-lg"
                  />  
                </div>
                <div className="text-center text-sm text-gray-400 italic">The way that cold plates are created are by combining several sheets of formed metal to make internal channels.</div>
                
                <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">Thermal runaway</strong> occurs when a battery cell overheats and triggers a self-sustaining chain reaction. The cell generates more heat than it can dissipate, causing neighboring cells to overheat in a domino effect. This can result in fires that burn for hours and are extremely difficult to extinguish. This is why every feature on our battery cold plates scored 8-10 on the FMEA (Failure Mode and Effects Analysis) table - a single coolant leak or electrical short could be catastrophic.
                  </p>
                <h2 >Product Development Engineering: From Prototype to Production</h2>
                <div className="bg-secondary-900/20 border border-border-500/30 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-amber-500">1000+</div>
                      <div className="text-gray-300">Parts Processed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-500">$500K+</div>
                      <div className="text-gray-300">Part Value</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-500">100+</div>
                      <div className="text-gray-300">Hours Saved</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">
                    Led battery cooling system optimization studies and failure analysis on 1000+ prototypes, implementing cost-reduction initiatives yielding 11% savings per part. Automated GD&T tracking with Python scripts and designed validation fixtures, reducing manual work by several hours weekly.
                  </p>
                </div>
               <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h4 className="text-lg font-semibold mb-6">My Core Responsibilities</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h5 className="text-sm font-medium text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        Manufacturing Process
                      </h5>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                        <li>Metal forming and shaping</li>
                        <li>Brazing process optimization</li>
                        <li>X-ray validation of joint quality</li>
                        <li>GD&T validation using CMM</li>
                        <li>Powder coating application</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h5 className="text-sm font-medium text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        Design Verification
                      </h5>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                        <li>Leak testing protocols</li>
                        <li>Pressure and burst testing</li>
                        <li>Corrosion resistance testing</li>
                        <li>Electrical isolation (HIPOT) testing</li>
                        <li>Test fixture design in PTC Creo</li>
                      </ul>
                    </div>
                  </div>
                </div>
             <p>
                I spearheaded developmental studies focused on advancing manufacturing processes, particularly investigating laser welding alternatives to traditional brazing methods and optimizing rollbond manufacturing techniques. These studies involved comprehensive cost-benefit analyses and performance comparisons to identify opportunities for process improvements that could enhance product quality while reducing manufacturing complexity.
              </p>

              <p>
                My hands-on experience extended directly to the production line, where I conducted prototyping activities and validation testing including hipot electrical isolation testing, pressure testing, and dimensional verification. This direct involvement with production processes provided invaluable insights into real-world manufacturing challenges and enabled me to develop practical solutions that could be immediately implemented on the factory floor.
              </p>

              <p>
                Recognizing opportunities for efficiency improvements, I developed automation solutions across multiple systems throughout the facility. These ranged from automated data collection systems for quality control processes to streamlined reporting tools that eliminated manual data entry tasks, collectively saving dozens of hours of manual work each week across the engineering team.
              </p>
                
                </section>
                <section className="space-y-6">
                  <h2>Materials Engineering R&D: Advanced Alloy Research</h2>
                  <div className="bg-secondary-900/20 border border-border-500/30 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-orange-500/80">1000+</div>
                        <div className="text-gray-300">Samples Tested</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-500/80">$200K+</div>
                        <div className="text-gray-300">Cost Reductions</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-500/80">New Tech</div>
                        <div className="text-gray-300">Implementation</div>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4">
                     Conducted advanced materials research on aluminum and copper brazing alloys, testing 1,000+ samples to optimize tensile strength, corrosion resistance, and thermal conductivity, supporting $200K+ in cost-reduction initiatives through strategic material replacements.
                    </p>
                  </div>

                  <p>
                    My responsibilities in the Materials Engineering role centered on comprehensive evaluation of brazing alloys used in Dana's global heat exchanger production. I managed the complete testing pipeline from sample preparation through data analysis, coordinating with suppliers worldwide to evaluate new alloy compositions and validate performance specifications against Dana's stringent quality requirements.
                  </p>

                  <p>
                    The material alloy testing program involved systematic evaluation of mechanical properties including tensile strength, yield strength, and elongation characteristics across temperature ranges representative of automotive operating conditions. I conducted accelerated aging studies to simulate long-term material degradation and performed comparative analyses between candidate alloys to identify optimal compositions for specific applications.
                  </p>

                  <p>
                    Brazing quality assessment formed a critical component of my research, involving metallurgical analysis of joint integrity, filler metal flow characteristics, and interface bonding quality. I developed standardized testing protocols for evaluating brazing performance across different alloy combinations and process parameters, creating databases that informed global manufacturing process optimization decisions.
                  </p>

                  <p>
                    The implementation of Digital Image Correlation (DIC) technology revolutionized our materials testing capabilities, enabling real-time visualization of strain distribution patterns during mechanical testing. This advanced optical measurement system provided unprecedented insights into material failure mechanisms and stress concentration effects, supporting more accurate material selection decisions and improved product design optimization.
                  </p>

                </section>
              </section>
            </article>
          </div>
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
} 
                      
                      
                      
                      
     
          
                
        