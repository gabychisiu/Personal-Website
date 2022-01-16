import { FaUserTie, FaMapMarked, FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import { ContactInfoItem } from "./ContactInfoItem";
import "./styles.css";

export const ContactInfo = ({ name, email, address, phone }) => {
  return (
    <div>
      <div className="name">
        <FaUserTie />
        <ContactInfoItem label="Name" value={name} />
      </div>
      <div className="info-contact">
        <FaMapMarked />
        <ContactInfoItem label="Address" value={address} />
      </div>
      <div className="info-contact">
        <FaEnvelope />
        <ContactInfoItem label="Email" value={email} />
      </div>
      <div className="info-contact">
        <FaPhoneSquare />
        <ContactInfoItem label="Phone" value={phone} />
      </div>
    </div>
  );
};
