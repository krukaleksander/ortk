import { BsArrowReturnRight, BsArrowReturnLeft } from "react-icons/bs";

const LetsStart = ({ title }) => {
  return (
    <main className="cooperation">
      <div className="hand-to-hand">
        <div className="hand-to-hand__colored">
          <div className="hand-to-hand__plus"></div>
        </div>
        <div className="hand-to-hand__text">
          <div>
            <h1 className="title">{title}</h1>
            <h1>Zacznijmy współpracę już dziś</h1>
            <h2>aby jutro było lepsze</h2>
          </div>
        </div>
      </div>
      <div className="steps">
        <div className="steps__motto">
          <span></span>
          <p>od sukcesu dzielą nas tylko cztery kroki</p>
        </div>
        <div className="steps__step steps__step--one">
          <div className="step__body">
            <div className="circle">
              <span>1</span>
              <div>
                <p>Analiza</p>
                <p>Faktur</p>
              </div>
            </div>
            <p className="par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              eos odit illo excepturi sit, nulla eaque enim ratione fugiat est
              laboriosam maxime dicta repellendus! Rem deserunt aspernatur
              corrupti reiciendis. Sed? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas eos odit illo excepturi sit, nulla
              eaque enim ratione fugiat est laboriosam maxime dicta repellendus!
              Rem deserunt aspernatur corrupti reiciendis. Sed?
            </p>
          </div>
          <div className="step-arrow step-arrow--right">
            <BsArrowReturnRight />
          </div>
        </div>
        <div className="steps__step steps__step--two">
          <div className="step__body">
            <div className="circle">
              <span>2</span>
              <div>
                <p>Zbieranie</p>
                <p>Ofert</p>
              </div>
            </div>
            <p className="par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              eos odit illo excepturi sit, nulla eaque enim ratione fugiat est
              laboriosam maxime dicta repellendus! Rem deserunt aspernatur
              corrupti reiciendis. Sed? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas eos odit illo excepturi sit, nulla
              eaque enim ratione fugiat est laboriosam maxime dicta repellendus!
              Rem deserunt aspernatur corrupti reiciendis. Sed?
            </p>
          </div>
          <div className="step-arrow step-arrow--left">
            <BsArrowReturnLeft />
          </div>
        </div>
        <div className="steps__step steps__step--three">
          <div className="step__body">
            <div className="circle">
              <span>3</span>
              <div>
                <p>Wybór</p>
                <p>Najlepszej</p>
              </div>
            </div>
            <p className="par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              eos odit illo excepturi sit, nulla eaque enim ratione fugiat est
              laboriosam maxime dicta repellendus! Rem deserunt aspernatur
              corrupti reiciendis. Sed? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas eos odit illo excepturi sit, nulla
              eaque enim ratione fugiat est laboriosam maxime dicta repellendus!
              Rem deserunt aspernatur corrupti reiciendis. Sed?
            </p>
          </div>
          <div className="step-arrow step-arrow--right">
            <BsArrowReturnRight />
          </div>
        </div>
        <div className="steps__step steps__step--four">
          <div className="step__body">
            <div className="circle">
              <span>4</span>
              <div>
                <p>Podpisanie</p>
                <p>Umowy</p>
              </div>
            </div>
            <p className="par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              eos odit illo excepturi sit, nulla eaque enim ratione fugiat est
              laboriosam maxime dicta repellendus! Rem deserunt aspernatur
              corrupti reiciendis. Sed? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas eos odit illo excepturi sit, nulla
              eaque enim ratione fugiat est laboriosam maxime dicta repellendus!
              Rem deserunt aspernatur corrupti reiciendis. Sed?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LetsStart;
