import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Gamepad2, Satellite, Brain, Smartphone, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Satellite className="w-12 h-12 text-accent" />,
      title: "Space Technology Solutions",
      description: "Custom satellite systems, orbital mechanics simulation, and space mission planning software.",
      features: [
        "Satellite tracking systems",
        "Mission control interfaces", 
        "Orbital simulation software",
        "Space data analytics"
      ],
      color: "accent"
    },
    {
      icon: <Code className="w-12 h-12 text-electric" />,
      title: "Custom Application Development",
      description: "Full-stack web and mobile applications tailored to solve your specific business challenges.",
      features: [
        "Web application development",
        "Mobile app development",
        "API design & integration",
        "Cloud infrastructure"
      ],
      color: "electric"
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-accent" />,
      title: "Game Development",
      description: "Immersive gaming experiences with cutting-edge graphics and innovative gameplay mechanics.",
      features: [
        "3D game development",
        "VR/AR experiences", 
        "Multiplayer systems",
        "Game engine optimization"
      ],
      color: "accent"
    },
    {
      icon: <Brain className="w-12 h-12 text-electric" />,
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn, adapt, and provide insights to drive better decision making.",
      features: [
        "Predictive analytics",
        "Computer vision",
        "Natural language processing",
        "Automated decision systems"
      ],
      color: "electric"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-accent" />,
      title: "IoT Solutions",
      description: "Connected device ecosystems that bridge the physical and digital worlds seamlessly.",
      features: [
        "Sensor networks",
        "Real-time monitoring",
        "Device management",
        "Data visualization"
      ],
      color: "accent"
    },
    {
      icon: <Rocket className="w-12 h-12 text-electric" />,
      title: "Innovation Consulting",
      description: "Strategic guidance to help organizations adopt emerging technologies and drive innovation.",
      features: [
        "Technology roadmapping",
        "Digital transformation",
        "Innovation workshops",
        "Technical architecture"
      ],
      color: "electric"
    }
  ];

  const problemsSolved = [
    "Complex data visualization and analytics challenges",
    "Real-time system monitoring and control requirements", 
    "Scalable cloud infrastructure and deployment needs",
    "Advanced simulation and modeling requirements",
    "Integration of legacy systems with modern tech",
    "Custom hardware and software integration"
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We specialize in solving complex technological challenges across multiple domains, 
            from space exploration to cutting-edge applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                      <ArrowRight className={`w-4 h-4 mr-2 ${service.color === 'accent' ? 'text-accent' : 'text-electric'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problems We Solve */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Problems We{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Solve
              </span>
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Our expertise spans across various technological challenges, 
              delivering solutions that drive real business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemsSolved.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground/80">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-accent text-background font-semibold hover:shadow-glow">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;