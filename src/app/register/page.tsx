"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrevious } from "@mantine/hooks";
import mobile from "@/app/assets/register/Background-register-mobile.jpg";
import tablet from "@/app/assets/register/Background-register-tablet.jpg";
import desktop from "@/app/assets/register/Background-register-desktop.jpg";
import PageTitle from "../components/PageTitle";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { SLIDE_LEFT, SLIDE_RIGHT } from "../lib/data";
import MotionDiv from "../components/MotionDiv";
import Background from "../components/Background";

const destinations = ["Moon", "Venus", "Mars", "Europa", "Titan"];
const missions = ["Exploration", "Travel", "Mining", "Colonization"];

const RegisterPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  const [selectedMission, setSelectedMission] = useState(missions[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const prevSelectedDestination = usePrevious(selectedDestination);
  const prevSelectedMission = usePrevious(selectedMission);

  const handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDestination(e.target.value);
  };

  const handleMissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMission(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setIsCalendarOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
            exit: { opacity: 0, x: 50 },
          }}
          className="bg-black p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <PageTitle title="Join us to space" number={7} />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="destination" className="block font-medium text-white">
                Destination
              </label>
              <AnimatePresence mode="wait">
                <motion.select
                  key={selectedDestination}
                  initial={{ x: prevSelectedDestination ? (prevSelectedDestination < selectedDestination ? 50 : -50) : 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: prevSelectedDestination ? (prevSelectedDestination < selectedDestination ? -50 : 50) : 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  id="destination"
                  value={selectedDestination}
                  onChange={handleDestinationChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-lg"
                >
                  {destinations.map((destination) => (
                    <option key={destination} value={destination}>
                      {destination}
                    </option>
                  ))}
                </motion.select>
              </AnimatePresence>
            </div>
            <div>
              <label htmlFor="mission" className="block font-medium text-white">
                Mission
              </label>
              <AnimatePresence mode="wait">
                <motion.select
                  key={selectedMission}
                  initial={{ x: prevSelectedMission ? (prevSelectedMission < selectedMission ? 50 : -50) : 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: prevSelectedMission ? (prevSelectedMission < selectedMission ? -50 : 50) : 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  id="mission"
                  value={selectedMission}
                  onChange={handleMissionChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-lg"
                >
                  {missions.map((mission) => (
                    <option key={mission} value={mission}>
                      {mission}
                    </option>
                  ))}
                </motion.select>
              </AnimatePresence>
            </div>
            <div>
              <label htmlFor="date" className="block font-medium text-white">
                Departure Date
              </label>
              <div className="relative w-full border-gray-300 rounded-md shadow-sm px-3 py-2 text-lg bg-gray-700 text-white cursor-pointer flex items-center" onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
                <CalendarIcon className="w-6 h-6 text-gray-400 mr-2" />
                <span>{selectedDate || "Select a date"}</span>
              </div>
              {isCalendarOpen && <input type="date" className="w-full mt-2 p-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" onChange={handleDateChange} />}
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Register
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-4">Thank You For Your Registration!</h2>
              <p className="text-black">
                You have successfully registered for the {selectedMission} mission to {selectedDestination}.
              </p>
              <button onClick={handleCloseDialog} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RegisterPage;
