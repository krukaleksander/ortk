import { ImPowerCord } from "react-icons/im";
import { GiFireZone } from "react-icons/gi";
const Services = () => {
  return (
    <div className="services">
      <div className="services__circle services__circle--power">
        <ImPowerCord /> <p>Prąd</p>
      </div>
      <div className="services__circle services__circle--gas">
        <GiFireZone /> <p>Gaz</p>
      </div>
    </div>
  );
};

export default Services;
