import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import About from "./components/About";
import Log from "./components/Log";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [intro, setIntro] = useState(true);

  // Flip the tab title when the user looks away.
  useEffect(() => {
    const original = document.title;
    const onVis = () => {
      document.title = document.hidden ? "Come back — Ethan Wu" : original;
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <>
      {intro && <Intro onDone={() => setIntro(false)} />}
      <Cursor />
      <ScrollProgress />
      <div
        className="grain pointer-events-none fixed inset-0 z-[9999] opacity-[0.045] mix-blend-multiply"
        aria-hidden="true"
      />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Log />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
