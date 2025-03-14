"use client";
import MotionDiv from "../components/MotionDiv";
import Background from "../components/Background";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import mobile from "@/app/assets/crew/background-crew-mobile.jpg";
import tablet from "@/app/assets/crew/background-crew-tablet.jpg";
import desktop from "@/app/assets/crew/background-crew-desktop.jpg";
import PageTitle from "../components/PageTitle";

import { members } from "@/app/crew/utils/utils";
import { usePrevious } from "@mantine/hooks";
import { SLIDE_LEFT, SLIDE_RIGHT } from "../lib/data";

function CrewPage() {
  const [actual, setActual] = useState(0);
  const previous = usePrevious(actual);

  const member = useMemo(() => members[actual], [actual]);

  const variant = useMemo(() => {
    if (previous === undefined) return SLIDE_RIGHT;
    if (actual > previous) return SLIDE_LEFT;
    return SLIDE_RIGHT;
  }, [actual, previous]);

  const handlePrevious = () => {
    setActual((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActual((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  return (
    <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />
      <main className="relative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 lg:min-h-[80vh] lg:grid lg:grid-cols-2">
        <div className="flex flex-col-reverse relative z-10 lg:flex-col lg:justify-between">
          <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 hidden lg:block">
            <PageTitle number={3} title="Meet the Crews" />
          </div>
          <div className="text-secondary text-center lg:text-left">
            <h4 className="uppercase text-white mb-4 text-[16px] lg:text-[32px]">{member.role}</h4>
            <h3 className="uppercase text-white mb-7 text-[24px] lg:text-[56px]">{member.name}</h3>
            <p className="leading-relaxed lg:text-[18px]">{member.description}</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-6 my-8">
            {/* Desktop Left Arrow */}
            <button onClick={handlePrevious} className="hidden lg:flex items-center justify-center text-white hover:text-secondary transition">
              <ArrowLeft size={24} />
            </button>

            {/* Dot Navigation */}
            {members.map(({ name }, index) => (
              <div
                key={index}
                className={`w-3 aspect-square rounded-full transition cursor-pointer opacity-40 bg-white ${member.name === name && "active"} [&.active]:opacity-100 [&:not(.active)]:hover:opacity-75`}
                onClick={() => setActual(index)}
              />
            ))}

            {/* Desktop Right Arrow */}
            <button onClick={handleNext} className="hidden lg:flex items-center justify-center text-white hover:text-secondary transition">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <motion.div className="border-b border-white/50 w-full md:fixed md:bottom-0 md:right-0 md:w-screen md:h-[532px] lg:h-[712px] relative">
          {/* Mobile Left Arrow */}
          <button onClick={handlePrevious} className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 text-white hover:text-secondary transition">
            <ArrowLeft size={24} />
          </button>

          {/* Mobile Right Arrow */}
          <button onClick={handleNext} className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 text-white hover:text-secondary transition">
            <ArrowRight size={24} />
          </button>

          <AnimatePresence>
            <motion.div className="block mx-auto w-auto h-[222px] md:h-full lg:mx-0 lg:ml-auto lg:mr-4" key={member.name} variants={variant}>
              <Image src={member.image} alt={member.name} className="block mx-auto w-auto h-[222px] md:h-full lg:mx-0 lg:ml-auto lg:mr-4" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 lg:hidden">
          <PageTitle number={3} title="Meet The Crews" />
        </div>
      </main>
    </MotionDiv>
  );
}

export default CrewPage;
