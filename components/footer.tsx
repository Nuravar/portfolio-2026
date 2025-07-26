import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, AtSign } from 'lucide-react';

interface FooterProps {
  linkedinUrl?: string;
  email?: string;
}

const Footer: React.FC<FooterProps> = ({
  linkedinUrl = 'https://www.linkedin.com/in/varun-ram/',
  email = 'kothandv@mcmaster.ca',
}) => {
  const handleLinkedinClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
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
  );
};

export default Footer;
