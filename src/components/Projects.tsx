import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gamepad2, Smartphone } from "lucide-react";
import MindCareVideo from "@/assets/MCV.mp4";       // MindCare video
import SpaceVideo from "@/assets/Space.mp4";        // SpaceX VR video
import HauntedVideo from "@/assets/Haunted.mp4"; // Haunted Town video

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MindCare",
      category: "Mental Health & AI",
      description:
        "MindCare is a global mental health platform connecting users with certified doctors and therapists across continents. It offers real-time counseling, AI-driven emotional support, and seamless session booking with payment integration.",
      video: MindCareVideo,
      technologies: [
        "Unity",
        "WebGL",
        "JavaScript",
        "Firebase Cloud",
        "AI Integration",
        "Firestore",
        "Zenject",
        "Google Sign-In",
      ],
      impact:
        "Connecting patients with certified mental health professionals across 5 continents — helping people start their healing journey with trust and ease.",
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      status: "Live",
      link: "https://mindcare.almavue.com/",
    },
    {
      id: 2,
      title: "SpaceX VR",
      category: "Virtual Reality",
      description:
        "Space VR Project is an immersive virtual reality experience where I contributed as a Unity Developer, focusing on building interactive gameplay systems and optimizing the overall user experience. I worked on modular architecture and clean code practices, leveraging Zenject for dependency injection to maintain scalability and flexibility throughout the project.",
      video: SpaceVideo,
      technologies: [
        "Unity",
        "Zenject (Dependency Injection)",
        "Unity XR Interaction Toolkit",
        "ScriptableObjects",
        "SOLID Principles",
        "Performance Optimization for VR",
      ],
      impact:
        "Pioneering immersive space experiences through VR with modular, scalable, and high-performance gameplay systems.",
      icon: <Gamepad2 className="w-6 h-6 text-electric" />,
      status: "Beta",
      link: "#", // no live link
    },
    {
      id: 3,
      title: "Haunted Town",
      category: "PC FPS / 3D",
      description:
        "Haunted Town is a first-person Unity project set in a fully immersive 3D environment with enemy AI and optimized gameplay. The project demonstrates strong FPS mechanics and rich, interactive environments.",
      video: HauntedVideo,
      technologies: [
        "Unity",
        "FPS Mechanics",
        "3D Environments",
        "Enemy AI Integration",
        "Performance Optimization",
      ],
      impact:
        "An engaging, immersive first-person experience optimized for PC users, highlighting strong environmental design and interactive gameplay.",
      icon: <Gamepad2 className="w-6 h-6 text-electric" />,
      status: "Live",
      link: "https://apps.microsoft.com/detail/9ppgs21dkcck?hl=en-US&gl=US", // optional demo link
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      Live: "bg-accent/20 text-accent border-accent/30",
      Beta: "bg-silver/20 text-silver border-silver/30",
      Completed: "bg-accent/20 text-accent border-accent/30",
    };
    return statusConfig[status] || statusConfig["Live"];
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 space-y-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore the groundbreaking innovations we've built — from global mental health platforms to immersive VR and PC experiences.
          </p>
        </div>

        {/* Projects */}
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border-border/40 shadow-xl hover:shadow-glow/20 transition-all duration-500 bg-gradient-to-b from-card/90 to-muted/30 max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center">
              {/* Video */}
              <div className="lg:w-1/2 w-full">
                {project.video && (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-full h-[400px] lg:h-[450px] object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Content */}
              <CardContent className="lg:w-1/2 w-full p-8 lg:p-10">
                <div className="flex items-center space-x-3 mb-3">
                  {project.icon}
                  <Badge className={getStatusBadge(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>

                <p className="text-base text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-medium text-accent mb-2">
                    Global Impact:
                  </p>
                  <p className="text-sm text-foreground/80">{project.impact}</p>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-medium text-silver mb-3">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Only show "View Live" for Live projects */}
                {project.status === "Live" && (
                  <Button
                    size="lg"
                    className="bg-gradient-accent text-background hover:shadow-glow transition-all"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                )}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
