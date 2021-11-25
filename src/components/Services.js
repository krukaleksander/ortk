import { ImPowerCord } from "react-icons/im";
import { GiFireZone } from "react-icons/gi";
import PowerImage from "../media/bg_before_movie.jpeg";
import GasImage from "../media/bg-gas.jpeg";
import BasicBg from "../media/bg-services.jpeg";

const Services = () => {
  const changeBg = (medium = "power") => {
    const container = document.querySelector(".services__colored--image");
    const powerColored = document.querySelector(".services__colored--energy");
    const gasColored = document.querySelector(".services__colored--gas");
    const plusColored = document.querySelector(".services__colored--plus");

    if (medium === "power") {
      container.style.cssText = `background:url(${PowerImage});background-repeat:no-repeat;background-size:cover;display:block;transition: all .4s cubic-bezier(.4,0,1,1);transform:scale(1.1)`;
      powerColored.style.display = "block";
      plusColored.style.display = "block";
    }
    if (medium === "gas") {
      container.style.cssText = `background:url(${GasImage});background-repeat:no-repeat;background-size:cover;display:block;transition: all .4s cubic-bezier(.4,0,1,1);transform:scale(1.1)`;
      gasColored.style.display = "block";
      plusColored.style.display = "block";
    }
  };

  const returnBg = () => {
    document.querySelector(".services").style.background = `url(${BasicBg})`;
    document.querySelector(
      ".services__colored--image"
    ).style.cssText = `background:unset;transform:scale(1.5)`;
    document.querySelector(".services__colored--energy").style.display = "none";
    document.querySelector(".services__colored--gas").style.display = "none";
    document.querySelector(".services__colored--plus").style.display = "none";
  };
  return (
    <div className="services">
      <div className="services__colored services__colored--image"></div>
      <div className="services__colored services__colored--energy"></div>
      <div className="services__colored services__colored--gas"></div>
      <div className="services__colored services__colored--plus"></div>
      <div
        className="services__circle services__circle--power"
        onMouseOver={() => changeBg()}
        onMouseOut={() => returnBg()}
        onClick={() => (window.location.href = `${window.location}energia`)}
      >
        <ImPowerCord /> <p>Prąd</p>
      </div>
      <div
        className="services__circle services__circle--gas"
        onMouseOver={() => changeBg("gas")}
        onMouseOut={() => returnBg()}
        onClick={() => (window.location.href = `${window.location}gaz`)}
      >
        <GiFireZone /> <p>Gaz</p>
      </div>
    </div>
  );
};

export default Services;
