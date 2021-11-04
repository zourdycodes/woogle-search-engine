import React, { useState } from "react";

import { Routes } from "./components/Routes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};
