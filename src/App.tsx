import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/Calculate";
import Trade from "./components/Trade";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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
      <Trade/>
      <Features/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
