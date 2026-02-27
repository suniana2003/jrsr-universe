import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/home.css";

export default function Home() {

  useEffect(() => {
    const interval = setInterval(() => {
      createParticle();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const createParticle = () => {
    const p = document.createElement("div");
    p.className = "home-particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = Math.random() * 4 + 5 + "s";
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 8000);
  };

  return (
    <div className="home-container">

      <div className="home-card">
        <h1 className="home-title">Little Universe</h1>
        <p className="home-subtitle">
          Every mood has a place here.
        </p>

        <div className="home-buttons">
          <Link to="/good-morning">
            <button className="btn morning">Good Morning ☀️</button>
          </Link>

          <Link to="/stress-relief">
            <button className="btn stress">Stress Relief 🌿</button>
          </Link>

          <Link to="/good-night">
            <button className="btn night">Good Night 🌙</button>
          </Link>
        </div>
      </div>

    </div>
  );
}