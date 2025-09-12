import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80 mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="john@company.com"
                  className="bg-background/50 border-border/50 focus:border-accent"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80 mb-2 block">
                  Project Type
                </label>
                <select className="w-full p-3 bg-background/50 border border-border/50 rounded-md focus:border-accent focus:outline-none text-foreground">
                  <option value="">Select a service</option>
                  <option value="space-tech">Space Technology</option>
                  <option value="app-development">Application Development</option>
                  <option value="game-development">Game Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="iot">IoT Solutions</option>
                  <option value="consulting">Innovation Consulting</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/80 mb-2 block">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-accent"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-accent text-background font-semibold hover:shadow-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-foreground/70 mb-2">Get in touch via email</p>
                    <a href="mailto:contact@almavue.com" className="text-accent hover:text-accent/80 transition-colors">
                      contact@almavue.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-electric" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-foreground/70 mb-2">Speak with our team</p>
                    <a href="tel:+1234567890" className="text-electric hover:text-electric/80 transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-foreground/70 mb-2">Our headquarters</p>
                    <p className="text-foreground/80">
                      123 Innovation Drive<br />
                      Tech District, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-accent/30 hover:bg-accent/10">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-electric/30 hover:bg-electric/10">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-accent/30 hover:bg-accent/10">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Careers CTA */}
            <Card className="bg-gradient-accent border-accent/30 shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-background mb-2">Join Our Team</h3>
                <p className="text-background/80 mb-4 text-sm">
                  We're always looking for talented individuals to join our mission.
                </p>
                <Button variant="secondary" size="sm" className="bg-background text-accent hover:bg-background/90">
                  View Careers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;