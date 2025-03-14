"use client";
import Image from "next/image";
import Background from "../components/Background";
import MotionDiv from "../components/MotionDiv";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrevious } from "@mantine/hooks";
import mobile from "@/app/assets/destination/background-destination-mobile.jpg";
import tablet from "@/app/assets/destination/background-destination-tablet.jpg";
import desktop from "@/app/assets/destination/background-destination-desktop.jpg";
import PageTitle from "../components/PageTitle";
import { SLIDE_LEFT, SLIDE_RIGHT } from "../lib/data";

import moon from "@/app/assets/destination/image-moon.png";
import mars from "@/app/assets/destination/image-mars.png";
import europa from "@/app/assets/destination/image-europa.png";
import titan from "@/app/assets/destination/image-titan.png";
import venus from "@/app/assets/destination/image-venus.png";
import brethren_moon from "@/app/assets/destination/image-brethren-moon.png";

const planets = [
  {
    name: "Moon",
    image: moon,
    distance: "384,400 km",
    time: "3 days",
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
  },
  {
    name: "Venus",
    image: venus,
    distance: "38,000,000 km",
    time: "4 months",
    description: `Looks and temperature can be deceiving. Though Venus’ surface is extremely hot, the upper atmosphere, around 30 miles up, is much cooler and has pressures similar to Earth’s. This layer has intrigued scientists, as it could potentially support microbial life despite the presence of acidic clouds.`,
  },
  {
    name: "Mars",
    image: mars,
    distance: "401,000,000 km",
    time: "9 months",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
  },
  {
    name: "Europa",
    image: europa,
    distance: "628,300,000 km",
    time: "3 years",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
  },
  {
    name: "Titan",
    image: titan,
    distance: "746,000,000 km",
    time: "7 years",
    description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
  },
  {
    name: "B̴̹͓̊r̵͈͈̀e̷̻̋̈ẗ̴̲́͘ȟ̵̤̓r̶̤̚͠e̴̲̒n̷̳̊ ̷̖̫͛M̴̻͐ô̷͉̬̚o̷̜̩̓̏n̷̛̼",
    image: brethren_moon,
    distance: "???",
    time: "???",
    description: `W̷e̷ ̷a̶r̸e̴ ̴c̶o̷m̸i̴n̸g̷.̸ ̴W̸e̷ ̸a̸r̵e̷ ̷h̴u̵n̴g̷r̷y̵.̵ ̴W̷e̷ ̴a̵r̷e̵ ̸h̴e̸r̶e̵.̵ ̸T̶h̵e̸ ̴t̷i̸m̵e̸ ̶o̴f̵ ̴a̷s̵c̸e̴n̵s̷i̴o̵n̸ ̸i̷s̸ ̷a̷t̸ ̷h̶a̴n̶d̷.̸ ̶P̶r̸e̶p̴a̵r̷e̶ ̶y̷o̸u̷r̷s̷e̴l̷v̴e̶s̵ ̵t̶h̸e̷ ̷w̸a̷y̷ ̶t̴h̶a̶t̴ ̵y̵o̴u̸ ̶m̵a̷y̸ ̷b̶e̷ ̶f̸o̸u̵n̶d̶.̷ ̵M̸a̷k̵e̸ ̴u̸s̷ ̵w̸h̴o̶l̶e̵`,
  },
];

function DestinationPage() {
  const [actual, setActual] = useState(0);

  const previous = usePrevious(actual);

  const planet = useMemo(() => planets[actual], [actual]);

  const variant = useMemo(() => {
    if (previous === undefined) return SLIDE_RIGHT;
    if (actual > previous) return SLIDE_LEFT;
    return SLIDE_RIGHT;
  }, [actual, previous]);

  return (
    <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />

      <main className=" relative z-10 p-6 md:px-24 md:pb-0">
        <PageTitle number={2} title="Choose Your Destination" />

        <motion.div variants={SLIDE_LEFT} className=" w-fit mx-auto mb-8 md:mx-0 md:-ml-10 "></motion.div>

        <div className=" grid gap-40 lg:grid-cols-2 lg:pt-12">
          <AnimatePresence>
            <motion.div key={planet.name} variants={variant} className=" flex justify-center my-6">
              <Image className=" w-60 md:w-80 lg:w-[440px] aspect-square" src={planet.image} alt={`planet ${planet.name}`} />
            </motion.div>
          </AnimatePresence>

          <div>
            <div className="flex items-center justify-center text-secondary space-x-6 nav-text md:text-[16px] lg:justify-start">
              {planets.map(({ name }, index) => {
                return (
                  <div
                    key={name}
                    onClick={() => setActual(index)}
                    className={` relative py-2 border-b-2 border-transparent cursor-pointer transition [&:not(.active)]:hover:border-current
      text-white ${actual === index ? "active" : "text-secondary"}
    `}
                  >
                    {name}
                    {planet.name === name && <motion.span layoutId="planetUnderLine" className=" absolute bottom-0 left-0 w-full h-1 bg-white" />}
                  </div>
                );
              })}
            </div>

            <div className=" text-secondary text-center lg:text-left">
              <h3 className=" mt-5 uppercase text-white lg:text-[100px]">{planets[actual].name}</h3>
              <p className="leading-relaxed lg:text-[18px]"> {planets[actual].description} </p>

              <hr className=" my-8 border-secondary/25" />

              <div className=" grid md:grid-cols-2 gap-8">
                <div className=" w-fit mx-auto uppercase lg:mx-0">
                  <span className=" block sub-2 text-white">avg distance</span>
                  <span className=" block sub-1 text-white"> {planets[actual].distance} </span>
                </div>
              </div>
              <div className=" grid md:grid-cols-2 gap-8">
                <div className=" w-fit mx-auto uppercase lg:mx-0">
                  <span className=" block sub-2 text-white">est. travel time</span>
                  <span className=" block sub-1 text-white"> {planets[actual].time} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MotionDiv>
  );
}

export default DestinationPage;
