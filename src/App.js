import Components from "./Pages/Components";
import Home from "./Pages/Home";
import Installation from "./Pages/Installation";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  );
}
