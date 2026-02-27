import { useEffect, useRef } from "react";
import "../styles/goodMorning.css";

export default function GoodMorning() {
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      createDust();
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const createDust = () => {
    const d = document.createElement("div");
    d.className = "dust";
    d.style.left = Math.random() * 100 + "vw";
    d.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 7000);
  };

  const startAudio = () => {
    audioRef.current?.play();
  };

  return (
    <div className="morning-page" onClick={startAudio}>

      <audio ref={audioRef} loop>
        <source src="/morning.mp3" type="audio/mpeg" />
      </audio>

      {/* HERO */}
      <section className="morning-hero">
        <div className="sun"></div>
        <h1 className="morning-name">Rafiya Sultana</h1>
        <p className="morning-sub">Good Morning ☀️</p>
      </section>

      {/* MESSAGE */}
      <section className="morning-message">
        <p>
            I hope you woke up gently today.
            <br /><br />
            Before the world pulls you into meetings and deadlines...
            <br />
            Pause for a second. Breath Slowly
            <br /><br />
            You work so hard.
            <br />
            Even when you are exhausted.
            <br />
            Even when no one sees you.
            <br /><br />
            But I see you!
            <br /><br />
            You are strong [I know you can lift me 😜].
            <br />
            You are capable [I know you can take care of me 🥰].
            <br />
            And you are loved [I Love You 😘].
        </p>
      </section>

      <section className="morning-final">
        <p>
            I hope today feels lighter..
            <br />
            I hope stress melts before it reaches you. 
            <br />
            [But I will reach you darling]
            <br /><br />
            Giving you a strong tight hug with a kiss 
            <br />
            [Ok Ok multiple kisses..Haha]
            <br /><br />
            Love you jii.. ❤️
        </p>
      </section>

    </div>
  );
}