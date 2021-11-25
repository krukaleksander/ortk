import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import ContactForm from "./ContactForm";
import PhoneIcon from "./PhoneIcon";

const ContactSection = () => {
  const [showed, setShowed] = useState(false);
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h3>skontaktuj się z nami</h3>
        <div className="contact__container">
          <h1>
            Skorzystaj z naszego wygodnego formularza a my odezwiemy się jak
            najszybciej, lub we wskazanym przez Ciebie terminie
          </h1>
          <div className="contact__btn-container">
            <button className="contact__button" onClick={() => setShowed(true)}>
              formularz kontaktowy
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      {showed && <ContactForm setShowed={setShowed} />}
      <PhoneIcon setShowed={setShowed} showed={showed} />
    </div>
  );
};

export default ContactSection;
