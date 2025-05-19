import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Practices from "./Components/Practices";
import StandoutFeatures from "./Components/StandoutFeatures";
import OurPeople from "./Components/OurPeople";
import Opportunities from "./Components/Opportunities";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="p-lg-5 p-3 d-grid gap-md-5 gap-4">
        <section id="Home">
          <Home></Home>
        </section>
        <section id="Practices">
          <Practices></Practices>
        </section>
        <section id="StandoutFeatures">
          <StandoutFeatures></StandoutFeatures>
        </section>
        <section id="OurPeople">
          <OurPeople></OurPeople>
        </section>
        <section id="Opportunities">
          <Opportunities></Opportunities>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
