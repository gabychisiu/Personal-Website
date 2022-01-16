import { FaUserTie, FaMapMarked, FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import {LabelValueItem} from "../../utils/LabelValueItem"
import "./styles.css";

export const ContactInfo = ({ name, email, address, phone }) => {
  return (
    <div>
      <div className="info-contact">
        <FaUserTie className="logo-contact"/>
        <LabelValueItem label="Name" value={name} />
      </div>
      <div className="info-contact">
        <FaMapMarked className="logo-contact" />
        <LabelValueItem label="Address" value={address} />
      </div>
      <div className="info-contact">
        <FaEnvelope className="logo-contact"/>
        <LabelValueItem label="Email" value={email} />
      </div>
      <div className="info-contact">
        <FaPhoneSquare className="logo-contact" />
        <LabelValueItem label="Phone" value={phone} />
      </div>
    </div>
  );
};
