import { CgClose } from "react-icons/cg";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
import "moment/locale/pl";

const ContactForm = ({ setShowed }) => {
  return (
    <div className="contact-form">
      <form action="">
        <span>
          <CgClose onClick={() => setShowed(false)} />
        </span>
        <h2>Formularz kontaktowy</h2>
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefon" />
        <h4>Kiedy mamy się skontaktować?</h4>
        <Datetime locale="pl" initialValue={new Date()} />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Widomość"
        ></textarea>
        <button>Wyślij</button>
        <p>Nasz przedstawiciel skontaktuje się w wybranym terminie.</p>
      </form>
    </div>
  );
};

export default ContactForm;
