import { CgClose } from "react-icons/cg";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <form action="">
        <span>
          <CgClose />
        </span>
        <h2>Formularz kontaktowy</h2>
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Imię" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Widomość"
        ></textarea>
        <button>Wyślij</button>
        <p>Nasz przedstawiciel skontaktuje się w wybranym terminie</p>
      </form>
    </div>
  );
};

export default ContactForm;
