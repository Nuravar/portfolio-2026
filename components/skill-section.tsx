import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

// Define interfaces for type safety
interface Skill {
  name: string;
  icon: string | null;
}

interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  technologies: Skill[];
  manufacturing: Skill[];
}

interface SkillItemProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

interface SkillColumnProps {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillsData: SkillsData = {
    languages: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' }
    ],
    frameworks: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'gRPC', icon: null },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'MATLAB Simulink', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' }
    ],
    technologies: [
      { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Raspberry Pi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
      { name: 'SolidWorks', icon: null },
      { name: 'Autodesk Inventor', icon: null },
      { name: 'CATIA V5', icon: null },
      { name: 'PTC Creo', icon: null },
      { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'Digital Image Correlation', icon: null },
      { name: 'FEA Analysis', icon: null }
    ],
    manufacturing: [
      { name: 'GD&T', icon: null },
      { name: 'Root-Cause Analysis', icon: null },
      { name: 'Material Testing', icon: null },
      { name: 'Machining', icon: null },
      { name: 'SEM Microscopy', icon: null },
      { name: 'Brazing/Welding', icon: null },
      { name: 'Failure Analysis', icon: null },
      { name: 'Manufacturing Processes', icon: null },
      { name: 'Quality Control', icon: null },
      { name: 'Thermal Systems', icon: null }
    ]
  };

  const toggleExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  const SkillItem: React.FC<SkillItemProps> = ({ skill, index, isVisible }) => (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-out transform ${
        mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      style={{
        backgroundColor: '#1F1818',
        transitionDelay: mounted ? `${index * 50}ms` : '0ms'
      }}
    >
      {skill.icon ? (
        <Image
          src={skill.icon}
          alt={skill.name}
          width={24}
          height={24}
          className="w-6 h-6 object-contain flex-shrink-0 transition-transform duration-200 hover:scale-110"
        />
      ) : (
        <div className="w-6 h-6 flex-shrink-0 bg-gray-300 rounded flex items-center justify-center transition-transform duration-200 hover:scale-110">
          <span className="text-xs font-medium text-gray-600">
            {skill.name.charAt(0)}
          </span>
        </div>
      )}
      <span className="text-white transition-colors duration-200 hover:text-gray-300">{skill.name}</span>
    </div>
  );

  const SkillColumn: React.FC<SkillColumnProps> = ({ title, skills }) => {
    const displayedSkills: Skill[] = skills.slice(0, 5);
    const hiddenSkills: Skill[] = skills.slice(5);

    return (
      <div className="w-full">
        <h3 className="font-semibold mb-4 text-left transition-colors duration-300 hover:text-gray-300">{title}</h3>
        <div className="space-y-2">
          {displayedSkills.map((skill: Skill, index: number) => (
            <SkillItem key={skill.name} skill={skill} index={index} isVisible={true} />
          ))}

          {hiddenSkills.length > 0 && (
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: isExpanded ? `${hiddenSkills.length * 60}px` : '0px',
                opacity: isExpanded ? 1 : 0
              }}
            >
              <div className="space-y-2">
                {hiddenSkills.map((skill: Skill, index: number) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isVisible={isExpanded}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="hidden lg:block w-full">
      <div className="mb-8">
        <h2 className="pt-4 text-muted-foreground text-xs font-small mb-4 tracking-wide transition-all duration-300 hover:tracking-wider">
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <SkillColumn
          title="Languages"
          skills={skillsData.languages}
        />
        <SkillColumn
          title="Frameworks"
          skills={skillsData.frameworks}
        />
        <SkillColumn
          title="Technologies"
          skills={skillsData.technologies}
        />
        <SkillColumn
          title="Manufacturing"
          skills={skillsData.manufacturing}
        />
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={toggleExpanded}
          className="flex items-center justify-center space-x-2 mx-auto px-6 py-2 transition-all duration-300 ease-out hover:bg-gray-800 rounded-lg group"
        >
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
          )}
          <span className="transition-colors duration-200 group-hover:text-gray-300">
            {isExpanded ? 'Show Less' : 'Show More'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;