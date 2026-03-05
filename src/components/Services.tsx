import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Gamepad2, Satellite, Brain, Stethoscope, ArrowRight, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Satellite className="w-12 h-12 text-accent" />,
      title: "Space Exploration & VR Education",
      description:
        "Immersive VR-based space experiences where users can explore galaxies, black holes, nebulas, and planetary systems — making space science interactive and educational.",
      features: [
        "Virtual reality space exploration",
        "Interactive black hole & nebula simulations",
        "Galactic-scale learning environments",
        "Educational tools on space-time & gravity"
      ],
      color: "accent"
    },
    {
      icon: <Code className="w-12 h-12 text-electric" />,
      title: "Custom Application Development",
      description:
        "We build full-stack web and mobile applications tailored to your goals — combining modern architecture, smooth interfaces, and scalable cloud systems.",
      features: [
        "Web application development",
        "Mobile app development",
        "API design & integration",
        "Cloud infrastructure solutions"
      ],
      color: "electric"
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-accent" />,
      title: "Game Development",
      description:
        "Engaging and meaningful game experiences, combining creativity, storytelling, and immersive technologies such as AR and VR to educate, entertain, and inspire.",
      features: [
        "3D & VR game experiences",
        "Educational game design",
        "Interactive learning environments",
        "Optimized cross-platform builds"
      ],
      color: "accent"
    },
    {
      icon: <Brain className="w-12 h-12 text-electric" />,
      title: "AI & Machine Learning",
      description:
        "Building intelligent systems and vertical agents that merge AI into fields like healthcare, engineering, and agriculture — enhancing decision-making and modernization.",
      features: [
        "AI-driven diagnostic tools",
        "Predictive & prescriptive analytics",
        "Computer vision & NLP",
        "Vertical agents for diverse industries"
      ],
      color: "electric"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-accent" />,
      title: "Healthcare & Mental Wellness Technology",
      description:
        "Digital solutions focused on mental health and medical innovation — connecting international doctors, improving accessibility, and enabling research-driven care.",
      features: [
        "Telemedicine & virtual consultations",
        "Mental health support systems",
        "AI-assisted healthcare platforms",
        "Research & data-driven patient care"
      ],
      color: "accent"
    },
    {
      icon: <Building2 className="w-12 h-12 text-electric" />,
      title: "Architecture & Innovation Consulting",
      description:
        "From technology roadmaps to digital transformation and architectural visualization — we bridge creativity, research, and technology to build the future.",
      features: [
        "Technology roadmapping & R&D",
        "Architectural visualization (AR/VR)",
        "Digital transformation strategies",
        "Innovation workshops & design thinking"
      ],
      color: "electric"
    }
  ];

  const problemsSolved = [
    "Creating immersive educational experiences through VR and interactive design",
    "Bridging technology with healthcare, engineering, and architecture",
    "Developing AI systems that understand and adapt to diverse fields",
    "Enabling scalable and modern digital infrastructures",
    "Advancing mental health and well-being through intelligent platforms",
    "Transforming traditional learning into experiential knowledge"
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
            We bridge technology with education, healthcare, and innovation — creating 
            immersive, intelligent, and impactful solutions for a better future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300 group"
            >
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
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-foreground/80"
                    >
                      <ArrowRight
                        className={`w-4 h-4 mr-2 ${
                          service.color === "accent" ? "text-accent" : "text-electric"
                        }`}
                      />
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
              Our expertise merges innovation and education to tackle real-world 
              challenges through technology, research, and creative thinking.
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
  <a href="#contact" className="inline-block">
    <Button
      size="lg"
      className="bg-gradient-accent text-background font-semibold hover:shadow-glow"
    >
      Discuss Your Project
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Services;
