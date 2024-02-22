import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />

      <Router>
        <div className="px-4 py-8">
          <Routes>
          <Route  element={<Home />} path="/" />
          {/* <Route  element={<Home />} path="/"/> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
