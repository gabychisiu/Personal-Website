import { FaUserTie, FaMapMarked, FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import {LabelValueItem} from "../../utils/LabelValueItem"
import "./styles.css";

export const ContactInfo = ({ name, email, address, phone }) => {
  return (
    <div>
      <div className="name">
        <FaUserTie />
        <LabelValueItem label="Name" value={name} />
      </div>
      <div className="info-contact">
        <FaMapMarked />
        <LabelValueItem label="Address" value={address} />
      </div>
      <div className="info-contact">
        <FaEnvelope />
        <LabelValueItem label="Email" value={email} />
      </div>
      <div className="info-contact">
        <FaPhoneSquare />
        <LabelValueItem label="Phone" value={phone} />
      </div>
    </div>
  );
};
