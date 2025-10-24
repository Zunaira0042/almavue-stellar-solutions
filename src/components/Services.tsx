const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-foreground/60">
            © {currentYear} Almavue. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="/privacy.html"
              className="text-sm text-foreground/60 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="/terms.html"
              className="text-sm text-foreground/60 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            <a
              href="/cookies.html"
              className="text-sm text-foreground/60 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </a>
            <a
              href="/gdpr.html"
              className="text-sm text-foreground/60 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
