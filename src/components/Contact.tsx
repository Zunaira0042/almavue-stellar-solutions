import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to start your next innovative project? Let's discuss how we can 
            bring your vision to life with cutting-edge technology.
          </p>
        </div>

        {/* Centered Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {/* Email Us */}
          <Card className="flex-1 bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
              <a
                href="mailto:contact@almavue.com"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                contact@almavue.com
              </a>
            </CardContent>
          </Card>

          {/* Connect With Us */}
          <Card className="flex-1 bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Us</h3>
              <a
                href="https://www.linkedin.com/company/almavue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
