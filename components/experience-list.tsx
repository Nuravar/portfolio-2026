import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';

const TeamExperience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Dana',
      role: 'Material R&D Engineering Intern',
      year: '2025',
      logoSrc: "/companyLogos/dana-logo.png",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white',
      bullets: [
        'Conducted advanced material testing and analysis for automotive applications',
        'Developed innovative composite materials for lightweight vehicle components',
        'Collaborated with cross-functional teams on R&D projects',
        'Presented research findings to senior engineering leadership'
      ]
    },
    {
      id: 2,
      company: 'Dana',
      role: 'Product Engineering Intern',
      year: '2024',
      logoSrc: "/companyLogos/dana-logo.png",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Designed and optimized automotive drivetrain components',
        'Performed CAD modeling and finite element analysis',
        'Supported product validation testing and documentation',
        'Contributed to cost reduction initiatives through design improvements'
      ]
    },
        {
      id: 3,
      company: 'McMaster Faculty of Engineering',
      role: 'Teaching Assistant',
      year: '2022 - Present',
      logoSrc: "/companyLogos/McMasterEngLogo.png",
      logoAlt: "McMaster Logo",
      bgColor: 'bg-white',
      bullets: [
        'Assisted students with engineering coursework and laboratory exercises',
        'Graded assignments and provided constructive feedback',
        'Conducted tutorial sessions and office hours',
        'Supported course development and curriculum improvements'
      ]
    },
    {
      id: 4,
      company: 'McMaster Formula Electric',
      role: 'Software Developer',
      year: '2024',
      logoSrc: "/companyLogos/mcfe.png",
      logoAlt: "McMaster Formula Electric Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Developed embedded software for electric vehicle control systems',
        'Implemented data acquisition and telemetry systems',
        'Optimized battery management system algorithms',
        'Collaborated on vehicle testing and performance analysis'
      ]
    },
    {
      id: 5,
      company: 'McMaster Solar Car Racing',
      role: 'Software Developer',
      year: '2023',
      logoSrc: "/companyLogos/macsolar.jpg",
      logoAlt: "McMaster Solar Car Racing Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Developed race strategy software and real-time monitoring systems',
        'Implemented solar panel efficiency optimization algorithms',
        'Created data visualization tools for race performance analysis',
        'Participated in international solar car racing competitions'
      ]
    },
  ];

  return (
    <div className="text-white rounded-lg pt-8">
      <h2 className="text-muted-foreground text-xs font-small mb-4 tracking-wide">Experience</h2>

      <Accordion type="single" collapsible className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={`item-${exp.id}`} className="border-gray-800">
            <AccordionTrigger className="hover:no-underline py-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  {/* Company Logo */}
                  <div className={`w-7 h-7 rounded-sm flex items-center justify-center overflow-hidden ${exp.bgColor}`}>
                    <Image 
                      src={exp.logoSrc} 
                      alt={exp.logoAlt}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Company Details */}
                  <div className="flex flex-row gap-3 items-baseline">
                    <span className="text-white font-medium text-sm">
                      {exp.company} 
                    </span>
                    <span className="text-gray-400 text-xs font-normal">
                      /
                    </span>
                    <span className="text-gray-400 text-xs font-normal">
                      {exp.role}
                    </span>
                  </div>
                </div>

                {/* Year */}
                <div className="text-gray-400 text-xs font-medium mr-4">
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