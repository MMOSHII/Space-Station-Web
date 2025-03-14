"use client";
import Image from "next/image";
import Background from "@/app/components/Background";
import MotionDiv from "@/app/components/MotionDiv";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrevious } from "@mantine/hooks";
import mobile from "@/app/assets/mission/background-mission-mobile.jpg";
import tablet from "@/app/assets/mission/background-mission-tablet.jpg";
import desktop from "@/app/assets/mission/background-mission-desktop.jpg";
import PageTitle from "@/app/components/PageTitle";
import { SLIDE_LEFT, SLIDE_RIGHT } from "@/app/lib/data";

import explorationImg from "@/app/assets/mission/image-exploration.jpg";
import travelImg from "@/app/assets/mission/image-travel.jpg";
import miningImg from "@/app/assets/mission/image-mining.jpg";
import colonyImg from "@/app/assets/mission/image-colony.jpg";

const missions = [
  {
    name: "Exploration",
    image: explorationImg,
    duration: "Varies",
    equipment: "Space Shuttle, Rovers, Satellites, Space Probes",
    description: `Embark on a journey into the unknown. Exploration missions focus on understanding new celestial bodies, mapping terrain, and gathering data to fuel future missions.`,
  },
  {
    name: "Travel",
    image: travelImg,
    duration: "Varies",
    equipment: "Spacecraft, Habitats",
    description: `Travel missions are geared toward human and robotic transport to new destinations. These missions emphasize safety, efficiency, and sustainability in space travel.`,
  },
  {
    name: "Mining",
    image: miningImg,
    duration: "5-10 years",
    equipment: "Planet Crackers, Excavation Tools",
    description: `Mining missions seek to harvest valuable resources like water ice, metals, and other minerals from asteroids, moons, or planets to support deep space exploration and provide raw materials for building and energy.`,
  },
  {
    name: "Colonization",
    image: colonyImg,
    duration: "Indefinite",
    equipment: "Habitats, Life Support Systems, Cryogenic Pods, Energy Generators, Agricultural Units",
    description: `Colonization missions aim to establish long-term human presence on other celestial bodies, such as the Moon or Mars. These missions focus on building sustainable habitats, developing self-sufficient ecosystems, and creating infrastructure for long-term survival and growth. The goal is to create a foothold for humanity beyond Earth, ensuring adaptability and expansion into the cosmos.`,
  },
];

function MissionPage() {
  const [currentMission, setCurrentMission] = useState(0);

  const previousMission = usePrevious(currentMission);

  const mission = useMemo(() => missions[currentMission], [currentMission]);

  const variant = useMemo(() => {
    if (previousMission === undefined) return SLIDE_RIGHT;
    if (currentMission > previousMission) return SLIDE_LEFT;
    return SLIDE_RIGHT;
  }, [currentMission, previousMission]);

  return (
    <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />

      <main className="relative z-10 p-6 md:px-24 md:pb-0">
        <PageTitle number={5} title="Mission Overview" />

        <motion.div variants={SLIDE_LEFT} className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10"></motion.div>

        <div className="grid gap-40 lg:grid-cols-2 lg:pt-12">
          <AnimatePresence>
            <motion.div key={mission.name} variants={variant} className="flex justify-center my-6">
              <Image className="w-60 h-60 md:w-80 md:h-80 lg:w-[440px] lg:h-[440px] rounded-full object-cover" src={mission.image} alt={`mission ${mission.name}`} />
            </motion.div>
          </AnimatePresence>

          <div>
            <div className="flex items-center justify-center text-secondary space-x-6 nav-text md:text-[16x] lg:justify-start">
              {missions.map(({ name }, index) => {
                return (
                  <div
                    key={name}
                    onClick={() => setCurrentMission(index)}
                    className={`relative py-2 border-b-2 border-transparent cursor-pointer transition [&:not(.active)]:hover:border-current
                      [&.active]:text-white ${index && "active"}`}
                  >
                    {name}
                    {mission.name === name && <motion.span layoutId="missionUnderline" className="absolute bottom-0 left-0 w-full h-1 bg-white" />}
                  </div>
                );
              })}
            </div>

            <div className="text-secondary text-center lg:text-left">
              <h3 className="mt-5 uppercase text-white lg:text-[75px]">{missions[currentMission].name}</h3>
              <p className="leading-relaxed lg:text-[18px]"> {missions[currentMission].description} </p>

              <hr className="my-8 border-secondary/25" />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block sub-2">duration</span>
                  <span className="block sub-1 text-white"> {missions[currentMission].duration} </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block sub-2">equipment</span>
                  <span className="block sub-4 text-white whitespace-normal text-center lg:text-left">{missions[currentMission].equipment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MotionDiv>
  );
}

export default MissionPage;
