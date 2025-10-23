import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import almavueLogo from "@/assets/almavue-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press Kit", href: "#press" },
    ],
    services: [
      { label: "Space Technology", href: "#services" },
      { label: "App Development", href: "#services" },
      { label: "Game Development", href: "#services" },
      { label: "AI & ML", href: "#services" },
    ],
    resources: [
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#projects" },
      { label: "Documentation", href: "#docs" },
      { label: "Support", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "GDPR", href: "#gdpr" },
    ]
  };

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img 
                src={almavueLogo} 
                alt="Almavue logo" 
                className="h-12 w-auto invert brightness-0 dark:invert-0 dark:brightness-100"
              />
            </a>
            
            <p className="text-foreground/70 mb-6 leading-relaxed max-w-md">
              Building the future of technology through innovative applications, 
              space-related solutions, and immersive gaming experiences that solve 
              real-world challenges.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-foreground/80">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contact@almavue.com" className="hover:text-accent transition-colors">
                  contact@almavue.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/80">
                <Phone className="w-4 h-4 text-electric" />
                <a href="tel:+1234567890" className="hover:text-electric transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-accent" />
                <span>123 Innovation Drive, Tech District, CA 90210</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="border-accent/30 hover:bg-accent/10 w-10 h-10 p-0">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-electric/30 hover:bg-electric/10 w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-accent/30 hover:bg-accent/10 w-10 h-10 p-0">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-background/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Stay Updated</h4>
              <p className="text-xs text-foreground/60 mb-3">
                Get the latest news about our projects and innovations.
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-xs bg-background border border-border/50 rounded focus:outline-none focus:border-accent"
                />
                <Button size="sm" className="bg-accent text-background hover:shadow-glow px-3">
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60">
              © {currentYear} Almavue. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;