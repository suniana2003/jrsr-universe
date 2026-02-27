import { useEffect, useRef } from "react";
import "../styles/goodNight.css";

export default function GoodNight() {
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      createStar();
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const createStar = () => {
    const s = document.createElement("div");
    s.className = "night-particle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 6000);
  };

  const startAudio = () => {
    audioRef.current?.play();
  };

  return (
    <div className="night-page" onClick={startAudio}>

      <audio ref={audioRef} loop>
        <source src="/night.mp3" type="audio/mpeg" />
      </audio>

      {/* HERO */}
      <section className="night-hero">
        <div className="moon"></div>
        <h1 className="night-title">Good Night 🌙</h1>
      </section>

      {/* MESSAGE */}
      <section className="night-message">
        <p>
          The day has taken enough from you.
          <br /><br />
          Let it go now.
          <br />
          Slowly.
          <br /><br />
          You did your best.
          And that is enough.
        </p>
      </section>

      <section className="night-final">
        <p>
          Sleep peacefully.
          <br />
          I’m quietly rooting for you.
          <br /><br />
          And maybe…
          <br />
          Dream of me a little. 💛
        </p>
      </section>

    </div>
  );
}