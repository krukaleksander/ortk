import { MdOutlinePhoneInTalk } from "react-icons/md";

const PhoneIcon = ({ setShowed }) => {
  return (
    <span className="phone-icon" onClick={() => setShowed(true)}>
      <MdOutlinePhoneInTalk />
    </span>
  );
};

export default PhoneIcon;
