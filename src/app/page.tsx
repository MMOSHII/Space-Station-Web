"use client";
import Background from "./components/Background";
import MotionDiv from "./components/MotionDiv";
import { motion } from "framer-motion";
import mobile from "@/app/assets/home/background-home-mobile.jpg";
import tablet from "@/app/assets/home/background-home-tablet.jpg";
import desktop from "@/app/assets/home/background-home-desktop.jpg";
import { SCALE_UP, SLIDE_LEFT } from "@/app/lib/data";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />
      <main className="relative z-10 min-h-[80vh] flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between lg:p-32">
        <motion.div variants={SLIDE_LEFT} className="font-primary text-secondary text-center px-4 md:max-w-lg md:mx-auto lg:mx-0 lg:text-left">
          <span className="nav-text text-lg uppercase text-white lg:translate-x-0 lg:text-3xl">WANNA TRAVEL TO...</span>

          <h1 className="text-white my-6 uppercase font-secondary">SPACE?</h1>

          <p className="text-white text-xl">
            When you want to go to space, <br></br> you might as well bring back something worth the journey.<br></br> Sit down and buckle up for a new experience!
          </p>
        </motion.div>

        <motion.div
          onClick={() => {
            router.push("/destination");
          }}
          variants={SCALE_UP}
          className="bg-white w-48 h-48 rounded-full flex items-center justify-center font-primary tracking-[1.25px] uppercase relative group md:w-60 md:h-60
        lg:w-49 lg:h-49
        "
        >
          <div
            className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-white/10 rounded-full scale-50 transition ease-in-out 
          duration-[400ms!important] cursor-pointer group-hover:scale-100
          "
          />

          <span className="relative hover:cursor-pointer z-10 text-primary text-lg md:text-2xl">EXPLORE</span>
        </motion.div>
      </main>
    </MotionDiv>
  );
}
