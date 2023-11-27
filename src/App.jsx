import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Header />

      <div className="px-4 py-8">
        {/* <h1>Adeyemi's porfolio</h1> */}
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;
