import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface ExternalLinkCardProps {
  url: string;
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'minimal' | 'elevated';
  showFavicon?: boolean;
}

export const ExternalLinkCard: React.FC<ExternalLinkCardProps> = ({ 
  url, 
  title, 
  description, 
  className = "",
  variant = 'default',
  showFavicon = true
}) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  // Extract domain for favicon
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  };

  const domain = getDomain(url);
  const faviconUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=16` : null;

  const baseClasses = "group relative w-full cursor-pointer transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 overflow-hidden";
  
  const variantClasses = {
    default: "border border-border/60 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-white/10 hover:backdrop-blur-xl hover:border-white/20 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1 active:translate-y-0",
    minimal: "border border-transparent rounded-md bg-transparent hover:bg-white/5 hover:backdrop-blur-lg hover:border-white/10",
    elevated: "border border-border/40 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md shadow-sm hover:bg-white/10 hover:backdrop-blur-2xl hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 hover:border-white/30"
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${title || url} in new tab`}
    >
      {/* Glass overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
      
      {/* Glass shine effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200" />
      
      <div className="relative p-4">
        <div className="flex items-start gap-3">
          {/* Favicon or Globe icon */}
          <div className="flex-shrink-0 mt-0.5">
            {showFavicon && faviconUrl ? (
              <div className="w-5 h-5 rounded-sm overflow-hidden bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                <img 
                  src={faviconUrl}
                  alt=""
                  className="w-4 h-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Globe className="w-3 h-3 text-muted-foreground/60 hidden" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-sm bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                <Globe className="w-3 h-3 text-muted-foreground/60" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-1">
            {title && (
              <div className="font-semibold text-sm leading-snug text-foreground group-hover:text-foreground/90 transition-colors duration-300 line-clamp-2">
                {title}
              </div>
            )}
            
            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-muted-foreground/90 transition-colors duration-300">
                {description}
              </p>
            )}
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground/80 group-hover:text-muted-foreground/70 transition-colors duration-300">
              <div className="truncate font-mono">
                {domain || url}
              </div>
              {domain && (
                <div className="w-1 h-1 rounded-full bg-muted-foreground/40 group-hover:bg-white/30 transition-colors duration-300" />
              )}
            </div>
          </div>

          {/* External link icon */}
          <div className="flex-shrink-0">
            <ExternalLink className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary group-hover:scale-110 group-hover:drop-shadow-sm transition-all duration-300" />
          </div>
        </div>

        {/* Glass bottom border */}
        <div className="absolute bottom-0 left-2.5 right-2.5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
      </div>
    </div>
  );
};