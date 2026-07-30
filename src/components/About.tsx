import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Users, Zap } from "lucide-react";
import cfoImage from "@/assets/team-cfo.png";
import chroImage from "@/assets/team-chro.png";
import ctoImage from "@/assets/team-cto.png";
import ceoImage from "@/assets/team-ceo.png";
import cmoImage from "@/assets/team-cmo.png";
import jananiImage from "@/assets/Janani.png";
import mennaImage from "@/assets/Menna.png";
import erasmusImage from "@/assets/Erasmus.png";
import AnnaImage from "@/assets/Anna.png";
import juliaImage from "@/assets/Julia.png";
import shellieImage from "@/assets/Shellie.png";
import successImage from "@/assets/Success.png";
import oluwaImage from "@/assets/OluwaBukola.png";
import euniceImage from "@/assets/Eunice.png";
import margaretImage from "@/assets/Margaret.png";
import laibaImage from "@/assets/Laiba.png";
import amandaImage from "@/assets/Amanda.png";



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
    name: "Zunaira Nazir",
    role: "Chief Technical Officer (CTO)",
    country: "Pakistan",
    specialization: "VR • Web • XR",
    image: ctoImage,
},
{
    name: "Tanja Schmid",
    role: "Chief Marketing Officer (CMO)",
    country: "Germany",
    specialization: "Marketing • Branding",
    image: cmoImage,
},
{
    name: "Nudrat Naem",
    role: "Chief Human Resources Officer (CHRO)",
    country: "Pakistan",
    specialization: "Talent • Leadership",
    image: chroImage,
},
{
    name: "Janani Jeyaprakash",
    role: "Product Experience Designer",
    country: "India",
    specialization: "UI/UX • Research",
    image: jananiImage,
},
{
    name: "Menna Younis",
    role: "Product Experience Designer",
    country: "Egypt",
    specialization: "UI/UX • Product Design",
    image: mennaImage,
},
{
    name: "Erasmus Okiror",
    role: "XR & Unity Developer",
    country: "Uganda",
    specialization: "VR • Unity • XR",
    image: erasmusImage,
},
{
    name: "Anna",
    role: "Mental Wellness Expert",
    country: "Ukraine",
    specialization: "Wellness • Support",
    image: AnnaImage,
},
{
    name: "Julia Zielina",
    role: "Relationship & Wellness Expert",
    country: "Poland",
    specialization: "Relationships • Wellness",
    image: juliaImage,
},
{
    name: "Shellie R. Warren",
    role: "Personal Growth & Wellness Coach",
    country: "United States",
    specialization: "Growth • Mindset",
    image: shellieImage,
},
{
    name: "Amanda Almeida",
    role: "Mental Wellness Expert",
    country: "Brazil",
    specialization: "Anxiety • Support",
    image: amandaImage,
},
{
    name: "Success Smith",
    role: "Mental Wellness Specialist",
    country: "Nigeria",
    specialization: "Resilience • Growth",
    image: successImage,
},
{
    name: "Oluwabukola A.",
    role: "Behavioral Wellness Specialist",
    country: "Nigeria",
    specialization: "Trauma • CBT",
    image: oluwaImage,
},
{
    name: "Eunice W.",
    role: "Mental Wellness Consultant",
    country: "Kenya",
    specialization: "Anxiety • Trauma",
    image: euniceImage,
},
{
    name: "Margaret Vasileva",
    role: "Mental Wellness Expert",
    country: "Bulgaria",
    specialization: "Trauma • Reflection",
    image: margaretImage,
},
{
    name: "Laiba Tariq",
    role: "Psychotherapy Specialist",
    country: "Pakistan",
    specialization: "CBT • DBT",
    image: laibaImage,
},
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
              <CardContent className="p-10 text-center">
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
            Meet the Minds Behind {" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Almavue
            </span>
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            A diverse group of innovators, engineers, and visionaries working together 
            to build the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="min-h-[350px] bg-gradient-card border-border/50 shadow-card hover:shadow-electric/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                {member.image ? (
                  <div className="w-40 h-40 rounded-2xl mx-auto mb-4 overflow-hidden">
    <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
    />
</div>
                ) : (
                  <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-background">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
<h4 className="text-base font-semibold text-foreground mb-1">
    {member.name}
</h4>

<p className="text-sm text-accent font-medium mb-1">
    {member.role}
</p>

<p className="text-xs text-foreground/70 mb-1">
    {member.country}
</p>

<p className="text-[10px] text-foreground/60 leading-relaxed">
    {member.specialization}
</p>              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;