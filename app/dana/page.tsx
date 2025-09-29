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
import { Home} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle} from "lucide-react";
import Footer from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Timeline from "@/components/coop-timeline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLinkCard } from "@/components/link-preview";
import Link from "next/link";
export default function BlogCaseStudyPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="flex-1">
        {/* Top header with breadcrumb and mobile sidebar trigger */}
        <div className="flex h-16 shrink-0 items-center justify-between px-4 lg:px-6 relative z-20">
          {/* Breadcrumb */}
          <Breadcrumb >
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
                //loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="https://videos.pexels.com/video-files/2435376/2435376-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
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
                  <h1 className="blog-title ">Dana Incorporated</h1>
                </div>

                <h3>
                  Developed new technologies and techniques for manufacturing
                  electric vehicle battery cooling systems with a focus on
                  manufacturing and materials engineering.
                </h3>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">
                      May 2024 - August 2025
                    </p>
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
                  <span className="font-semibold text-white">Role:</span> R&D
                  Engineering Intern
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
                            className="transition-transform hover:scale-110 hover:z-10 relative"
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
                  <p>
                    Brazing • Design of Experiements • GD&T • Materials
                    Engineering • Mechanical Engineering • Research •
                    Manufacturing • Heat Transfer Analysis • Corrosion
                    Engineering • Performance Testing
                  </p>
                </div>
                <ExternalLinkCard
                  title="Dana Inc."
                  description="Check out the company website!"
                  url="https://dana.com"
                />
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
                  <strong>Note:</strong> Due to an NDA, much of the information
                  on this page has been intentionally generalized.
                </AlertDescription>
              </Alert>

              {/* Introduction Section */}
              <section className="space-y-6">
                <div className="grid gap-8">
                  <div className="space-y-4">
                    <h1>Executive Summary</h1>
                    <p>
                      This case study details a 16-month engineering internship
                      at Dana, divided into two 8-month phases: Product
                      Development for automotive battery cold plates and
                      Material Research & Development. My experience provided me
                      with a comprehensive exposure to the entire process of
                      practical product engineering and how research worked in a
                      global automotive thermal management solutions provider.
                    </p>
                    <div className="flex justify-center pt-4 overflow-hidden">
                      <Image
                        src="/dana/1-floor.png"
                        height={800}
                        width={800}
                        alt=""
                        unoptimized
                        className=" object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h2>Company Background</h2>
                    <p>
                      Dana Inc. is a global leader in providing power-conveyance
                      and energy-management solutions for vehicles and machinery
                      across various industries. The company specializes in
                      drivetrain, sealing, and thermal management technologies
                      that improve vehicle efficiency and performance.
                    </p>
                    <p>
                      <strong>
                        The Dana Oakville facility specializes in R&D and
                        manufacturing of prototype heat exchangers for electric
                        vehicles
                      </strong>
                      . During my internship, I participated in every stage of
                      the product development lifecycle: from testing efficiency
                      improvements for manufacturing and products, to
                      implementing cost-saving measures, and to creating
                      small-scale production prototypes for Dana's clients.
                    </p>
                    <div className="flex justify-center pt-4 overflow-hidden ">
                      <Image
                        src="/dana/2-motor.png"
                        height={800}
                        width={800}
                        alt=""
                        unoptimized
                        className=" object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline Visual */}

                <section className="space-y-6">
                  

                  <div className="space-y-6 hidden md:block">
                    <h2>Internship Overview</h2>
                    <Timeline />
                  </div>
                  <h1>Thermal Management in Electric Vehicles</h1>
                  <h2>The Critical Role of Cooling in EVs</h2>
                  <h3>
                    Electric vehicles need effective cooling systems for a
                    simple reason: batteries get hot.
                  </h3>
                  <p>
                    Unlike traditional cars that have cooling systems mainly for
                    the engine, EVs need cooling primarily for their batteries
                    and electronics. Here's why cooling matters so much:
                  </p>
                  <ul className="custom-ul">
                    <li className="custom-li">
                      Batteries work best at room temperature as they can lose
                      power, charge slower, and wear out faster
                    </li>
                    <li className="custom-li">
                      Fast charging creates substantial heat that needs to be
                      removed quickly to prevent thermal runaway
                    </li>
                    <li className="custom-li">
                      Electronic components that control the motor and power
                      systems also need cooling to work properly
                    </li>
                    <li className="custom-li">
                      Without an engine's waste heat, EVs need a different
                      approach to keep passengers warm in winter while managing
                      battery temperature
                    </li>
                  </ul>
                  <div className="flex justify-center pt-4">
                    <Image
                      src="/dana/coldplate.jpg"
                      height={800}
                      width={800}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                  </div>
                  <h2>EV Cooling Components</h2>
                  <p>
                    There are several key components that work together to keep
                    EVs cool:{" "}
                  </p>
                  <ul className="custom-ul">
                    <li className="custom-li">
                      <strong>Cold plates - </strong> metal plates with internal
                      channels for coolant that sit directly against the battery
                      pack to absorb heat
                    </li>
                    <li className="custom-li">
                      <strong>Electric Motor Oil Cooler -</strong> specialized
                      heat exchangers that maintain optimal operating
                      temperature for the electric motor
                    </li>
                    <li className="custom-li">
                      <strong>HV/LV Inverter Cooler -</strong> thermal
                      management components that prevent overheating in power
                      conversion systems
                    </li>
                    <li className="custom-li">
                      <strong>Autonomous Driving Chip Cooling -</strong>{" "}
                      dedicated cooling solutions for the high-performance
                      processors that handle self-driving capabilities
                    </li>
                  </ul>
                  <h1>Dana's Advanced Thermal Management Manufacturing</h1>
                  <h2>
                    The Brazing Process: Creating Efficient Thermal Solutions
                  </h2>
                  <p>
                    Brazing is a joining process that forms
                    strong, leak-tight joints between metal components by
                    melting a filler metal (brazing alloy) that flows into the
                    joint through capillary action. Unlike welding, brazing
                    doesn't melt the base metals but creates a metallurgical
                    bond at temperatures typically above 450°C (840°F). This
                    is one of many processes that allow for the creation of complex internal
                    cooling channels required for effective battery thermal
                    management.
                  </p>
                  <div className="flex flex-col items-center pt-4">
                    <Image
                      src="/dana/brazed.png"
                      height={800}
                      width={800}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                    <p className="text-sm text-gray-900 mt-3 text-center max-w-2xl">
                      <a
                        href="https://link.springer.com/article/10.1007/s11665-021-05616-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grey-100 hover:text-white underline text-xs"
                      >
                        Internal Corrosion of Warm Formed Aluminum Alloy
                        Automotive Heat Exchangers, Benoit et. al.
                      </a>
                    </p>
                  </div>
                  <h1>Phase 1: Product Development (8 months)</h1>
                  <p>
                    I was responsible for contributing to the design, testing,
                    and optimization of battery cold plates for Jaguar Land
                    Rover (JLR) and General Motors (GM) electric vehicle
                    platforms. This involved working with cutting-edge EV
                    technology and ensuring that thermal management solutions
                    met the stringent safety and performance requirements of
                    major automotive manufacturers.
                  </p>
                  <h2>Key Responsibilities</h2>
                  <ul className="custom-ul">
                    <li className="custom-li">
                      Design support for thermal management systems specifically
                      engineered for EV battery cooling applications
                    </li>
                    <li className="custom-li">
                      CAD modeling and design iterations using PTC Creo
                      parametric modeling software
                    </li>
                    <li className="custom-li">
                      Thermal simulation and analysis to predict cooling
                      performance using computational fluid dynamics (CFD)
                    </li>
                    <li className="custom-li">
                      Prototype testing and validation across multiple
                      performance and safety parameters
                    </li>
                    <li className="custom-li">
                      Documentation of design specifications, test procedures,
                      and results for regulatory compliance
                    </li>
                    <li className="custom-li">
                      Cross-functional collaboration with manufacturing,
                      simulation, materials, and quality assurance teams
                    </li>
                  </ul>
                  <div className="flex justify-center pt-4">
                    <Image
                      src="/dana/jlrcars.png"
                      height={800}
                      width={800}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                  </div>
                  <h2>Technical Challenges</h2>
                  <p>
                    Battery cold plates must meet rigorous automotive safety
                    standards because any coolant leak or electrical short could
                    trigger a large-scale fire and potentially lead to thermal
                    runaway—a dangerous condition where the battery generates
                    more heat than can be dissipated. These strict safety
                    criteria apply to all design features and manufacturing
                    aspects of the component.
                  </p>
                  <p>
                    This creates significant manufacturing challenges, as
                    producing cost-effective, consistent parts that meet all
                    safety requirements while maintaining a low scrap rate is
                    exceptionally difficult. The challenge is compounded by the
                    need to balance thermal performance, weight targets, cost
                    constraints, and manufacturing feasibility. As a product
                    development intern, my core responsibilities included:
                  </p>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      Designing and testing new feature modifications to improve
                      performance or reduce costs
                    </li>
                    <li className="custom-li">
                      Evaluating manufacturing methods to reduce production
                      costs and improve efficiency
                    </li>
                    <li className="custom-li">
                      Conducting comprehensive experiments on prototype parts to
                      validate design concepts
                    </li>
                  </ol>
                  <p>
                    For each prototype iteration, I performed various critical
                    tests including:
                  </p>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      Underwater and nitrogen leak testing to ensure coolant
                      containment integrity
                    </li>
                    <li className="custom-li">
                      X-ray scanning to identify internal defects and braze
                      joint quality
                    </li>
                    <li className="custom-li">
                      Metallurgical analysis to examine grain structure and
                      joint formation
                    </li>
                    <li className="custom-li">
                      High potential (hipot) electrical testing to verify
                      electrical isolation between coolant and battery
                    </li>
                    <li className="custom-li">
                      Burst testing to determine failure pressure and safety
                      margins
                    </li>
                    <li className="custom-li">
                      Corrosion testing to evaluate long-term durability in
                      automotive environments
                    </li>
                  </ol>
                  <p>
                    All these parameters required careful management to ensure
                    prototypes could transition smoothly to large-scale
                    production with minimal complications, delays, and
                    unexpected costs.
                  </p>
                  <div className="flex justify-center pt-4">
                    <Image
                      src="/dana/stockphoto.jpg"
                      height={600}
                      width={600}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                  </div>
                  <h2>Projects Implemented</h2>
                  <p>
                    During my internship, I led development studies to optimize
                    manufacturing processes and component design. I designed
                    systematic experiments to improve features like fittings,
                    coatings, and surface finishes, then used microscopic
                    analysis and comprehensive testing to determine root causes
                    when problems occurred.
                  </p>
                  <p>
                    These studies were some of the most engaging aspects of my
                    internship. I explored new technologies Dana hadn't
                    implemented, collaborated with interdisciplinary teams on
                    manufacturing changes, and conducted brazing trials to
                    validate concepts. My role involved determining feasibility
                    of new ideas—whether for improving existing workflows or
                    securing new contracts—and providing data-driven
                    recommendations on advancing concepts to prototype
                    development or discontinuing them early.
                  </p>
                  <h3>
                    My most significant achievement was investigating an
                    alternative assembly process that reduced per-part
                    manufacturing costs by 15% while maintaining all performance
                    and safety standards.
                  </h3>
                  <div className="flex justify-center pt-4">
                    <Image
                      src="/dana/ford.avif"
                      height={800}
                      width={800}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                  </div>
                  <h2>Experimentation and Testing</h2>
                  <p>
                    I designed and executed testing on EV battery cold plates,
                    balancing cost, time, and effectiveness while managing
                    independent projects. Key tests included:
                  </p>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      Pressure drop measurements to optimize coolant flow
                      characteristics
                    </li>
                    <li className="custom-li">
                      High-voltage (hipot) electrical isolation testing to
                      ensure safety compliance
                    </li>
                    <li className="custom-li">
                      Leak testing using both pressurized air and helium
                      detection methods
                    </li>
                    <li className="custom-li">
                      Coating adhesion verification to ensure long-term
                      durability
                    </li>
                    <li className="custom-li">
                      Surface finish evaluation to meet customer specifications
                    </li>
                  </ol>
                  <p>
                    Because of fire safety risks, all features had to exceed
                    strict automotive standards. When supplier delays disrupted
                    equipment availability, I personally processed all parts and
                    conducted hipot tests to keep production on schedule.
                  </p>
                  <h2>
                    Python Automation for GD&T Dimensional Tracking and Shipping
                  </h2>
                  <p>
                    The quality assurance work involved extensive Excel
                    documentation to track manufacturing history and compliance
                    data between Dana and its automotive customers. This manual
                    process required tedious copy-pasting of data across
                    multiple Excel spreadsheets for hundreds of individual
                    parts, consuming significant time that could be better spent
                    on engineering analysis. My automation solution included:
                  </p>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      Developed a Python script on my own initiative using
                      pandas and openpyxl libraries
                    </li>
                    <li className="custom-li">
                      Automatically processed all part tracking data with error
                      checking and validation
                    </li>
                    <li className="custom-li">
                      Reduced a 4-hour manual task to just 20 minutes of
                      automated processing
                    </li>
                  </ol>
                  <div className="flex justify-center pt-4">
                    <Image
                      src="/dana/python.png"
                      height={600}
                      width={600}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                  </div>
                  <p>
                    This automation not only saved time but also eliminated
                    human errors in data entry and improved traceability of part
                    history for customer audits.
                  </p>
                  <h2>Results & Achievements</h2>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      <strong>
                        Developed and validated battery cold plate prototypes
                      </strong>{" "}
                      for GM and Jaguar Land Rover EV battery modules,
                      conducting crucial safety testing on hundreds of parts to
                      identify failure locations and root causes, preventing
                      potential thermal runaway incidents in customer vehicles.
                    </li>
                    <li className="custom-li">
                      <strong>
                        Investigated alternative assembly processes that reduced
                        per-part cost by 15%
                      </strong>{" "}
                      and automated GD&T dimensional tracking and shipping list
                      updates using Python scripts, saving 4 hours of manual
                      work weekly while improving data accuracy.
                    </li>
                    <li className="custom-li">
                      <strong>
                        Designed experiments and performed high-voltage hipot
                        testing on 1,000+ parts
                      </strong>
                      , created custom test fixtures for efficient processing,
                      and tracked shipping and testing progress to ensure
                      electrical isolation compliance met automotive safety
                      standards.
                    </li>
                    <li className="custom-li">
                      Ensured prototypes met GD&T tolerance requirements,
                      designed mechanical fixtures for assembly and testing
                      procedures, and collaborated with manufacturing personnel
                      to implement design improvements that enhanced production
                      efficiency.
                    </li>
                  </ol>
                </section>

                <section className="space-y-6">
                  <h1>Phase 2: Material Research & Development (8 months)</h1>
                  <div className="bg-secondary-900/20 border border-border-500/30 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-orange-500/80">
                          1000+
                        </div>
                        <div className="text-gray-300">Samples Tested</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-500/80">
                          $200K+
                        </div>
                        <div className="text-gray-300">Cost Reductions</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-500/80">
                          New Tech
                        </div>
                        <div className="text-gray-300">Implementation</div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Investigation of novel materials and advanced technologies
                    to enhance thermal management solutions for automotive
                    applications. This phase involved fundamental materials
                    science research aimed at improving performance while
                    reducing costs and environmental impact.
                  </p>
                  <h2>Key Responsibilities</h2>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      Literature review and competitive analysis of emerging
                      thermal management materials and manufacturing processes
                    </li>
                    <li className="custom-li">
                      Laboratory testing and characterization of aluminum alloy
                      properties under various conditions
                    </li>
                    <li className="custom-li">
                      Design of experiments (DOE) for systematic material
                      performance evaluation and statistical analysis
                    </li>
                    <li className="custom-li">
                      Data analysis and performance modeling using statistical
                      software and engineering principles
                    </li>
                    <li className="custom-li">
                      Preparation of technical reports and research summaries
                      for management and engineering teams
                    </li>
                    <li className="custom-li">
                      Collaboration with suppliers and research institutions to
                      access cutting-edge materials and testing capabilities
                    </li>
                  </ol>
                  <p>
                    The primary objectives for the materials team at Dana were
                    to investigate new metal joining technologies, research
                    cost-saving materials (cheaper, lighter, stronger, or
                    thinner alternatives), and identify root causes of
                    materials-related issues in production components worldwide.
                  </p>
                  <h2>Brazing Research</h2>
                  <p>
                    I researched aluminum alloy performance in heat exchanger
                    brazing by replicating production conditions in mini
                    furnaces, fabricating test coupons, and analyzing joint
                    behavior with optical and electron microscopy. Trials varied
                    parameters like temperature, atmosphere, and cooling rate to
                    predict large-scale performance and identify risks such as
                    poor joints, porosity, and leaks before production.
                  </p>
                  <div className="flex flex-col items-center pt-4">
                    <Image
                      src="/dana/brazecorrosion.png"
                      height={800}
                      width={800}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                    <p className="text-sm text-gray-900 mt-3 text-center max-w-2xl">
                      <a
                        href="https://link.springer.com/article/10.1007/s11665-021-05616-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grey-100 hover:text-white underline text-xs"
                      >
                        Internal Corrosion of Warm Formed Aluminum Alloy
                        Automotive Heat Exchangers, Benoit et. al.
                      </a>
                    </p>
                  </div>
                  <h2>Metal Alloy Research</h2>
                  <p>
                    My metal alloy research involved comprehensive analysis of
                    the mechanical and chemical properties of various aluminum
                    and copper-based materials. Since brazing requires specific
                    aluminum alloys with precisely controlled amounts of copper,
                    magnesium, and silicon to achieve proper flow
                    characteristics and joint strength, I conducted
                    comprehensive validation testing spanning several months to
                    ensure all safety and performance standards were met.
                  </p>
                  <p>This extensive testing included:</p>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      Ultimate tensile strength testing before and after brazing
                      (following ASTM E8 standards) to quantify strength
                      retention
                    </li>
                    <li className="custom-li">
                      Thermal properties analysis including thermal conductivity
                      and expansion coefficients
                    </li>
                    <li className="custom-li">
                      Corrosion resistance evaluation under accelerated salt
                      spray and coolant exposure conditions
                    </li>
                    <li className="custom-li">
                      Grain structure and size analysis using metallographic
                      techniques and image analysis software
                    </li>
                  </ol>
                  <div className="flex flex-col items-center pt-4">
                    <Image
                      src="/dana/tensiletest.png"
                      height={800}
                      width={800}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                    <p className="text-sm text-gray-900 mt-3 text-center max-w-2xl">
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S2238785415001234#fig0025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grey-100 hover:text-white underline text-xs"
                      >
                        Tensile behaviour of aluminium 7017 alloy at various
                        temperatures and strain rates, Bobbili et. al.
                      </a>
                    </p>
                  </div>
                  <h2>Root Cause Analysis</h2>
                  <p>
                    Root cause analysis formed another major component of my
                    research work. I examined problematic brazed components from
                    Dana's global production facilities through both
                    non-destructive testing (NDT) and destructive analysis
                    methods. By conducting hands-on testing and systematically
                    examining differences between acceptable and defective
                    parts, I successfully identified the root causes for several
                    major production issues at the material and metallurgical
                    level.
                  </p>
                  <p>
                    This work involved advanced characterization techniques
                    including scanning electron microscopy (SEM),
                    energy-dispersive X-ray spectroscopy (EDS), and X-ray
                    diffraction (XRD) to understand failure mechanisms at the
                    microstructural level.
                  </p>
                  <div className="flex flex-col items-center pt-4">
                    <Image
                      src="/dana/brazejointneedle.png"
                      height={800}
                      width={800}
                      alt=""
                      unoptimized
                      className="object-cover shadow-lg rounded-lg"
                    />
                    <p className="text-sm text-gray-900 mt-3 text-center max-w-2xl">
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S2238785415001234#fig0025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grey-100 hover:text-white underline text-xs"
                      >
                        Effect of brazing parameters on microstructure and
                        mechanical properties of titanium joints, Elrefaey et.
                        al.
                      </a>
                    </p>
                  </div>
                  <h2>Digital Image Correlation (DIC) Implementation</h2>
                  <p>
                    One particularly engaging project involved implementing
                    Digital Image Correlation (DIC) technology in Dana's
                    material testing laboratory. DIC is an advanced optical
                    measurement technique that provides full-field strain and
                    displacement measurements during mechanical testing,
                    offering much more detailed information than traditional
                    strain gauges.
                  </p>
                  <p>Using this technology, I successfully:</p>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      Created an initial proof-of-concept setup using existing
                      cameras and open-source software
                    </li>
                    <li className="custom-li">
                      Installed and configured appropriate DIC analysis software
                    </li>
                    <li className="custom-li">
                      Developed a standardized testing protocol for consistent
                      measurements
                    </li>
                    <li className="custom-li">
                      Optimized camera settings and lighting conditions for
                      maximum measurement accuracy
                    </li>
                  </ol>
                  <p>
                    My proposal to upgrade this initial $0 setup to a
                    professional $7,000 system was approved by management,
                    providing significantly greater accuracy and measurement
                    consistency for materials characterization work.
                  </p>
                  <div className="w-full aspect-video">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src="https://www.youtube.com/embed/mXzEAbBlR4M?autoplay=1&mute=1&loop=1&playlist=mXzEAbBlR4M"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <h2>Results & Achievements</h2>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      <strong>
                        Researched aluminum brazing characteristics and alloy
                        properties
                      </strong>{" "}
                      to support global process improvements, including material
                      replacements and downgauging initiatives, contributing to
                      over <strong>$200K</strong> in cost reduction across
                      Dana's manufacturing facilities worldwide.
                    </li>
                    <li className="custom-li">
                      <strong>
                        Conducted mechanical and metallurgical research on
                        1,000+ aluminum and copper alloy samples
                      </strong>
                      , systematically optimizing tensile strength, corrosion
                      resistance, and thermal conductivity properties to inform
                      material specifications and reduce manufacturing costs
                      while maintaining performance.
                    </li>
                    <li className="custom-li">
                      <strong>
                        Implemented Digital Image Correlation (DIC)
                      </strong>{" "}
                      technology for precise strain measurement and developed
                      Python-based material property databases, streamlining
                      root-cause analysis workflows and accelerating resolution
                      of factory issues across multiple production sites.
                    </li>
                    <li className="custom-li">
                      <strong>
                        Automated test data management using Python programming
                      </strong>
                      , enhancing data accuracy and consistency while saving 5
                      hours of manual work weekly, allowing more time for
                      analysis and research activities.
                    </li>
                  </ol>
                  <h2>Acknowledgments</h2>
                  <p>
                    Special thanks to the following people for providing
                    valuable experiences and teaching me extensively about
                    automotive manufacturinguring.
                  </p>
                  <ol className="custom-ol">
                    <li className="custom-li">
                      <Link
                        href="https://www.linkedin.com/in/garrethg/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Garreth Graves
                      </Link>
                    </li>
                    <li className="custom-li">
                      <Link
                        href="https://www.linkedin.com/in/jennifer-cerullo-04556575/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jennifer Cerullo
                      </Link>
                    </li>
                    <li className="custom-li">
                      <Link
                        href="https://www.linkedin.com/in/david-stankiewicz-019222b5/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        David Stankiewicz
                      </Link>
                    </li>
                    <li className="custom-li">
                      <Link
                        href="https://www.linkedin.com/in/stephanie-mccoleman-kozdras/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Stephanie Kozdras
                      </Link>
                    </li>
                    <li className="custom-li">
                      <Link
                        href="https://www.linkedin.com/in/mehdi-jalili-33b752a6/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mehdi Jalili (Ph.D)
                      </Link>
                    </li>
                    <li className="custom-li">
                      <Link
                        href="https://www.linkedin.com/in/xu-wang-ph-d-88478686/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Xu Wang (Ph.D)
                      </Link>
                    </li>
                    <li className="custom-li">
                      <Link
                        href="https://www.linkedin.com/in/hadi-razmpoosh-792738191/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hadi Razmpoosh (Ph.D)
                      </Link>
                    </li>
                    <li className="custom-li">
                      <Link
                        href="https://www.dana.com/"
                        prefetch={false}
                        className="underline hover:text-white duration-200 ease-in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alex Jauregui
                      </Link>
                    </li>
                  </ol>
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
