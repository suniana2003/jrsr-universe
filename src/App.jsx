import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoodMorning from "./pages/GoodMorning";
import GoodNight from "./pages/GoodNight";
import StressRelief from "./pages/StressRelief";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/good-morning" element={<GoodMorning />} />
      <Route path="/good-night" element={<GoodNight />} />
      <Route path="/stress-relief" element={<StressRelief />} />
    </Routes>
  );
}