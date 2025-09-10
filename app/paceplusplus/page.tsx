"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import FaultyTerminal from "@/components/ui/terminal";
import { ExternalLinkCard } from "@/components/link-preview";
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
                <BreadcrumbLink
                  href="/"
                  className="text-white/70 hover:text-white"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Pace++</BreadcrumbPage>
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
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  position: "relative",
                  pointerEvents: "auto",
                }}
              >
                <FaultyTerminal
                  scale={2.5}
                  gridMul={[2, 1]}
                  digitSize={1.2}
                  timeScale={0.3}
                  pause={false}
                  scanlineIntensity={0.1}
                  glitchAmount={0.1}
                  flickerAmount={1}
                  noiseAmp={1}
                  chromaticAberration={0}
                  dither={0.5}
                  curvature={0}
                  tint="#4E312F"
                  mouseReact={false}
                  mouseStrength={0.5}
                  pageLoadAnimation={false}
                  brightness={1}
                />
              </div>

              {/* Optional Overlay for readability */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
            </div>
            {/* Gradient fade to #131110 at bottom */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_70%,#131110_100%)] "></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex-1 flex flex-col justify-center p-6 lg:p-10 max-w-7xl mx-auto text-white pt-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Title and Description */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="blog-title">Pace++</h1>
                </div>

                <p className="text-xl lg:text-2xl leading-relaxed">
                  A comprehensive pacemaker simulation system featuring 8 pacing
                  modes, real-time ECG monitoring, and secure patient data
                  management with MATLAB Simulink integration
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Jan 2024</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-2">
                {/* Industry */}
                <div>
                  <Badge variant="default" className="text-white">
                    Embedded Medical Device
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Role */}
                <div className="text-[#E3DEE0]">
                  <span className="font-semibold text-white">Role:</span>{" "}
                  Full-Stack Developer
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#E3DEE0]/30 to-transparent"></div>

                {/* Contributors */}
                <TooltipProvider>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">
                      Contributors:
                    </span>
                    <div className="flex -space-x-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/in/varun-ram/",
                                "_blank"
                              )
                            }
                            className="transition-transform hover:scale-110 hover:z-10 relative cursor-pointer"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">
                                VK
                              </AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="text-white">
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
                  <span className="text-white font-semibold block">
                    Key Focus Areas:
                  </span>
                  <p className="text-[#E3DEE0] leading-relaxed">
                    Python GUI Development • MATLAB Simulink • Serial
                    Communication • Data Encryption • Real-Time Data
                    Visualization • STM32 Programming • Tkinter Interface Design
                    • Hardware Integration • User Authentication • GitHub
                    Version Control
                  </p>
                </div>
                <ExternalLinkCard
                  title="GitHub Repository"
                  description="Explore the complete Pace++ codebase on our Github repository."
                  url="https://github.com/PacePlusPlus/PacePlusPlus"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main content section with background color */}
        {/* Main content section with background color */}
        <div className="bg-[#131110] text-white">
          <div className="p-6 lg:p-12 max-w-4xl mx-auto">
            <article className="space-y-6">
              <section className="space-y-6">
                <h2>Project Overview</h2>

                <div className="flex justify-center pb-6">
                  <Image
                    src="/pace-plus-plus/overview-image.png"
                    height={600}
                    width={800}
                    alt="Pace++ Pacemaker Interface Overview"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>

                <p>
                  We developed a pacemaker prototype that covers all of the main
                  features of pacemaker software today defined by Boston
                  Scientific. <strong className="text-white">Pace++</strong> is
                  a simulated pacemaker built to visually and functionally
                  represent the various functions of modern pacemakers today.
                  The following project is based on Boston Scientific's
                  pacemaker specifications alongside implementing 8 of their
                  defined pacemaker pacing modes, a real time electrocardiogram
                  display, and local encrypted user data storage.
                </p>
              </section>

              {/* My Role Section */}
              <section className="space-y-6">
                <h2>My Role</h2>
                <ul className="custom-ul">
                  <li className="custom-li">
                    <span>
                      Created the desktop graphical user interface for all
                      frontend interactions
                    </span>
                  </li>
                  <li className="custom-li">
                    <span>
                      Utilized MATLAB Simulink to create the serial
                      communication between the desktop and the K64F board
                    </span>
                  </li>
                  <li className="custom-li">
                    <span>
                      Developed the backend for displaying user data, simulated
                      pacing data, and storing user information
                    </span>
                  </li>
                </ul>
              </section>

              {/* Technical Architecture Section */}
              <section className="space-y-6">
                <h2>Python Communicates with STM32 Board via Simulink</h2>

                <div className="flex justify-center pb-6">
                  <Image
                    src="/pace-plus-plus/architecture-diagram.png"
                    height={500}
                    width={700}
                    alt="Pace++ System Architecture"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>

                <p>
                  <strong className="text-white">Pace++</strong> is a simulated
                  pacemaker designed with Python and MATLAB Simulink. The
                  front-end of the project was designed and developed by me,
                  with the purpose of being the connection between the
                  Simulink-based STM32 board and the Python front-end that
                  controls the board.
                </p>

                <p>
                  Our pacemaker design utilized a board that simulated the
                  heart's electrical pulses. Through this board,{" "}
                  <strong className="text-white">
                    we created 8 unique modes
                  </strong>{" "}
                  to pace different aspects and conditions of heart disease.
                  These modes pace the atrium or ventricle at either fixed
                  rates, uneven intervals, or during physical activity through
                  the in-built accelerometer. The Python script then displays
                  the electrical signals real-time to a doctor using the
                  software, allowing them to make fine adjustments per each
                  individual patient.
                </p>
              </section>

              {/* Features Section */}
              <section className="space-y-6">
                <h2>
                  Real-time Display, Data Encryption, Serial Communication, and
                  User Authentication
                </h2>

                <div className="flex justify-center pb-6">
                  <Image
                    src="/pace-plus-plus/login-interface.png"
                    height={500}
                    width={700}
                    alt="Pace++ Login Interface"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>

                <p>
                  Through Python's tkinter, we created a secure interface that
                  allows for the modification of the pacemaker. The login screen
                  utilizes a dictionary to separate user data involving both
                  login and pacemaker parameters, collects information on the
                  current board serial number, and collects information on login
                  times.
                </p>

                <div className="space-y-4">
                  <h3>Features of the GUI</h3>
                  <ul className="custom-ul">
                    <li className="custom-li">
                      <span>Real-time display of simulated heartbeat</span>
                    </li>
                    <li className="custom-li">
                      <span>Patient data to be saved and modified</span>
                    </li>
                    <li className="custom-li">
                      <span>Encryption of patient data</span>
                    </li>
                    <li className="custom-li">
                      <span>Serial communication to the K64F board</span>
                    </li>
                    <li className="custom-li">
                      <span>Dark and light modes</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3>Features of the Simulink</h3>
                  <ul className="custom-ul">
                    <li className="custom-li">
                      <span>Simulated electrical pacing</span>
                    </li>
                    <li className="custom-li">
                      <span>Hardware separation</span>
                    </li>
                    <li className="custom-li">
                      <span>Distinct pacing modes</span>
                    </li>
                    <li className="custom-li">
                      <span>Rate Adaptive Pacing</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Main Dashboard Section */}
              <section className="space-y-6">
                <h2>Creating a Distinct Main Dashboard</h2>

                <div className="flex justify-center pb-6">
                  <Image
                    src="/pace-plus-plus/main-dashboard.png"
                    height={600}
                    width={800}
                    alt="Pace++ Main Dashboard"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>

                <p>
                  After logging-in, the "doctor" is given a screen that displays
                  most of the important information first, such as three graphs
                  showcasing the electrocardiograph reading. The pacemaker GUI
                  also allows the doctor to start, stop, and change the
                  pacemaker options — where each of these options directly send
                  a packet to the board to perform their specific task.
                </p>

                <div className="flex justify-center pt-4">
                  <Image
                    src="/pace-plus-plus/code-structure.png"
                    height={600}
                    width={800}
                    alt="Pace++ Code Structure Overview"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>

                <p className="text-lg text-gray-300 leading-relaxed pt-4">
                  Additionally, I created a high-level overview for the general
                  code structure to maintain clean architecture and ensure
                  seamless communication between components.
                </p>
              </section>

              {/* Simulink Backend Section */}
              <section className="space-y-6">
                <h2>Creating the Simulink Backend</h2>

                <p>
                  For the backend, we utilized MATLAB Simulink to not only take
                  in the simulated heart pacing data but also to perform actions
                  upon it using the parameters the doctor chooses to set in the
                  options menu. In our workflow, there are a couple of major
                  parts:
                </p>

                <ol className="space-y-3 text-lg text-gray-300 leading-relaxed">
                  <li className="custom-li">
                    <span>
                      We take in the simulated heart signals and parameter data
                      sent over from the Python GUI. If no parameter data is
                      sent over, then it defaults to values specified in Boston
                      Scientific's specification sheet.
                    </span>
                  </li>
                  <li className="custom-li">
                    <span>
                      Through the accelerometer, we calculate the derivative of
                      motion to determine if the user's activity is increasing
                      or decreasing. Since your heart beats faster as you
                      exercise, it is important to account for making the
                      pacemaker pulse faster.
                    </span>
                  </li>
                  <li className="custom-li">
                    <span>
                      Utilizing the input parameters, we can calculate certain
                      formulas to define specific heart behaviors and through 8
                      unique pacing modes these parameters are used to pace the
                      simulated heart.
                    </span>
                  </li>
                </ol>

                <div className="space-y-6 pt-6">
                  <div className="flex justify-center">
                    <Image
                      src="/pace-plus-plus/simulink-stateflow.png"
                      height={600}
                      width={800}
                      alt="General Overview of Simulink State-flow"
                      unoptimized
                      className="rounded-lg object-cover shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">
                    General overview of the Simulink state-flow
                  </p>
                </div>

                <div className="space-y-6 pt-6">
                  <div className="flex justify-center">
                    <Image
                      src="/pace-plus-plus/parameter-processing.png"
                      height={600}
                      width={800}
                      alt="Overview of Parameter Processing"
                      unoptimized
                      className="rounded-lg object-cover shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">
                    Overview of parameter processing
                  </p>
                </div>
              </section>

              {/* Pacing Modes Section */}
              <section className="space-y-6">
                <h2>Pacing Modes</h2>

                <p>
                  In our pacemaker we have 8 different modes that perform
                  certain functions:
                </p>

                <ol className="custom-ol">
                  <li className="custom-li">
                    <span>AOO, fixed pacing of the atrium</span>
                  </li>
                  <li className="custom-li">
                    <span>VOO, fixed pacing of the ventricle</span>
                  </li>
                  <li className="custom-li">
                    <span>AAI, irregular pacing of the atrium</span>
                  </li>
                  <li className="custom-li">
                    <span>VVI, irregular pacing of the ventricle</span>
                  </li>
                  <li className="custom-li">
                    <span>Rate adaptive modes for each of the modes above</span>
                  </li>
                </ol>

                <div className="flex justify-center pt-6">
                  <Image
                    src="/pace-plus-plus/pacing-modes.png"
                    height={600}
                    width={800}
                    alt="Overview of Pacemaker Pacing Modes"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
                <p className="text-center text-base text-gray-400 italic">
                  Overview of pacemaker pacing modes
                </p>
              </section>

              {/* Validation Section */}
              <section className="space-y-6">
                <h2>Validation</h2>

                <p>
                  The following were the parameters that were implemented in the
                  device:
                </p>

                <div className="flex justify-center pb-6">
                  <Image
                    src="/pace-plus-plus/parameters-table.png"
                    height={600}
                    width={800}
                    alt="Implemented Pacemaker Parameters"
                    unoptimized
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>

                <p>
                  To test and validate our pacemaker mode function, we employed
                  Heartview, a McMaster created cardiac simulation tool that was
                  pre-flashed onto our board.
                </p>

                <div className="space-y-6 pt-6">
                  <div className="flex justify-center">
                    <Image
                      src="/pace-plus-plus/heartview-output.png"
                      height={600}
                      width={800}
                      alt="Heartview Output Showing Simulated Pacing"
                      unoptimized
                      className="rounded-lg object-cover shadow-lg"
                    />
                  </div>
                  <p className="text-center text-base text-gray-400 italic">
                    Same output from Heartview, showing our simulated pacing for
                    the simulation
                  </p>
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
