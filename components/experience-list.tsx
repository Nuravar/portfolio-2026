import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';

const TeamExperience = () => {
  const experiences = [
    {
      id: 5,
      company: 'McMaster University',
      role: 'Engineering Teaching Assistant',
      year: 'Jan 2023 - Present',
      logoSrc: "/companyLogos/McMasterEngLogo.png",
      logoAlt: "McMaster Logo",
      bgColor: 'bg-white',
      bullets: [
        'Mentored 20-30 students weekly on challenging coding and 3D-modelling concepts',
        'Elevated student grades to >90% through comprehensive lab instruction',
        'Conducted tutorial sessions and provided personalized academic support',
        'Assisted with course development and grading responsibilities'
      ]
    },
    {
      id: 1,
      company: 'Dana Incorporated',
      role: 'Materials Engineering Intern, Joining Technologies R&D',
      year: 'Jan 2025 - Aug 2025',
      logoSrc: "/companyLogos/dana-logo.png",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white',
      bullets: [
        'Conducted advanced materials research on aluminum and copper brazing alloys, testing over 1000 samples to optimize tensile strength, corrosion resistance, and thermal conductivity properties',
        'Implemented Digital Image Correlation (DIC) technology and developed Python-based material property databases for the R&D lab',
        'Streamlined root-cause analysis workflows enabling faster identification of factory issues',
        'Supported $200K+ in cost-reduction initiatives through strategic material replacements'
      ]
    },
    {
      id: 2,
      company: 'Dana Incorporated',
      role: 'Mechanical Engineering Intern, Battery Cooling',
      year: 'Jun 2024 - Dec 2024',
      logoSrc: "/companyLogos/dana-logo.png",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Conducted developmental studies to optimize battery cooling systems for electric vehicles',
        'Implemented cost-reduction initiatives yielding 11% savings per part',
        'Performed failure analysis on over 1000 prototypes investigating material defects, powder coating coverage, and braze integrity',
        'Developed Python scripts to automate GD&T dimensional tracking, reducing manual work by 4 hours weekly'
      ]
    },
    {
      id: 3,
      company: 'McMaster Formula Electric',
      role: 'Software Engineer, Firmware',
      year: 'Jan 2024 - Dec 2024',
      logoSrc: "/companyLogos/mcfe.png",
      logoAlt: "McMaster Formula Electric Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Developed a hardware-in-the-loop (HIL) testing system using Go and WebSockets on Raspberry Pi',
        'Built an interactive React dashboard for real-time data visualization',
        'Improved debugging efficiency and accelerated test cycle times'
      ]
    },
    {
      id: 4,
      company: 'McMaster SolarCar',
      role: 'Mechanical Engineer, Suspension',
      year: 'Oct 2023 - Apr 2024',
      logoSrc: "/companyLogos/macsolar.jpg",
      logoAlt: "McMaster Solar Car Racing Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Aided comprehensive vehicle fabrication efforts including machining aluminum chassis components',
        'Optimized both vehicle dynamics and manufacturing decisions',
        'Worked on seat bars, wheel hubs, and motor mounts fabrication'
      ]
    },
];

  return (
    <div className="text-white rounded-lg pt-8">
      <Accordion type="single" collapsible className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={`item-${exp.id}`} className="border-[#584B50]">
            <AccordionTrigger className="hover:no-underline py-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  {/* Company Logo */}
                  <div className={`w-7 h-7 rounded-sm flex items-center justify-center overflow-hidden  hidden md:flex ${exp.bgColor}`}>
                    <Image 
                      src={exp.logoSrc} 
                      alt={exp.logoAlt}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain "
                    />
                  </div>

                  {/* Company Details */}
                  <div className="flex flex-row gap-3 items-baseline">
                    <span className="text-white font-normal leading-relaxed text-sm">
                      {exp.company} 
                    </span>
                    <span className="text-gray-400 text-xs font-normal leading-relaxed ">
                      /
                    </span>
                    <span className="text-gray-400 text-xs font-normal leading-relaxed ">
                      {exp.role}
                    </span>
                  </div>
                </div>

                {/* Year */}
                <div className="text-muted-foreground text-xs font-small leading-relaxed mr-4  hidden md:flex">
                  {exp.year}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="ml-9">
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, index) => (
                    <li key={index} className="text-gray-300 text-sm flex">
                      <span className="text-gray-500 mr-2 text-sm flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TeamExperience;