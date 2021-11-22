import { ImPowerCord } from "react-icons/im";
import { GiFireZone } from "react-icons/gi";
import PowerImage from "../media/bg_before_movie.jpeg";
import GasImage from "../media/bg-gas.jpeg";
import BasicBg from "../media/bg-services.jpeg";
import BgSpan from "../media/gradient-power.jpeg";
const Services = () => {
  const changeBg = (medium = "power") => {
    const container = document.querySelector(".services");

    if (medium === "power") {
      container.style.background = `url(${PowerImage})`;
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
    }
    if (medium === "gas") {
      container.style.background = `url(${GasImage})`;
      container.style.backgroundSize = "cover";
      container.style.backgroundRepeat = "no-repeat";
    }
  };

  const returnBg = () => {
    document.querySelector(".services").style.background = `url(${BasicBg})`;
  };
  return (
    <div className="services">
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
