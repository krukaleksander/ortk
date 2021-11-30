import { useEffect } from "react";
import LetsStart from "./LetsStart";

const Energia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <LetsStart title={"Energia elektryczna"} />;
};

export default Energia;
