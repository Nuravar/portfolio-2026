import React from 'react';
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';

const TeamExperience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Dana',
      role: 'Material R&D Engineering Intern',
      year: '2025',
      logoSrc: "/companyLogos/Dana_Incorporated_logo.svg.png",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white'
    },
    {
      id: 2,
      company: 'Dana',
      role: 'Product Engineering Intern',
      year: '2024',
      logoSrc: "/companyLogos/Dana_Incorporated_logo.svg.png",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white text-black'
    },
    {
      id: 3,
      company: 'McMaster Formula Electric',
      role: 'Software Developer',
      year: '2024',
      logoSrc: "/companyLogos/mcfe.png",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white text-black'
    },
    {
      id: 4,
      company: 'McMaster Faculty of Engineering',
      role: 'Teaching Assistant',
      year: '2022-2024',
      logoSrc: "/companyLogos/McMasterEngLogo.png",
      logoAlt: "McMaster Logo",
      bgColor: 'bg-white'
    },
    {
      id: 5,
      company: 'McMaster Solar Car Racing',
      role: 'Software Developer',
      year: '2023',
      logoSrc: "/companyLogos/macsolar.jpg",
      logoAlt: "Dana Incorporated Logo",
      bgColor: 'bg-white text-black'
    },
  ];

  return (
    <div className="text-white rounded-lg pt-8">
      <h2 className="text-muted-foreground text-xs font-small mb-4 tracking-wide">Experience</h2>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div key={exp.id}>
            {/* Add separator for all elements except the first */}
            {index > 0 && <Separator className="my-3" />}

            <div className="flex items-center justify-between rounded-lg">
              <div className="flex items-center space-x-2">
                {/* Company Logo */}
                <div className={`w-7 h-7 rounded-sm flex items-center justify-center overflow-hidden ${exp.bgColor}`}>
                  <Image 
                    src={exp.logoSrc} 
                    alt={exp.logoAlt}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Company Details */}
                {/* Apply items-baseline here to align text bottoms */}
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
              <div className="text-gray-400 text-xs font-medium">
                {exp.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamExperience;