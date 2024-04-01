// Must have installed '@mui/material', '@emotion/react', '@emotion/styled', and react-toastify
// Install Tailwind CSS as well: npm install tailwindcss react-toastify

"use client";
import React from "react";
import { NotificationsNone } from "@mui/icons-material";
import NavigationBar from "./Components/NavBar";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const concentricCircles = (count) => {
  return Array.from({ length: count }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        width: `calc(90% - ${i * 20}px)`,
        height: `calc(90% - ${i * 20}px)`,
        borderRadius: "50%",
        border: `6px solid rgba(255, 165, 0, ${0.2 - i * 0.03})`,
        boxSizing: "border-box",
      }}
    />
  ));
};
const App = () => {
  const handleSendNotification = () => {
    toast.success("You have a new notification");
  };

  return (
    <div className="text-center">
      <div
        maxWidth="sm"
        className="flex flex-col items-center justify-center h-screen" // Tailwind classes for container
      >
        <NavigationBar />
        <h5 className="text-2xl mb-4">Lorem Ipsum...</h5>
        <p className="text-base mb-4">Lorem ipsum dolor sit amet.</p>
        <div className="relative h-96 w-96 m-4">
          {concentricCircles(10)}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div whileHover={{scale:1.1}}
            className="bg-[#d6836a] rounded-full border-white border-2 p-4 mr-12 mb-16">
              <NotificationsNone 
              style={{ color: "white", fontSize: 70 }} />
            </motion.div>
          </div>
        </div>
        <button
          className="bg-[#D7512A] text-white py-3 px-24 rounded-md font-bold transform transition duration-500 ease-in-out hover:scale-105 hover:bg-[#AF4923]"
          onClick={handleSendNotification}
        >
          Send Notification
        </button>
      </div>
    </div>
  );
};

export default App;
