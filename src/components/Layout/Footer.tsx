import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-cyan-900/20 border m-2 rounded-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">Kalki UI Hooks.</div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
