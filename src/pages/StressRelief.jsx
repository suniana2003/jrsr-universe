import { useEffect, useRef, useState } from "react";
import "../styles/stressRelief.css";

export default function StressRelief() {
  const audioRef = useRef(null);
  const [phase, setPhase] = useState("Breathe In");

  useEffect(() => {
    const breathingCycle = setInterval(() => {
      setPhase((prev) =>
        prev === "Breathe In"
          ? "Hold"
          : prev === "Hold"
          ? "Breathe Out"
          : "Breathe In"
      );
    }, 4000);

    return () => clearInterval(breathingCycle);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      createParticle();
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const createParticle = () => {
    const p = document.createElement("div");
    p.className = "calm-particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = Math.random() * 5 + 6 + "s";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 9000);
  };

  const startAudio = () => {
    audioRef.current?.play();
  };

  return (
    <div className="stress-page" onClick={startAudio}>

      <audio ref={audioRef} loop>
        <source src="/calm.mp3" type="audio/mpeg" />
      </audio>

      {/* HERO */}
      <section className="stress-hero">
        <div className="breathing-circle"></div>
        <h1 className="breathing-text">{phase}</h1>
      </section>

      {/* MESSAGE */}
      <section className="stress-message">
        <p>
          You’ve been carrying a lot today.
          <br /><br />
          Let’s pause for a moment.
          <br />
          Nothing else matters right now.
          <br /><br />
          Just your breath.
          Just this second.
        </p>
      </section>

      <section className="stress-final">
        <p>
          Whenever it feels heavy…
          <br />
          Come back here.
          <br /><br />
          And maybe…
          <br />
          Give me 10 calm minutes too. 💛
        </p>
      </section>

    </div>
  );
}