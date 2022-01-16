import TextField from "@mui/material/TextField";

export const ContactForm = () => {
  return (
    <div className="contact-form">
      <TextField
        required
        id="standard-required"
        label="Name"
        variant="standard"
      />
      <TextField
        required
        id="standard-required"
        label="Email"
        variant="standard"
      />
      <TextField
        required
        id="standard-required"
        label="Subject"
        variant="standard"
      />
      <TextField
        required
        id="standard-required"
        label="Message"
        multiline
        rows={4}
        variant="standard"
      />
      <button className="btn-send-message" onClick={() => console.log("send")}>
        Send Message
      </button>
    </div>
  );
};
