import { ContactInfo } from "../Contact/ContactInfo";
import { ContactForm } from "../Contact/ContactForm";
import "./styles.css"

export const ContactPage = ({name, email, address, phone}) => {
  return (
    <div className="page">
      <h1 className="contact">Contact</h1>
      <div className="contact-page">
        <ContactInfo name={name} email={email} address={address} phone={phone}/>
        <ContactForm />
      </div>
    </div>
  );
};
