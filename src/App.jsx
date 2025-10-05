import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rootlayout from "./Components/Rootlayout";
import Home from "./Components/Page/Home";
import Contact from "./Components/Layout/Contact";
import About from "./Components/Layout/About";
import Teme from "./Components/Layout/Teme";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Teme />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
