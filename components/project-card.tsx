import React from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  backgroundImage: string;
  link: string;
  isExternal?: boolean;
  gradient?: string; // Added gradient property for custom gradients
}

interface ProjectGridProps {
  projects?: Project[];
}

// Fixed dark gradients for each project - you can customize these
const getProjectGradient = (projectId: string, customGradient?: string) => {
  if (customGradient) {
    return customGradient;
  }
  
  const gradients: { [key: string]: string } = {
    '1': 'linear-gradient(135deg, rgba(30, 30, 46, 0.9), rgba(75, 85, 99, 0.8))',
    '2': 'linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(55, 65, 81, 0.8))',
    '3': 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(67, 56, 202, 0.7))',
    '4': 'linear-gradient(135deg, rgba(20, 20, 30, 0.9), rgba(56, 189, 248, 0.7))',
    '5': 'linear-gradient(135deg, rgba(25, 25, 40, 0.9), rgba(139, 69, 19, 0.7))',
  };
  
  // Default gradient if project ID not found
  return gradients[projectId] || 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(75, 85, 99, 0.8))';
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects = [] }) => {

  // Sample data if no projects provided
  const sampleProjects: Project[] = [
    {
      id: '1',
      title: 'Dana Incorporated',
      subtitle: 'R&D',
      description: 'Designing and prototyping battery cooling systems for electric vehicles.',
      date: '2025-08-15',
      backgroundImage: '/images/dana-background.png',
      link: '/dana',
      isExternal: false
    },
        {
      id: '2',
      title: 'Robot Operated Bed',
      subtitle: 'Machine Learning',
      description: 'Developed a line-following hospital bed porter using Python, OpenCV, and Raspberry Pi to automate patient transport and reduce nurse workload.',
      date: '2025-02-28',
      backgroundImage: '/images/rcar.webp',
      link: '/rob',
      isExternal: false,
    },
    {
      id: '3',
      title: 'Heat Sink Design',
      subtitle: 'Simulation',
      description: 'Designed and optimized copper CPU heatsink, reducing temps by 66 °C using natural convection.',
      date: '2024-03-15',
      backgroundImage: '/images/heatsink-cover.jpg',
      link: '/heatsink',
      isExternal: false
    },
    {
      id: '4',
      title: 'Pace++',
      subtitle: 'Embedded Pacemaker',
      description: 'Built simulated pacemaker with 8 modes, real-time ECG, encrypted data, and hardware serial communication.',
      date: '2024-01-20',
      backgroundImage: '/images/K64F-Board.webp',
      link: '/paceplusplus',
      isExternal: false
    },
    {
      id: '5',
      title: 'Keysight',
      subtitle: 'Full Stack Development',
      description: 'Built facial and voice recognition security system with real-time alerts using React, Firebase, and OpenCV.',
      date: '2024-12-10',
      backgroundImage: '/images/keysight-banner.webp',
      link: '/keysight',
      isExternal: false
    },
    {
      id: '6',
      title: 'Slacker Chores',
      subtitle: 'Full Stack Development',
      description: 'Won Best Productivity App at Deltahacks for building a smart chore manager with React, Firebase, and Google Auth.',
      date: '2023-12-10',
      backgroundImage: '/images/slackerchores.webp',
      link: '/slacker', 
      isExternal: false
    }
  ];

  const projectsToDisplay = projects.length > 0 ? projects : sampleProjects;

  const handleCardClick = (project: Project) => {
    if (project.isExternal) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      // For internal navigation - this will work with React Router
      // You can replace this with your preferred navigation method
      window.location.href = project.link;
      
      // Alternative: If using React Router, you can use:
      // import { useNavigate } from 'react-router-dom';
      // const navigate = useNavigate();
      // navigate(project.link);
    }
  };

  return (
    <div className="w-full max-w-10xl mx-auto pt-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsToDisplay.map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer transition-all duration-300"
            onClick={() => handleCardClick(project)}
          >
            {/* Background Image with Fixed Gradient */}
            <div
              className="relative w-full h-100 bg-cover bg-center transition-all duration-300 group-hover:brightness-110 rounded-lg overflow-hidden hover:ring-[3px] hover:ring-[#c9b6a5] hover:ring-offset-1 hover:ring-offset-background"
              style={{
                backgroundImage: project.backgroundImage 
                  ? `url(${project.backgroundImage}), ${getProjectGradient(project.id, project.gradient)}`
                  : getProjectGradient(project.id, project.gradient)
              }}
            >
              {/* Photo placeholder - ready for when you add photos */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Photo would go here */}
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-4 transition-all duration-300 group-hover:brightness-190">
              <div className="flex justify-between items-start">
                {/* Title & Subtitle Group */}
                <div className="flex-none mr-4">
                  <h3 className="text-base font-semibold mb-0">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground mt-0">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description Text - Hidden on smaller screens (mobile) */}
                <div className="hidden sm:block flex-grow pr-4">
                  <small className=" text-muted-foreground leading-relaxed">
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
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;