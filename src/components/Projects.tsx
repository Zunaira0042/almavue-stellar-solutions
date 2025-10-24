import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone } from "lucide-react";
import MindCareVideo from "@/assets/MCV.mp4"; // your MindCare video

const Projects = () => {
  const project = {
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
      "Connecting patients with certified mental health professionals worldwide — helping people begin their healing journey with trust and ease.",
    icon: <Smartphone className="w-6 h-6 text-accent" />,
    status: "Live",
    link: "https://mindcare.almavue.com/",
  };

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
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore the innovations shaping accessible mental health and AI-powered wellness solutions.
          </p>
        </div>

        {/* MindCare Project */}
     <Card className="overflow-hidden border-border/40 shadow-xl hover:shadow-glow/20 transition-all duration-500 bg-gradient-to-b from-card/90 to-muted/30 max-w-6xl mx-auto">
  <div className="flex flex-col lg:flex-row items-stretch">
    {/* Video on the left */}
    <div className="lg:w-1/2 w-full">
      <video
        src={project.video}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-full lg:h-full object-cover rounded-lg"
      />
    </div>

    {/* Content on the right */}
    <CardContent className="lg:w-1/2 w-full p-10 flex flex-col justify-center">
      <div className="flex items-center space-x-3 mb-4">
        {project.icon}
        <Badge className={getStatusBadge(project.status)}>
          {project.status}
        </Badge>
        <Badge variant="secondary" className="text-xs">
          {project.category}
        </Badge>
      </div>

      <h3 className="text-4xl font-extrabold mb-6 text-foreground">
        {project.title}
      </h3>

      <p className="text-base text-foreground/80 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6">
        <p className="text-sm font-medium text-accent mb-2">Global Impact:</p>
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

      <Button
        size="lg"
        className="bg-gradient-accent text-background hover:shadow-glow transition-all mt-auto"
        onClick={() => window.open(project.link, "_blank")}
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        View Live
      </Button>
    </CardContent>
  </div>
</Card>

      </div>
    </section>
  );
};

export default Projects;
