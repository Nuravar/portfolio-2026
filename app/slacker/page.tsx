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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import FaultyTerminal from "@/components/ui/terminal";
import { ExternalLinkCard } from "@/components/link-preview";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
                <BreadcrumbPage className="text-white">Slacker</BreadcrumbPage>
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
                  digitSize={1.4}
                  timeScale={0.2}
                  pause={false}
                  scanlineIntensity={0.1}
                  glitchAmount={0.3}
                  flickerAmount={1}
                  noiseAmp={1}
                  chromaticAberration={0}
                  dither={0.6}
                  curvature={0.1}
                  tint="#d47270"
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
                  <h1 className="blog-title">Slacker Chores</h1>
                </div>

                <p className="text-xl lg:text-2xl leading-relaxed">
                  Slacker is a{" "}
                  <span className="underline">hackathon-winning</span> web app
                  that automatically assigns and tracks household chores among
                  roommates for fair task distribution.
                </p>
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Jan 2023</span>
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
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/in/hady-ibrahim/",
                                "_blank"
                              )
                            }
                            className="transition-transform hover:scale-110 hover:z-10 relative cursor-pointer"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">
                                HI
                              </AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="text-white">
                          <p>Hady Ibrahim</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/in/albertlai631/",
                                "_blank"
                              )
                            }
                            className="transition-transform hover:scale-110 hover:z-10 relative cursor-pointer"
                          >
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="" />
                              <AvatarFallback className="text-white text-xs">
                                AL
                              </AvatarFallback>
                            </Avatar>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="text-white">
                          <p>Albert Lai</p>
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
                    JavaScript • React • HTML • CSS • Firebase • Chakra UI •
                    Figma • UI/UX Design • Google Authentication • GitHub •
                    Mobile Mockup Design • Responsive Web Design
                  </p>
                </div>
                <ExternalLinkCard
                  title="Devpost"
                  description="See our winning Devpost project!"
                  url="https://devpost.com/software/slacker-u25lpj"
                />
                <ExternalLinkCard
                  title="GitHub"
                  description="Check out the Slacker Chores Github page."
                  url="https://github.com/hackdays-projects/slacker-chore"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main content section with background color */}
        <div className="bg-[#131110] text-white">
          <div className="p-6 lg:p-13 max-w-4xl mx-auto">
            <article className="space-y-6">
              {/* Introduction Section */}
              <section className="space-y-6">
                <h2>Problem Statement</h2>
                <div className=" w-full h-full">
                  <Image
                    src="/slacker/slacker-banner-2.png"
                    alt="Image"
                    unoptimized
                    className="rounded-md object-cover"
                    height={200}
                    width={800}
                  />
                </div>
                <p>
                  Shared housing often presents a challenge when it comes to
                  organizing chores and ensuring everyone contributes equally.
                  Without clear instructions, many students struggle to maintain
                  a proper work-life balance and may forget their assigned
                  chores.{" "}
                </p>
              </section>
              {/* Stat Card Section */}
              <section className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-amber-200 ">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">
                        Placed
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">1st</div>
                      <p className="text-xs text-muted-foreground">
                        in productivity apps
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">
                        Created in a total of
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">12 hrs</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        during the hackathon
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-center">
                        Built with
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold">6</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        different technologies
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="max-w-4xl mx-auto space-y-8">
                {/* Solution */}
                <div className="space-y-4">
                  <h2>Solution</h2>
                  <p>
                    Slacker is a web-app designed to streamline household chores
                    for users. By joining a household group, members access a
                    comprehensive task list, and the app automatically assigns
                    tasks to each member within the group. This ensures a more
                    organized and efficient distribution of responsibilities.
                  </p>
                </div>

                {/* My Role */}
                <div className="space-y-4">
                  <h2>My Role</h2>
                  <ul className="custom-ul">
                    <li className="custom-li">
                      Created the UI design for desktop and mobile mockups in
                      Figma
                    </li>
                    <li className="custom-li">
                      Created the desktop landing page and a variety of subpage
                      layouts
                    </li>
                    <li className="custom-li">
                      Bug-tested the final react-app
                    </li>
                  </ul>
                </div>

                {/* Outcome */}
                <div className="space-y-4">
                  <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Outcome
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    My two roommates and I{" "}
                    <strong>won the "best productivity app"</strong> category at
                    the Deltahacks hackathon, earning us an espresso machine as
                    a prize. We are excited about our success and are now
                    determined to develop the full version of our app, with
                    plans to publish it on mobile app stores in the near future.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/slacker/slacker-devpost.png"
                    height={600}
                    width={350}
                    alt="Image"
                    unoptimized
                    className="rounded-md object-cover"
                  />
                </div>
              </section>

              <section className="max-w-4xl mx-auto space-y-8">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Mobile Mockup
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We began by designing the mobile mockup first, since our
                  initial goal was to build the app using React Native. Starting
                  with the mobile view allowed us to focus on essential content
                  and user flows in a constrained space. This approach also made
                  it easier to scale the design up for desktop later, rather
                  than trying to compress a desktop layout into a smaller
                  screen. By prioritizing mobile-first design, we ensured
                  responsiveness and clarity from the start.
                </p>
                <Carousel className="m-10 lg:m-2 lg:p-1">
                  <CarouselContent>
                    <CarouselItem className="basis-1/2">
                      <div className="h-[200px] lg:h-[400px] flex items-center justify-center">
                        <Image
                          src="/slacker/slacker-home.png"
                          alt="Slide 1"
                          height={500}
                          width={300}
                          className="rounded-md object-contain max-h-full"
                          unoptimized
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="h-[200px] lg:h-[400px] flex items-center justify-center">
                        <Image
                          src="/slacker/slacker-list.png"
                          alt="Slide 2"
                          height={500}
                          width={300}
                          className="rounded-md object-contain max-h-full"
                          unoptimized
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="h-[200px] lg:h-[400px] flex items-center justify-center">
                        <Image
                          src="/slacker/slacker-group.png"
                          alt="Slide 3"
                          height={500}
                          width={300}
                          className="rounded-md object-contain max-h-full"
                          unoptimized
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <div className="h-[200px] lg:h-[400px] flex items-center justify-center">
                        <Image
                          src="/slacker/slacker-settings.png"
                          alt="Slide 3"
                          height={500}
                          width={300}
                          className="rounded-md object-contain max-h-full"
                          unoptimized
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </section>

              <section className="space-y-6">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  Web Application Layout
                </h2>
                <p>
                  After creating the mobile mockup, we quickly realized that we
                  did not have enough time to continue with a react native
                  application. From the mobile design that I created, we pivoted
                  to a standard react-app that switches between dark and light
                  modes. This was the project that got me into graphic design
                  and learning how to make pages look user-friendly, if I were
                  to redo the page, I would definitely change up the layout and
                  make it simpler to understand.
                </p>
                <Carousel className="m-10 lg:m-2 lg:p-1">
                  <CarouselContent>
                    <CarouselItem className="">
                      <div className="h-[200px] lg:h-[400px] flex items-center justify-center">
                        <Image
                          src="/slacker/slacker-home-light.png"
                          alt="Slide 2"
                          height={900}
                          width={900}
                          className="rounded-md object-contain max-h-full"
                          unoptimized
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="">
                      <div className="h-[200px] lg:h-[400px] flex items-center justify-center">
                        <Image
                          src="/slacker/slacker-home-dark.png"
                          alt="Slide 3"
                          height={900}
                          width={900}
                          className="rounded-md object-contain max-h-full"
                          unoptimized
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </section>

              <section className="space-y-6">
                <p>
                  For user authentication and account sign-up our website
                  integrates google authentication for seamless sign-in through
                  firebase, providing a secure and efficient login process.
                  Users can create groups easily and invite others through their
                  respective email addresses. This enhances collaboration
                  between users and simplifies the process of expanding group
                  membership.
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src="/slacker/slacker-auth.png"
                    alt="Slide 3"
                    height={900}
                    width={900}
                    className="rounded-md object-contain max-h-full"
                    unoptimized
                  />
                </div>

                <p>
                  Upon signing into the webpage, the google auth API allowed use
                  to create an icon on the top right of the screen allowing for
                  users to logout seamlessly.
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src="/slacker/slacker-login.png"
                    alt="Slide 3"
                    height={500}
                    width={500}
                    className="rounded-md object-contain max-h-full"
                    unoptimized
                  />
                </div>

                <p>
                  In our app, "My Tasks" becomes your personal hub for seamless
                  teamwork. Tasks flow seamlessly from group sections, getting
                  randomly assigned to ensure a fair workload distribution for
                  everyone
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src="/slacker/slacker-dashboard.png"
                    alt="Slide 3"
                    height={900}
                    width={900}
                    className="rounded-md object-contain max-h-full"
                    unoptimized
                  />
                </div>

                <p>
                  Coming off of the My Tasks, the user is able to select 2 other
                  additional options with the aim of editing user to user
                  interactions. The **Group Tasks** page display a list of all
                  available tasks that are too be completed in the entire group,
                  in our case this reflects the total household chores for our
                  house. User's additionally have the option of adding new tasks
                  and setting their frequency, with the application
                  automatically assigning tasks to group constituents.
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src="/slacker/slacker-grouptasks.png"
                    alt="Slide 3"
                    height={900}
                    width={900}
                    className="rounded-md object-contain max-h-full"
                    unoptimized
                  />
                </div>

                <p>
                  The Settings page allows the user to either create a group or
                  join an existing group through their email IDs. Once you join
                  a group, you will be able to view all the group members,
                  including the Slacker, who is assigned the least amount of
                  tasks. This feature encourages active participation and
                  accountability within the group, ensuring a fair distribution
                  of tasks and promoting a sense of teamwork and productivity.
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src="/slacker/slacker-settings-web.png"
                    alt="Slide 3"
                    height={900}
                    width={900}
                    className="rounded-md object-contain max-h-full"
                    unoptimized
                  />
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
