import Header from "./components/Header";
import { Video } from "./components/Video";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
import Whychange from "./components/Whychange";
import Faq from "./components/Faq";
import Energia from "./components/Energia";
import Gaz from "./components/Gaz";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import ContactSection from "./components/ContactSection";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import Footer from "./components/Footer";

const App = () => {
  const Home = () => {
    return (
      <>
        <Video />
        <Services />
        <Whyus />
        <Whychange />
        <Faq />
        <ContactSection />
      </>
    );
  };
  return (
    <div className="App">
      <Router>
        <div>
          <div className="header-wrapper">
            <Header />
            <div className="navigation-wrapper">
              <div className="phone">
                <span>
                  <BsFillTelephoneFill />
                </span>
                605 271 432
              </div>
              <ul className="navigation">
                <li>
                  <Link to="/">Strona główna</Link>
                </li>
                <li>
                  <Link to="/energia">Energia Elektryczna</Link>
                </li>
                <li>
                  <Link to="/gaz">Gaz</Link>
                </li>
                <li>
                  <Link to="/onas">O nas</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/gaz" element={<Gaz />} />
            <Route exact path="/energia" element={<Energia />} />
            <Route exact path="/onas" element={<About />} />
            <Route exact path="/kontakt" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
