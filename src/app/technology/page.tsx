"use client";

import Image from "next/image";

import mobile from "@/app/assets/technology/background-technology-mobile.jpg";
import tablet from "@/app/assets/technology/background-technology-tablet.jpg";
import desktop from "@/app/assets/technology/background-technology-desktop.jpg";

import vehicleLandscape from "@/app/assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "@/app/assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "@/app/assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "@/app/assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "@/app/assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "@/app/assets/technology/image-spaceport-portrait.jpg";
import planetCrackerLandscape from "@/app/assets/technology/image-planet-cracker-landscape.jpg";
import planetCrackerPortrait from "@/app/assets/technology/image-planet-cracker-portrait.jpg";
import spacecraftLandscape from "@/app/assets/technology/image-spacecraft-landscape.jpg";
import spacecraftPortrait from "@/app/assets/technology/image-spacecraft-portrait.jpg";

import Background from "@/app/components/Background";
import PageTitle from "@/app/components/PageTitle";
import { useMemo, useState } from "react";
import MotionDiv from "@/app/components/MotionDiv";
import { FADE } from "@/app/lib/data";
import { motion } from "framer-motion";

// Data
const technologies = [
  {
    name: "Launch vehicle",
    landscape: vehicleLandscape,
    portrait: vehiclePortrait,
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
  },
  {
    name: "Space capsule",
    landscape: capsuleLandscape,
    portrait: capsulePortrait,
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
  },
  {
    name: "Spaceport",
    landscape: spaceportLandscape,
    portrait: spaceportPortrait,
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
  },
  {
    name: "Planet cracker",
    landscape: planetCrackerLandscape,
    portrait: planetCrackerPortrait,
    description: `A Planet Cracker is a massive class of spaceship designed specifically for large-scale resource extraction, and it’s the backbone of interstellar mining operations.`,
  },
  {
    name: "Spacecraft",
    landscape: spacecraftLandscape,
    portrait: spacecraftPortrait,
    description: `Spacecraft are vehicles designed for travel or operation in outer space, ranging from simple, unmanned probes to advanced, crewed vessels for deep space exploration.`,
  },
];

export default function TechnologyPage() {
  const [actual, setActual] = useState(0);
  const technology = useMemo(() => technologies[actual], [actual]);
  return (
    <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />
      <main className="relative z-10 w-full mt-10 lg:pl-44">
        <div className="w-fit mx-auto mb-8 md:mx-2">
          <PageTitle number={4} title="Space Launch 101" />
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:pr-10">
          {" "}
          {/* Add lg:pr-10 or adjust value as needed */}
          <div className="w-full lg:w-[35%] lg:min-h-[35vh] lg:-ml-10">
            {" "}
            {/* Add lg:-ml-10 to shift left */}
            <motion.picture key={technology.name} variants={FADE} className="block">
              <source media="(min-width:1024px)" srcSet={technology.portrait.src} />
              <Image src={technology.landscape} className="object-cover w-full h-auto rounded-full" alt="Background Image" />
            </motion.picture>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-14 lg:flex-row lg:grow lg:mt-0">
            <div className="w-fit flex gap-4 mb-6 md:mb-11 lg:flex-col lg:mb-0 lg:gap-8">
              {technologies.map(({ name }, index) => (
                <div
                  onClick={() => setActual(index)}
                  key={name}
                  className={`w-10 md:w-14 aspect-square flex items-center justify-center text-white border rounded-full border-white/20 transition cursor-pointer
                                    [&.active]:border-transparent [&.active]:bg-white [&.active]:text-primary [&:not(.active)]:hover:border-white ${technology.name === name && "active"}`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="text-secondary text-center px-6 md:max-w-lg md:mx-auto lg:text-left lg:max-w-xl">
              <span className="block nav-text uppercase mb-2 text-[14px] md:text-[16px] ">The Terminology ...</span>
              <h3 className="uppercase mb-4 text-white text-[24px] md:text-[40px] lg:text-[56px] "> {technology.name} </h3>
              <p className="leading-relaxed lg:leading-loose lg:text-[18px]"> {technology.description} </p>
            </div>
          </div>
        </div>
      </main>
    </MotionDiv>
  );
}
