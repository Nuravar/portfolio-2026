import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, AtSign, ArrowUp } from 'lucide-react';

interface FooterProps {
  linkedinUrl?: string;
  email?: string;
}

const Footer: React.FC<FooterProps> = ({
  linkedinUrl = 'https://www.linkedin.com/in/varun-ram/',
  email = 'kothandv@mcmaster.ca',
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Monitor if footer is visible
  useEffect(() => {
    const footerElement = document.querySelector('footer');
    
    const handleScroll = () => {
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;
        
        if (!isFooterVisible && showScrollTop) {
          // Start fade out animation
          setIsAnimatingOut(true);
          setTimeout(() => {
            setShowScrollTop(false);
            setIsAnimatingOut(false);
          }, 200); // Match the animation duration
        } else if (isFooterVisible && !showScrollTop) {
          setShowScrollTop(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollTop]);

  const handleLinkedinClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const scrollToTop = () => {
    const scrollDuration = 1200; // Increased duration for smoother animation
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    
    const animateScroll = (currentTime: number): void => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / scrollDuration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easedProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <footer
        className="w-full py-8"
        style={{ backgroundColor: 'oklch(0.22 0.008 35)' }}
      >
        <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-left space-y-4">
            <h1 className="text-sm font-bold">Get in touch :-)</h1>

            <small className="block max-w-md text-muted-foreground">
              I can be easily reached through{' '}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 underline" >
                LinkedIn
              </a>{' '}
              or{' '}
              <a
                href={`mailto:${email}`}
                className="hover:text-gray-300 underline"
              >
                email
              </a>
              .
            </small>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="flex items-center gap-2 w-fit"
              >
                <AtSign className="w-3 h-3" />
                Email
              </Button>

              <Button
                onClick={handleLinkedinClick}
                variant="outline"
                className="flex items-center gap-2 w-fit"
              >
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button with enhanced animations */}
      {(showScrollTop || isAnimatingOut) && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="sm"
          className={`fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-background/80 backdrop-blur-sm ${
            isAnimatingOut 
              ? 'animate-out fade-out slide-out-to-bottom-4 duration-200' 
              : 'animate-in fade-in slide-in-from-bottom-4 duration-200'
          }`}
        >
          <ArrowUp className="w-4 h-4 animate-bounce hover:animate-none transition-all" />
          <span className="sr-only">Back to top</span>
        </Button>
      )}
    </>
  );
};

export default Footer;