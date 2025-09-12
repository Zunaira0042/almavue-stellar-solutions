import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Satellite, Gamepad2, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "OrbitTrack Pro",
      category: "Space Technology",
      description: "Real-time satellite tracking and orbital mechanics simulation platform for space agencies and educational institutions.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "WebGL", "NASA APIs", "PostgreSQL"],
      impact: "Used by 50+ space agencies worldwide",
      icon: <Satellite className="w-6 h-6 text-accent" />,
      status: "Live"
    },
    {
      id: 2,
      title: "NebulaQuest",
      category: "Gaming",
      description: "Immersive space exploration RPG with procedurally generated galaxies and realistic physics simulation.",
      image: "/placeholder.svg",
      technologies: ["Unity", "C#", "Procedural Generation", "Multiplayer", "AI"],
      impact: "1M+ downloads across platforms",
      icon: <Gamepad2 className="w-6 h-6 text-electric" />,
      status: "Live"
    },
    {
      id: 3,
      title: "AgroSense AI",
      category: "Agriculture Tech",
      description: "Smart farming application using satellite imagery and AI to optimize crop yields and resource management.",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "Satellite Imagery", "IoT", "React Native"],
      impact: "30% yield increase for 1000+ farms",
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      status: "Live"
    },
    {
      id: 4,
      title: "StarLink Dashboard",
      category: "Space Technology",
      description: "Mission control interface for small satellite constellations with real-time telemetry and command capabilities.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Python", "Redis", "WebSocket", "Docker"],
      impact: "Managing 200+ satellites",
      icon: <Satellite className="w-6 h-6 text-electric" />,
      status: "In Development"
    },
    {
      id: 5,
      title: "VR Training Sim",
      category: "Virtual Reality",
      description: "Astronaut training simulation for spacewalk procedures and emergency response protocols.",
      image: "/placeholder.svg",
      technologies: ["Unity VR", "Oculus SDK", "Physics Engine", "Training Analytics"],
      impact: "Training 500+ astronauts",
      icon: <Gamepad2 className="w-6 h-6 text-accent" />,
      status: "Beta"
    },
    {
      id: 6,
      title: "Climate Monitor",
      category: "Environmental Tech",
      description: "Global climate monitoring system using satellite data to track environmental changes and predict trends.",
      image: "/placeholder.svg",
      technologies: ["Machine Learning", "Satellite Data", "Time Series", "GIS", "APIs"],
      impact: "Monitoring 95% of Earth's surface",
      icon: <Satellite className="w-6 h-6 text-electric" />,
      status: "Live"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Live": "bg-accent/20 text-accent border-accent/30",
      "In Development": "bg-electric/20 text-electric border-electric/30",
      "Beta": "bg-silver/20 text-silver border-silver/30"
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig["Live"];
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the innovative solutions we've created across space technology, 
            gaming, and cutting-edge applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  {project.icon}
                  <Badge className={getStatusBadge(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-medium text-accent mb-2">Impact:</p>
                  <p className="text-sm text-foreground/80">{project.impact}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs font-medium text-silver mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-border/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-border/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="default" className="flex-1 bg-gradient-accent text-background hover:shadow-glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button size="sm" variant="outline" className="border-border/50">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;