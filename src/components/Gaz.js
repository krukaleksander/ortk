import { useEffect } from "react";
import LetsStart from "./LetsStart";

const Gaz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <LetsStart title={"Gaz ziemny"} />;
};

export default Gaz;
