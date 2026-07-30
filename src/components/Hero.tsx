import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-space.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic space technology"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-electric rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Innovation Beyond Earth</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Building the{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Future
            </span>
            {" "}of Technology
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Almavue develops cutting-edge applications, space-related solutions, and immersive games 
            that solve real-world challenges and push the boundaries of what's possible.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-silver">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">10+</div>
              <div className="text-silver">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-silver">Innovation Focused</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
