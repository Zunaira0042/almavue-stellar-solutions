import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Gamepad2, Satellite, Brain, Stethoscope, ArrowRight, Building2 } from "lucide-react";

const Services = () => {
  const services = [
{
  icon: <HeartHandshake className="w-12 h-12 text-accent" />,
  title: "Wellbeing & Human Development",
  description:
    "Empowering individuals, communities, schools, universities, and organizations through technology, education, and purpose-driven wellbeing initiatives.",
  features: [
    "Student wellbeing programs",
    "Corporate wellbeing initiatives",
    "Community engagement",
    "Digital wellbeing platforms"
  ],
  color: "accent"
},
    
 {
  icon: <GraduationCap className="w-12 h-12 text-electric" />,
  title: "Education & Research",
  description:
    "Creating innovative learning experiences and research collaborations that inspire curiosity, critical thinking, and lifelong learning.",
  features: [
    "Educational technology",
    "Research collaborations",
    "Interactive learning",
    "Academic partnerships"
  ],
  color: "electric"
},
    {
  icon: <Orbit className="w-12 h-12 text-accent" />,
  title: "Space Science & Exploration",
  description:
    "Immersive experiences that bring astronomy, cosmology, relativity, and quantum physics to life through interactive technologies.",
  features: [
    "Virtual space exploration",
    "Cosmology simulations",
    "Black holes & wormholes",
    "Interactive scientific learning"
  ],
  color: "accent"
},
    {
  icon: <Glasses className="w-12 h-12 text-electric" />,
  title: "XR & Immersive Technologies",
  description:
    "Building immersive virtual and augmented reality experiences that educate, inspire, and transform how people interact with digital environments.",
  features: [
    "Virtual Reality",
    "Augmented Reality",
    "Interactive simulations",
    "Immersive storytelling"
  ],
  color: "electric"
},    
      
{
  icon: <BrainCircuit className="w-12 h-12 text-accent" />,
  title: "Intelligent Digital Solutions",
  description:
    "Designing modern digital platforms that combine intelligent technologies with human-centered experiences to solve meaningful challenges.",
  features: [
    "Web platforms",
    "Mobile applications",
    "Cloud solutions",
    "Intelligent automation"
  ],
  color: "accent"
}, 
 {
  icon: <Handshake className="w-12 h-12 text-electric" />,
  title: "Strategic Innovation & Partnerships",
  description:
    "Collaborating with universities, organizations, communities, and industry partners to create sustainable innovation and long-term impact.",
  features: [
    "University partnerships",
    "Innovation consulting",
    "Research initiatives",
    "Technology strategy"
  ],
  color: "electric"
}
  ];

  const problemsSolved = [
  "Making education more engaging through immersive technologies.",
  "Supporting wellbeing across schools, universities, workplaces, and communities.",
  "Transforming complex scientific concepts into interactive learning experiences.",
  "Bridging research, education, and technology through meaningful innovation.",
  "Creating scalable digital platforms that improve accessibility and human connection.",
  "Building collaborative solutions that create lasting social and educational impact."
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
