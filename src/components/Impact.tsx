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
  Star,
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
      participants: "50+ Youth",
      countries: "6 Countries",

      speakers: [
        "Amanda Almeida",
        "Success Smith",
      ],

      images: [
        kenya1,
        kenya2,
        kenya3,
      ],

      reviews: [
        {
          name: "Trecy Ingutia",
          role: "Project Manager",
          company: "Kabila La Vijana",
          text:
            "Almavue created a meaningful space where young people felt heard, supported, and inspired. The conversations brought hope and encouraged us to continue creating safe spaces for youth.",
        },

        {
          name: "Japheth Ambui",
          role: "Youth Leader",
          company: "Kabila La Vijana",
          text:
            "The discussion encouraged open conversations around mental health while empowering young people with confidence, resilience, and the importance of seeking support.",
        },
      ],
    },

    {
      title: "Purpose Driven Life",

      country: "International",

      location: "Virtual Webinar",

      date: "January 2026",

      organization: "International Community",

      participants: "Global Audience",

      countries: "Multiple Countries",

      speakers: [
        "Shellie R. Warren",
      ],

      images: [
        purpose1,
        purpose2,
      ],

      reviews: [
        {
          name: "International Participant",
          role: "Attendee",
          company: "Purpose Driven Life",
          text:
            "An inspiring session that encouraged personal growth, self-discovery, and living with purpose.",
        },

        {
          name: "Community Member",
          role: "Participant",
          company: "Purpose Driven Life",
          text:
            "A thoughtful discussion that connected people from different backgrounds through meaningful conversations.",
        },
      ],
    },
  ];

  const [eventIndex, setEventIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const current = events[eventIndex];

  useEffect(() => {
    setImageIndex(0);
    setReviewIndex(0);
  }, [eventIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) =>
        (prev + 1) % current.images.length
      );
    }, 3500);

    return () => clearInterval(timer);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) =>
        (prev + 1) % current.reviews.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const review = current.reviews[reviewIndex];

  const nextEvent = () => {
    setEventIndex((prev) => (prev + 1) % events.length);
  };

  const previousEvent = () => {
    setEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
<section id="impact" className="py-24 bg-muted/30">
  <div className="container mx-auto px-4">

    {/* Header */}

    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Our{" "}
        <span className="bg-gradient-accent bg-clip-text text-transparent">
          Impact
        </span>
      </h2>

      <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
        Every collaboration, workshop and initiative reflects our commitment
        to creating meaningful impact across communities worldwide.
      </p>

    </div>

    {/* Event Navigation */}

    <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">

      <Button
        variant="outline"
        onClick={previousEvent}
        className="rounded-full w-12 h-12 hover:bg-accent hover:text-background transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft />
      </Button>

      <h3 className="text-2xl md:text-3xl font-bold text-center">
        {current.title}
      </h3>

      <Button
        variant="outline"
        onClick={nextEvent}
        className="rounded-full w-12 h-12 hover:bg-accent hover:text-background transition-all duration-300 hover:scale-110"
      >
        <ChevronRight />
      </Button>

    </div>

    <Card className="max-w-6xl mx-auto overflow-hidden bg-gradient-card border-border/50 shadow-xl">

      {/* IMAGE */}

      <img
        src={current.images[imageIndex]}
        alt=""
        className="w-full aspect-[1590/1000] object-cover transition-all duration-700"
      />

      {/* IMAGE DOTS */}

      <div className="flex justify-center gap-3 py-5">

        {current.images.map((_, index) => (

          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              imageIndex === index
                ? "bg-accent w-10 h-2"
                : "bg-white/30 w-2 h-2"
            }`}
          />

        ))}

      </div>

      <CardContent className="p-8 lg:p-10">

        {/* TOP BADGES */}

        <div className="flex flex-wrap gap-3 mb-8">

          <Badge>{current.country}</Badge>

          <Badge variant="secondary">
            {current.organization}
          </Badge>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div>

            <div className="grid grid-cols-2 gap-4 mb-8">

              <Card className="p-4">
                <Calendar className="text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Date</p>
                <h4 className="font-semibold">{current.date}</h4>
              </Card>

              <Card className="p-4">
                <MapPin className="text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Location</p>
                <h4 className="font-semibold">{current.location}</h4>
              </Card>

              <Card className="p-4">
                <Users className="text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Participants</p>
                <h4 className="font-semibold">
                  {current.participants}
                </h4>
              </Card>

              <Card className="p-4">
                <Globe className="text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Countries</p>
                <h4 className="font-semibold">
                  {current.countries}
                </h4>
              </Card>

            </div>

            <h4 className="text-xl font-semibold mb-4">
              Featured Speakers
            </h4>

            <ul className="space-y-3">

              {current.speakers.map((speaker) => (

                <li
                  key={speaker}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent"></div>

                  {speaker}

                </li>

              ))}

            </ul>

          </div>

          {/* RIGHT */}

          <Card className="bg-background/40 border-border p-7">

            <div className="flex items-center justify-between mb-5">

              <Quote className="text-accent w-9 h-9" />

              <div className="flex gap-1">

                <Star className="fill-yellow-400 text-yellow-400 w-4 h-4"/>
                <Star className="fill-yellow-400 text-yellow-400 w-4 h-4"/>
                <Star className="fill-yellow-400 text-yellow-400 w-4 h-4"/>
                <Star className="fill-yellow-400 text-yellow-400 w-4 h-4"/>
                <Star className="fill-yellow-400 text-yellow-400 w-4 h-4"/>

              </div>

            </div>

            <h4 className="text-2xl font-bold mb-2">
              {review.name}
            </h4>

            <p className="text-accent font-medium">
              {review.role}
            </p>

            <p className="text-sm text-muted-foreground mb-6">
              {review.company}
            </p>

            <p className="italic leading-8 text-foreground/80 transition-all duration-700">
              "{review.text}"
            </p>

          </Card>

        </div>

      </CardContent>

    </Card>

  </div>
</section>
  );
};

export default Impact;