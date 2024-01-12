import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  });
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
}

export default App;
