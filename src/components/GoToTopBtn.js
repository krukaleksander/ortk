import { IoIosArrowUp } from "react-icons/io";
import React from "react";

function GoToTopBtn() {
  const goToTheTopFn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="go-to-the-top" onClick={() => goToTheTopFn()}>
      <IoIosArrowUp />
    </div>
  );
}

export default GoToTopBtn;
