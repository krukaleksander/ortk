import { ImPowerCord } from "react-icons/im";
import { GiFireZone } from "react-icons/gi";
import PowerImage from "../media/bg_before_movie.jpeg";
import GasImage from "../media/bg-gas.jpeg";
import BasicBg from "../media/bg-services.jpeg";

const Services = () => {
  const changeBg = (medium = "power") => {
    const container = document.querySelector(".services");
    const powerColored = document.querySelector(".services__colored--energy");
    const gasColored = document.querySelector(".services__colored--gas");
    const plusColored = document.querySelector(".services__colored--plus");

    if (medium === "power") {
      container.style.background = `url(${PowerImage})`;
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      powerColored.style.display = "block";
      plusColored.style.display = "block";
    }
    if (medium === "gas") {
      container.style.background = `url(${GasImage})`;
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
      gasColored.style.display = "block";
      plusColored.style.display = "block";
    }
  };

  const returnBg = () => {
    document.querySelector(".services").style.background = `url(${BasicBg})`;
    document.querySelector(".services__colored--energy").style.display = "none";
    document.querySelector(".services__colored--gas").style.display = "none";
    document.querySelector(".services__colored--plus").style.display = "none";
  };
  return (
    <div className="services">
      <div className="services__colored services__colored--energy"></div>
      <div className="services__colored services__colored--gas"></div>
      <div className="services__colored services__colored--plus"></div>
      <div
        className="services__circle services__circle--power"
        onMouseOver={() => changeBg()}
        onMouseOut={() => returnBg()}
      >
        <ImPowerCord /> <p>Prąd</p>
      </div>
      <div
        className="services__circle services__circle--gas"
        onMouseOver={() => changeBg("gas")}
        onMouseOut={() => returnBg()}
      >
        <GiFireZone /> <p>Gaz</p>
      </div>
    </div>
  );
};

export default Services;
