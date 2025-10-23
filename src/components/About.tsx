import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "Innovation First",
      description: "We push boundaries and explore uncharted territories in technology and space."
    },
    {
      icon: <Target className="w-8 h-8 text-electric" />,
      title: "Mission Driven",
      description: "Every project serves a purpose - solving real problems and creating meaningful impact."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Collaborative",
      description: "We work closely with clients and partners to achieve extraordinary results together."
    },
    {
      icon: <Zap className="w-8 h-8 text-electric" />,
      title: "Agile & Fast",
      description: "Rapid development cycles ensure we deliver cutting-edge solutions quickly."
    }
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "CEO"
    },
    {
      name: "Maya Chen",
      role: "CTO"
    },
    {
      name: "David Park",
      role: "CFO"
    },
    {
      name: "Sarah Johnson",
      role: "CHRO"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            At Almavue, we're dedicated to developing innovative technology solutions that address 
            real-world challenges. From space exploration to immersive gaming experiences, 
            we create applications that make a difference.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Team
            </span>
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            A diverse group of innovators, engineers, and visionaries working together 
            to build the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-electric/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-background">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-accent font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;