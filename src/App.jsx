import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Navbar from "./HOMEPAGE/Navbar";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "md:bg-homeDesktop bg-homeMobile sm:bg-homeTablet"
  );
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const setBackground = () => {
    const pathName = window.location.pathname;
    if (pathName === "/") {
      setBackgroundImage("md:bg-homeDesktop bg-homeMobile sm:bg-homeTablet");
    } else if (pathName === "/destination") {
      setBackgroundImage(
        "bg-destinationMobile sm:bg-destinationTablet md:bg-destinationDesktop "
      );
    } else if (pathName === "/crew") {
      setBackgroundImage("bg-crewMobile sm:bg-crewTablet md:bg-crewDesktop ");
    } else if (pathName === "/technology") {
      setBackgroundImage(
        "md:bg-technologyDesktop sm:bg-technologyTablet bg-technologyMobile"
      );
    } else {
      setBackgroundImage("md:bg-homeDesktop bg-homeMobile sm:bg-homeTablet");
    }
  };

  useEffect(() => {
    setBackground();
  }, [location]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div
      className={`overflow-x-hidden min-h-screen md:h-screen ${backgroundImage} bg-no-repeat bg-cover`}
    >
      <Navbar active={active} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
