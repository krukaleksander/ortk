import { BsArrowRight } from "react-icons/bs";

const ContactSection = () => {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h3>skontaktuj się z nami</h3>
        <div className="contact__container">
          <h1>
            Skorzystaj z naszego wygodnego formularza a my odezwiemy się jak
            najszybciej, lub w wskazanym przez Ciebie terminie
          </h1>
          <div className="contact__btn-container">
            <button className="contact__button">
              formularz kontaktowy
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
