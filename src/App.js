import Components from "./Pages/Components";
import Home from "./Pages/Home";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/:category" element={<Components />} />
      </Routes>
    </div>
  );
}
