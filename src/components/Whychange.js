import {
  GiPayMoney,
  GiTakeMyMoney,
  GiGreenPower,
  GiExtraTime,
} from "react-icons/gi";

import { MdTimeline } from "react-icons/md";

const Whychange = () => {
  return (
    <div className="why-change">
      <h1>Dlaczego warto zmienić sprzedawcę?</h1>
      <h2>Sam proces jest dużo łatwiejszy niż myślisz!</h2>
      <div className="why-change__container">
        <div className="why-change__benefit">
          <span className="why-change__icon">
            <GiPayMoney />
          </span>
          <p className="why-change__text">Obniż stawkę za megawat</p>
        </div>
      </div>
      <div className="why-change__container">
        <div className="why-change__benefit">
          <span className="why-change__icon">
            <GiTakeMyMoney />
          </span>
          <p className="why-change__text">Obniż stawkę opłaty handlowej</p>
        </div>
      </div>
      <div className="why-change__container">
        <div className="why-change__benefit">
          <span className="why-change__icon">
            <GiGreenPower />
          </span>
          <p className="why-change__text">Postaw na zieloną energię</p>
        </div>
      </div>
      <div className="why-change__container">
        <div className="why-change__benefit">
          <span className="why-change__icon">
            <GiExtraTime />
          </span>
          <p className="why-change__text">
            Gwarancja stałej ceny na długi okres
          </p>
        </div>
      </div>
      <div className="why-change__container">
        <div className="why-change__benefit">
          <span className="why-change__icon">
            <MdTimeline />
          </span>
          <p className="why-change__text">Nie martw się podwyżkami</p>
        </div>
      </div>
    </div>
  );
};

export default Whychange;
