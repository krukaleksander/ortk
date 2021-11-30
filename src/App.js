import { useEffect } from "react";
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
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineHomeWork } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Footer from "./components/Footer";
import GoToTopBtn from "./components/GoToTopBtn";

const App = () => {
  const hideMenuFn = () => {
    if (window.screen.width > 1025) return;
    document.querySelector(".navigation").style.left = "-300px";
  };
  const displayGoToTopFn = () => {
    const scrollFromTop = window.scrollY;
    if (scrollFromTop >= 500) {
      document.querySelector(".go-to-the-top").style.display = "inline-flex";
    }
    if (scrollFromTop < 500) {
      document.querySelector(".go-to-the-top").style.display = "none";
    }
  };
  window.addEventListener("scroll", displayGoToTopFn);
  const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <Video />
        <Services />
        <Whyus />
        <Whychange />
        <Faq />
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
                <div>
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  605 271 432
                </div>
                <div className="phone__email">
                  <span>
                    <AiOutlineMail />
                  </span>
                  kontakt@obniz-rachunki.pl
                </div>
                <div className="phone__working-hours">
                  <span>
                    <MdOutlineHomeWork />
                  </span>
                  PN-PT 8-16
                </div>
              </div>
              <ul className="navigation">
                <li className="close-mobile-menu">
                  <ImCross onClick={() => hideMenuFn()} />
                </li>
                <li>
                  <Link to="/" onClick={() => hideMenuFn()}>
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link to="/energia" onClick={() => hideMenuFn()}>
                    Energia Elektryczna
                  </Link>
                </li>
                <li>
                  <Link to="/gaz" onClick={() => hideMenuFn()}>
                    Gaz
                  </Link>
                </li>
                <li>
                  <Link to="/onas" onClick={() => hideMenuFn()}>
                    O nas
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" onClick={() => hideMenuFn()}>
                    Kontakt
                  </Link>
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
          <ContactSection />
          <Footer />
          <GoToTopBtn />
        </div>
      </Router>
    </div>
  );
};

export default App;
