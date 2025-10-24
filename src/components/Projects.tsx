import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Satellite, Gamepad2, Smartphone } from "lucide-react";
import MindCareImage from "@/assets/MindCare.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MindCare",
      category: "Mental Health & AI",
      description:
        "MindCare is a global mental health platform connecting users with certified doctors and therapists across continents. It offers real-time counseling, AI-driven emotional support, and seamless session booking with payment integration.",
      image: MindCareImage,
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
        "Connecting patients with certified mental health professionals across 5 continents, supporting 10,000+ consultations monthly.",
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      status: "Live",
      link: "https://mindcare.almavue.com/",
    },
    {
      id: 2,
      title: "NebulaQuest",
      category: "Gaming",
      description:
        "Immersive space exploration RPG with procedurally generated galaxies, AI-driven alien interactions, and stunning cosmic environments powered by Unity physics simulation.",
      image: "/placeholder.svg",
      technologies: [
        "Unity",
        "C#",
        "Procedural Generation",
        "AI NPCs",
        "Multiplayer",
      ],
      impact: "1M+ downloads across platforms with a thriving online community.",
      icon: <Gamepad2 className="w-6 h-6 text-electric" />,
      status: "Live",
      link: "#",
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      Live: "bg-accent/20 text-accent border-accent/30",
      "In Development": "bg-electric/20 text-electric border-electric/30",
      Beta: "bg-silver/20 text-silver border-silver/30",
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
            Explore the groundbreaking innovations we've built — from global
            mental health platforms to immersive space adventures.
          </p>
        </div>

        {/* Projects */}
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`overflow-hidden border-border/40 shadow-xl hover:shadow-glow/20 transition-all duration-500 bg-gradient-to-b from-card/90 to-muted/30 ${
              project.title === "MindCare"
                ? "max-w-5xl mx-auto" // Center align and make wider
                : "max-w-3xl mx-auto"
            }`}
          >
            <div
              className={`flex flex-col ${
                project.title === "MindCare" ? "lg:flex-col" : "lg:flex-row"
              } items-center`}
            >
              {/* Image */}
              <div
                className={`${
                  project.title === "MindCare" ? "w-full" : "lg:w-1/2 w-full"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full ${
                    project.title === "MindCare"
                      ? "h-[550px] object-cover rounded-lg"
                      : "h-[400px] object-cover"
                  }`}
                />
              </div>

              {/* Content */}
              <CardContent
                className={`${
                  project.title === "MindCare" ? "w-full text-center p-10" : "lg:w-1/2 w-full p-8"
                }`}
              >
                <div
                  className={`flex ${
                    project.title === "MindCare"
                      ? "justify-center mb-6 space-x-3"
                      : "items-center space-x-3 mb-3"
                  }`}
                >
                  {project.icon}
                  <Badge className={getStatusBadge(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3
                  className={`${
                    project.title === "MindCare"
                      ? "text-4xl font-extrabold mb-6"
                      : "text-3xl font-bold mb-4"
                  } text-foreground`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-base text-foreground/80 mb-6 leading-relaxed ${
                    project.title === "MindCare" ? "max-w-3xl mx-auto" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div
                  className={`mb-6 ${
                    project.title === "MindCare" ? "max-w-3xl mx-auto" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-accent mb-2">
                    Global Impact:
                  </p>
                  <p className="text-sm text-foreground/80">{project.impact}</p>
                </div>

                <div
                  className={`mb-8 ${
                    project.title === "MindCare" ? "max-w-3xl mx-auto" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-silver mb-3">
                    Technologies Used:
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      project.title === "MindCare" ? "justify-center" : ""
                    }`}
                  >
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

                <Button
                  size="lg"
                  className="bg-gradient-accent text-background hover:shadow-glow transition-all"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;