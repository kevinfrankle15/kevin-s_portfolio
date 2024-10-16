import "./App.css";
import Contact from "./components/ContactPage";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyResume from "./components/Resume/ViewResume";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<MyResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
