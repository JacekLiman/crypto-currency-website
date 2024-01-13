import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/Calculate";

function App() {
  const [navMobile, setNavMobile] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  });
  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      <div
        className={`${
          navMobile ? "translate-x-0" : "translate-x-full"
        } fixed z-10 top-0 right-0 h-screen transition-all duration-200 lg:hidden`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why/>
      <Calculate/>
    </div>
  );
}

export default App;
