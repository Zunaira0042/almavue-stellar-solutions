import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Globe,
  Quote,
} from "lucide-react";

import kenya1 from "@/assets/impact/kenya1.png";
import kenya2 from "@/assets/impact/kenya2.png";
import kenya3 from "@/assets/impact/kenya3.png";

import purpose1 from "@/assets/impact/purpose1.png";
import purpose2 from "@/assets/impact/purpose2.png";
const Impact = () => {
  const events = [
    {
      title: "Addressing Youth Mental Health Challenges",

      country: "Kenya",

      location: "Virtual Event",

      date: "June 2026",

      organization: "Kabila La Vijana",

      participants: "50+",

      countries: "6 Countries",

      speakers: [
        "Amanda Almeida",
        "Success Smith",
      ],

      images: [kenya1, kenya2, kenya3],

      review:
        "The session created an engaging and meaningful discussion on youth mental wellbeing while bringing together participants from different countries.",
    },

    {
      title: "Purpose Driven Life",

      country: "International",

      location: "Virtual Webinar",

      date: "January 2026",

      organization: "International Community",

      participants: "International Audience",

      countries: "Multiple Countries",

      speakers: ["Shellie R. Warren"],

      images: [purpose1, purpose2],

      review:
        "An inspiring discussion focused on purpose, wellbeing, and personal growth with professionals from around the world.",
    },
  ];

  const [eventIndex, setEventIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const current = events[eventIndex];

  useEffect(() => {
    setImageIndex(0);
  }, [eventIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % current.images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Every collaboration, workshop, and community initiative represents
            our commitment to creating meaningful global impact.
          </p>

        </div>

        <div className="flex justify-between items-center mb-8">

          <Button
            variant="outline"
            onClick={() =>
              setEventIndex(
                (eventIndex - 1 + events.length) % events.length
              )
            }
          >
            <ChevronLeft />
          </Button>

          <h3 className="text-2xl font-bold">
            {current.title}
          </h3>

          <Button
            variant="outline"
            onClick={() =>
              setEventIndex(
                (eventIndex + 1) % events.length
              )
            }
          >
            <ChevronRight />
          </Button>

        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card">

          <img
            src={current.images[imageIndex]}
            className="w-full h-[420px] object-cover"
          />

          <div className="flex justify-center gap-2 py-4">

            {current.images.map((_, i) => (

              <button
                key={i}
                onClick={() => setImageIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === imageIndex
                    ? "bg-accent"
                    : "bg-white/30"
                }`}
              />

            ))}

          </div>

          <CardContent className="p-8">

            <div className="flex flex-wrap gap-3 mb-6">

              <Badge>{current.country}</Badge>

              <Badge variant="secondary">
                {current.organization}
              </Badge>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div>

                <div className="flex items-center mb-3">

                  <Calendar className="w-5 h-5 mr-3 text-accent"/>

                  {current.date}

                </div>

                <div className="flex items-center mb-3">

                  <MapPin className="w-5 h-5 mr-3 text-accent"/>

                  {current.location}

                </div>

                <div className="flex items-center mb-3">

                  <Users className="w-5 h-5 mr-3 text-accent"/>

                  {current.participants}

                </div>

                <div className="flex items-center mb-6">

                  <Globe className="w-5 h-5 mr-3 text-accent"/>

                  {current.countries}

                </div>

                <h4 className="font-semibold mb-3">
                  Speakers
                </h4>

                <ul className="space-y-2">

                  {current.speakers.map((speaker) => (

                    <li key={speaker}>
                      • {speaker}
                    </li>

                  ))}

                </ul>

              </div>

              <div>

                <Quote className="w-8 h-8 text-accent mb-4"/>

                <h4 className="text-xl font-semibold mb-3">
                  Partner Testimonial
                </h4>

                <p className="text-foreground/80 leading-relaxed italic">
                  "{current.review}"
                </p>

              </div>

            </div>

          </CardContent>

        </Card>

      </div>
    </section>
  );
};

export default Impact;