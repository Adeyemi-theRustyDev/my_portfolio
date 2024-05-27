import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
const App = () => {
  return (
    <div className="pack">
      <Header />
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/Projects" />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
