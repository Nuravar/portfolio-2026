import React from 'react';
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  link: string;
  isExternal?: boolean;
  // Media options - use either photo OR video
  photo?: string;
  video?: string;
  videoZoom?: number; // Scale factor for video (e.g., 1.2 for 20% zoom)
}

interface ProjectGridProps {
  projects?: Project[];
  fullWidthCount?: number;
}

const ProjectCard: React.FC<{ 
  project: Project; 
  onCardClick: (project: Project) => void;
  isFullWidth?: boolean;
}> = ({ 
  project, 
  onCardClick,
  isFullWidth = false
}) => {
  return (
    <div
      className="group cursor-pointer transition-all duration-300"
      onClick={() => onCardClick(project)}
    >
      {/* Media Container */}
      <div
        className={`relative w-full bg-gray-800 transition-all duration-300 group-hover:brightness-110 rounded-lg overflow-hidden hover:ring-[3px] hover:ring-[#c9b6a5] hover:ring-offset-1 hover:ring-offset-background ${
          isFullWidth ? 'h-[70vh]' : 'h-100'
        }`}
      >
        {/* Render video if provided */}
        {project.video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: project.videoZoom ? `scale(${project.videoZoom})` : undefined
            }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={project.video} type="video/mp4" />
            <source src={project.video.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : project.photo ? (
          /* Render photo if provided */
           <div className="absolute inset-0">
              <Image
                src={project.photo}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      50vw"
                style={{
                  objectFit: "cover"
                }}
                quality={100} // force max quality
              />
            </div>
        ) : (
          /* Fallback gradient background */
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
        )}
      </div>

      {/* Content Section */}
      <div className="mt-4 transition-all duration-300 group-hover:brightness-190">
        <div className="flex justify-between items-start">
          {/* Title & Subtitle */}
          <div className="flex-none mr-4">
            <h3 className="text-base font-semibold mb-0">
              {project.title}
            </h3>
            <p className="text-base text-muted-foreground mt-0">
              {project.subtitle}
            </p>
          </div>

          {/* Description - Hidden on mobile */}
          <div className="hidden sm:block flex-grow pr-4">
            <small className="text-muted-foreground leading-relaxed">
              {project.description}
            </small>
          </div>

          {/* Date */}
          <div className="flex-none">
            <p className="text-base">
              {new Date(project.date).getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects = [], 
  fullWidthCount = 0 
}) => {
  // Sample data
  const sampleProjects: Project[] = [
    {
      id: '1',
      title: 'Dana Incorporated',
      subtitle: 'R&D',
      description: 'Designing and prototyping battery cooling systems for electric vehicles.',
      date: '2025-08-15',
      video: '/videos/dana-demo.mp4', // Using video
      videoZoom: 1.15,
      link: '/dana'
    },
    // {
    //   id: '2',
    //   title: 'Robot Operated Bed',
    //   subtitle: 'Machine Learning',
    //   description: 'Developed a line-following hospital bed porter using Python, OpenCV, and Raspberry Pi.',
    //   date: '2025-02-28',
    //   photo: '/images/rcar.webp',
    //   link: '/rob'
    // },
    {
      id: '2',
      title: 'Formula Student',
      subtitle: 'Electric Racecar',
      description: 'Developed HIL software with McMaster’s Formula Student team.',
      date: '2024-02-28',
      photo: '/images/formula.jpg',
      isExternal: true,
      link: 'https://macformularacing.com/'
    },
    {
      id: '7',
      title: 'McMaster Solar Car',
      subtitle: 'Solar-Powered Vehicle',
      description: 'Manufactured aluminium components, aero-shells, and developed suspension models.',
      date: '2023-02-28',
      photo: '/images/solarcar.png',
      isExternal: true,
      link: 'https://www.mcmastersolarcar.com/'
    },
    {
      id: '3',
      title: 'Heat Sink Design',
      subtitle: 'Simulation',
      description: 'Designed and optimized copper CPU heatsink, reducing temps by 66 °C using natural convection.',
      date: '2024-03-15',
      photo: '/images/heatsink.png',
      link: '/heatsink'
    },
    {
      id: '4',
      title: 'Pace++',
      subtitle: 'Embedded Pacemaker',
      description: 'Built simulated pacemaker with 8 modes, real-time ECG, encrypted data, and hardware serial communication.',
      date: '2024-01-20',
      photo: '/images/K64F-Board.webp',
      link: '/paceplusplus'
    },
    {
      id: '5',
      title: 'Keysight',
      subtitle: 'Full Stack Development',
      description: 'Built facial and voice recognition security system with real-time alerts using React, Firebase, and OpenCV.',
      date: '2024-12-10',
      photo: '/images/keysight-banner.webp',
      link: '/keysight'
    },
    {
      id: '6',
      title: 'Slacker Chores',
      subtitle: 'Full Stack Development',
      description: 'Won Best Productivity App at Deltahacks for building a smart chore manager with React, Firebase, and Google Auth.',
      date: '2023-12-10',
      photo: '/images/slackerchores.png',
      link: '/slacker'
    }
  ];

  const projectsToDisplay = projects.length > 0 ? projects : sampleProjects;
  const fullWidthProjects = projectsToDisplay.slice(0, fullWidthCount);
  const twoColumnProjects = projectsToDisplay.slice(fullWidthCount);

  const handleCardClick = (project: Project) => {
    if (project.isExternal) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = project.link;
    }
  };

  return (
    <div className="w-full max-w-10xl mx-auto py-8">
      {/* Full-width cards */}
      {fullWidthProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-8 mb-8">
          {fullWidthProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={handleCardClick}
              isFullWidth={true}
            />
          ))}
        </div>
      )}
      
      {/* Two-column cards */}
      {twoColumnProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {twoColumnProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={handleCardClick}
              isFullWidth={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;