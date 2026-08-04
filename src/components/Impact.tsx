import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Globe, Quote, Star } from "lucide-react";

import kenya1 from "@/assets/impact/kenya1.png";
import kenya2 from "@/assets/impact/kenya2.png";
import kenya3 from "@/assets/impact/kenya3.png";

import purpose1 from "@/assets/impact/purpose1.png";
import purpose2 from "@/assets/impact/purpose2.png";

const IMAGE_INTERVAL = 4500;
const REVIEW_INTERVAL = 7000;
const FADE_DURATION = 700;

const Impact = () => {
  const events = [
    {
      title: "Addressing Youth Mental Health Challenges",

      country: "KENYA",

      location: "Kakamega (Virtual Event)",

      organization: "Kabila La Vijana",

      date: "June 2026",

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
          rating: 5,
          text:
            "Almavue created a meaningful space where young people felt heard, supported, and inspired. The conversations brought hope, strengthened resilience, and encouraged us to continue building safe spaces where youth can openly discuss mental health.",
        },

        {
          name: "Japheth Ambui",
          role: "Youth Leader",
          company: "Kabila La Vijana",
          rating: 5,
          text:
            "This discussion encouraged honest conversations around mental health while empowering young people with confidence, resilience, and the courage to seek support whenever they need it.",
        },
      ],
    },

    {
      title: "Purpose Driven Life",

      country: "INTERNATIONAL",

      location: "Nashville, USA (Virtual Event)",

      organization: "International Community",

      date: "January 2026",

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
          name: "Oluwabukola",
          role: "Participant",
          company: "Purpose Driven Life",
          rating: 5,
          text:
            "This session helped me reflect deeply and untangle the way I approach challenges. It gave me a new perspective for understanding my life and responding to problems with greater purpose, confidence, and clarity.",
        },

        {
          name: "Sharoon Rayes",
          role: "Participant",
          company: "Purpose Driven Life",
          rating: 5,
          text:
            "I loved the open discussion about living a purposeful life. Whether in marriage, parenthood, education, career, or any other path, the greatest lesson was that true purpose begins with knowing yourself first.",
        },
      ],
    },
  ];

  const [eventIndex, setEventIndex] = useState(0);

  const current = events[eventIndex];

  const [imageIndex, setImageIndex] = useState(0);

  const [displayImage, setDisplayImage] = useState(current.images[0]);

  const [imageVisible, setImageVisible] = useState(true);

  const [reviewIndex, setReviewIndex] = useState(0);

  const [reviewVisible, setReviewVisible] = useState(true);

  const [imagePaused, setImagePaused] = useState(false);

  const [reviewPaused, setReviewPaused] = useState(false);

  useEffect(() => {
    current.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [current]);

  useEffect(() => {
    setImageIndex(0);
    setReviewIndex(0);
    setDisplayImage(current.images[0]);
    setImageVisible(true);
    setReviewVisible(true);
  }, [eventIndex]);

  useEffect(() => {
    if (imagePaused) return;

    const timer = setInterval(() => {

      setImageVisible(false);

      setTimeout(() => {

        const next =
          (imageIndex + 1) % current.images.length;

        setDisplayImage(current.images[next]);

        setImageIndex(next);

        requestAnimationFrame(() => {
          setImageVisible(true);
        });

      }, FADE_DURATION);

    }, IMAGE_INTERVAL);

    return () => clearInterval(timer);

  }, [imageIndex, current, imagePaused]);

  useEffect(() => {
    if (reviewPaused) return;

    const timer = setInterval(() => {

      setReviewVisible(false);

      setTimeout(() => {

        setReviewIndex((prev) =>
          (prev + 1) % current.reviews.length
        );

        requestAnimationFrame(() => {
          setReviewVisible(true);
        });

      }, 350);

    }, REVIEW_INTERVAL);

    return () => clearInterval(timer);

  }, [current, reviewPaused]);

  const review = useMemo(
    () => current.reviews[reviewIndex],
    [current, reviewIndex]
  );

  const nextEvent = () => {
    setEventIndex(
      (prev) => (prev + 1) % events.length
    );
  };

  const previousEvent = () => {
    setEventIndex(
      (prev) =>
        (prev - 1 + events.length) %
        events.length
    );
  };

  const nextReview = () => {
    setReviewPaused(true);

    setReviewVisible(false);

    setTimeout(() => {

      setReviewIndex(
        (prev) =>
          (prev + 1) %
          current.reviews.length
      );

      setReviewVisible(true);

    }, 300);
  };

  const previousReview = () => {
    setReviewPaused(true);

    setReviewVisible(false);

    setTimeout(() => {

      setReviewIndex(
        (prev) =>
          (prev - 1 + current.reviews.length) %
          current.reviews.length
      );

      setReviewVisible(true);

    }, 300);
  };return (
<section id="impact" className="py-24 bg-muted/30 overflow-hidden">
  <div className="container mx-auto px-4">

    {/* ================= HEADER ================= */}

    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold mb-6">

        Our{" "}

        <span className="bg-gradient-accent bg-clip-text text-transparent">

          Impact

        </span>

      </h2>

      <p className="text-xl text-foreground/80 max-w-3xl mx-auto">

        Every collaboration, workshop, and initiative reflects our commitment
        to creating meaningful impact across communities worldwide.

      </p>

    </div>

    {/* ================= EVENT NAVIGATION ================= */}

    <div className="max-w-6xl mx-auto flex items-center justify-between mb-10">

      <Button
        variant="outline"
        onClick={previousEvent}
        className="rounded-full h-12 w-12 hover:scale-110 transition-all duration-500"
      >
        <ChevronLeft />
      </Button>

      <div className="text-center">

        <h3 className="text-3xl md:text-4xl font-bold">

          {current.title}

        </h3>

      </div>

      <Button
        variant="outline"
        onClick={nextEvent}
        className="rounded-full h-12 w-12 hover:scale-110 transition-all duration-500"
      >
        <ChevronRight />
      </Button>

    </div>

    {/* ================= MAIN CARD ================= */}

    <Card className="overflow-hidden max-w-6xl mx-auto border-border/50 bg-gradient-card shadow-2xl">

      {/* ================= IMAGE ================= */}

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setImagePaused(true)}
        onMouseLeave={() => setImagePaused(false)}
      >

        <img
          src={displayImage}
          alt=""
          className={`w-full aspect-[1590/1000] object-cover transition-all ease-[cubic-bezier(.22,1,.36,1)]
          ${
            imageVisible
              ? "opacity-100 scale-100 duration-[900ms]"
              : "opacity-0 scale-110 duration-[700ms]"
          }`}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Event Info */}

        <div className="absolute left-8 bottom-8">

          <h3 className="text-cyan-300 text-3xl md:text-4xl font-bold tracking-wide">

            {current.country}

          </h3>

          <p className="text-sky-200 text-lg mt-1">

            {current.location}

          </p>

          <p className="text-white/75 mt-2 text-base">

            {current.organization}

          </p>

        </div>

      </div>

      {/* ================= IMAGE DOTS ================= */}

      <div className="flex justify-center gap-3 py-6">

        {current.images.map((_, index) => (

          <button
            key={index}
            onClick={() => {

              setImagePaused(true);

              setImageVisible(false);

              setTimeout(() => {

                setImageIndex(index);

                setDisplayImage(current.images[index]);

                setImageVisible(true);

              }, 350);

            }}
            className={`rounded-full transition-all duration-700
            ${
              imageIndex === index
                ? "w-12 h-2 bg-cyan-400"
                : "w-2 h-2 bg-white/30 hover:bg-white/70"
            }`}
          />

        ))}

      </div>

      <CardContent className="p-8 lg:p-10">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ================= LEFT ================= */}

          <div>

            <div className="grid grid-cols-2 gap-5 mb-8">

              <Card className="p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                <Calendar className="text-cyan-400 mb-3" />

                <p className="text-sm text-muted-foreground">

                  Date

                </p>

                <h4 className="font-semibold text-lg">

                  {current.date}

                </h4>

              </Card>

              <Card className="p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                <MapPin className="text-cyan-400 mb-3" />

                <p className="text-sm text-muted-foreground">

                  Location

                </p>

                <h4 className="font-semibold text-lg">

                  {current.location}

                </h4>

              </Card>

              <Card className="p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                <Users className="text-cyan-400 mb-3" />

                <p className="text-sm text-muted-foreground">

                  Participants

                </p>

                <h4 className="font-semibold text-lg">

                  {current.participants}

                </h4>

              </Card>

              <Card className="p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                <Globe className="text-cyan-400 mb-3" />

                <p className="text-sm text-muted-foreground">

                  Countries

                </p>

                <h4 className="font-semibold text-lg">

                  {current.countries}

                </h4>

              </Card>

            </div>

            <h3 className="text-2xl font-bold mb-5">

              Featured Speakers

            </h3>

            <div className="space-y-4">

              {current.speakers.map((speaker, index) => (

                <div
                  key={speaker}
                  className="flex items-center gap-4 transition-all duration-700"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >

                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />

                  <span className="text-lg">

                    {speaker}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* ================= RIGHT REVIEW CARD STARTS HERE ================= */}          <Card
            className="relative overflow-hidden border-border bg-background/60 backdrop-blur-sm p-8"
            onMouseEnter={() => setReviewPaused(true)}
            onMouseLeave={() => setReviewPaused(false)}
          >
            {/* Decorative Glow */}

            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10">

              {/* Header */}

              <div className="flex items-center justify-between mb-6">

                <Quote className="text-cyan-400 w-10 h-10" />

                <div className="flex items-center gap-1">

                  {Array.from({ length: review.rating }).map((_, i) => (

                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

              </div>

              {/* Review */}

              <div
                className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                ${
                  reviewVisible
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-5 blur-sm"
                }`}
              >

                <p className="italic text-lg leading-9 text-foreground/85 mb-8">

                  "{review.text}"

                </p>

                <div className="border-t border-border pt-5">

                  <h3 className="text-2xl font-bold">

                    {review.name}

                  </h3>

                  <p className="text-cyan-400 font-semibold mt-1">

                    {review.role}

                  </p>

                  <p className="text-muted-foreground mt-1">

                    {review.company}

                  </p>

                </div>

              </div>

              {/* Controls */}

              <div className="flex items-center justify-between mt-10">

                <Button
                  size="icon"
                  variant="outline"
                  onClick={previousReview}
                  className="rounded-full hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-3">

                  {current.reviews.map((_, index) => (

                    <button
                      key={index}
                      onClick={() => {

                        setReviewPaused(true);

                        setReviewVisible(false);

                        setTimeout(() => {

                          setReviewIndex(index);

                          setReviewVisible(true);

                        }, 250);

                      }}
                      className={`transition-all duration-500 rounded-full
                      ${
                        reviewIndex === index
                          ? "bg-cyan-400 w-10 h-2"
                          : "bg-white/20 hover:bg-white/40 w-2 h-2"
                      }`}
                    />

                  ))}

                </div>

                <Button
                  size="icon"
                  variant="outline"
                  onClick={nextReview}
                  className="rounded-full hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

              </div>

              {/* Progress Bar */}

              <div className="mt-8 h-1 w-full rounded-full bg-white/10 overflow-hidden">

                <div
                  key={reviewIndex}
                  className="h-full bg-cyan-400 animate-[reviewProgress_7s_linear]"
                />

              </div>

            </div>

          </Card>        </div>
      </CardContent>
    </Card>
  </div>
</section>
);

};

export default Impact;