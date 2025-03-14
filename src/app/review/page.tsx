"use client";
import MotionDiv from "../components/MotionDiv";
import Background from "../components/Background";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import mobile from "@/app/assets/review/Background-review-mobile.jpg";
import tablet from "@/app/assets/review/Background-review-tablet.jpg";
import desktop from "@/app/assets/review/Background-review-desktop.jpg";

import profile from "@/app/assets/review/Profile.jpg";

import PageTitle from "../components/PageTitle";
// Replace with your reviews data import
import { usePrevious } from "@mantine/hooks";
import { SLIDE_LEFT, SLIDE_RIGHT } from "../lib/data";

const reviews = [
  {
    name: "Andre",
    image: profile, // Replace with actual path
    rating: "1/5",
    text: "Pilotnya kek orang paok.",
  },
  {
    name: "Ipan",
    image: profile, // Replace with actual path
    rating: "2/5",
    text: "Pilotnya jomok.",
  },
  {
    name: "Aqil",
    image: profile,
    rating: "3/5",
    text: "I gave it 3 because it's a high class travel, I gave it 3 because that fatass pilot is a douchebag, and he keeps putting people in airlock just for fun",
  },
  {
    name: "Rio",
    image: profile,
    rating: "1/5",
    text: "Bintang satu, Pilot tidak ramah",
  },
  {
    name: "Zekan",
    image: profile,
    rating: "1/5",
    text: "Pilotnya rasis sama orang Gayo",
  },
];

function ReviewPage() {
  const [currentReview, setCurrentReview] = useState(0);
  const previousReview = usePrevious(currentReview);

  const review = useMemo(() => reviews[currentReview], [currentReview]);

  const variant = useMemo(() => {
    if (previousReview === undefined) return SLIDE_RIGHT;
    if (currentReview === previousReview) return SLIDE_LEFT;
    return SLIDE_RIGHT;
  }, [currentReview, previousReview]);

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />
      <main className="relative z-10 p-6 md:px-24 lg:pt-12 lg:min-h-[80vh]">
        {/* Page Title - Desktop and Mobile */}
        <div className="mb-12">
          <div className="hidden lg:block">
            <PageTitle number={6} title="Hear what they say" />
          </div>
          <div className="lg:hidden">
            <PageTitle number={6} title="Hear what they say" />
          </div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-8">
            {/* Centered Image & Navigation Section */}
            <div className="w-full max-w-[280px] md:max-w-[320px] flex flex-col items-center mb-8 lg:mb-0">
              <AnimatePresence>
                <motion.div key={review.name} variants={variant} initial="initial" animate="animate" exit="exit" className="w-full aspect-square overflow-hidden rounded-full">
                  <Image src={review.image} alt={review.name} className="w-full h-full object-cover object-center" />
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-6 my-4">
                <button onClick={handlePrevious} className="text-white hover:text-secondary transition">
                  <ArrowLeft size={24} />
                </button>

                {reviews.map(({ name }, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer bg-white transition-opacity
                      ${review.name === name ? "opacity-100" : "opacity-40 hover:opacity-75"}`}
                  />
                ))}

                <button onClick={handleNext} className="text-white hover:text-secondary transition">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            {/* Review Content */}
            <div className="text-secondary text-center lg:text-left lg:max-w-xl">
              <h4 className="uppercase mb-4 text-[26px] lg:text-[32px]">Rating: {review.rating}</h4>
              <h3 className="uppercase text-white mb-7 text-[24px] lg:text-[56px]">{review.name}</h3>
              <div className="max-h-[300px] overflow-y-auto">
                <p className="leading-relaxed lg:text-[26px] lg:w-[500px]">{review.text}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MotionDiv>
  );
}

export default ReviewPage;
