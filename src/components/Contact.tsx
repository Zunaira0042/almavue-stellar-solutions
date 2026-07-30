import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're looking to collaborate,
            explore innovative ideas, or build transformative technologies,
            we're here to help.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">

          {/* Email */}
          <Card className="flex-1 bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 flex flex-col items-center text-center">

              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                Email Us
              </h3>

              <a
                href="mailto:contact@almavue.com"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                contact@almavue.com
              </a>

            </CardContent>
          </Card>


          {/* Social Media */}
          <Card className="flex-1 bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8 flex flex-col items-center text-center">

              <h3 className="text-xl font-semibold text-foreground mb-6">
                Connect With Us
              </h3>

              <div className="flex gap-6 flex-wrap justify-center">

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/company/almavue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={32} />
                </a>


                {/* Instagram */}
                <a
                  href="https://www.instagram.com/_almavue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram size={32} />
                </a>


                {/* Facebook */}
                <a
                  href="https://www.facebook.com/almavue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:scale-110 transition-all duration-300"
                >
                  <FaFacebook size={32} />
                </a>


                {/* Youtube */}
                <a
                  href="https://www.youtube.com/@Almavue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:scale-110 transition-all duration-300"
                >
                  <FaYoutube size={32} />
                </a>

              </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;