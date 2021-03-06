import { Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

export const ContactForm = () => {
  const [formValues, setFormValues] = useState({});
  const [showError, setShowError] = useState(false);
  const [showMsgSent, setShowMsgSent] = useState(false);

  const sendEmail = () => {
    init("user_iuN4htqntRJTQzuV52qTi");
    emailjs.send("service_es6wnh6", "template_ryhsq0g", formValues).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const validateFormValues = () => {
    if (
      formValues.name &&
      formValues.email &&
      formValues.subject &&
      formValues.message
    ) {
      console.log("validation passed", formValues);
      setShowError(false);
      setShowMsgSent(true);
      sendEmail();
    } else {
      setShowError(true);
      setShowMsgSent(false);
    }
  };

  return (
    <div className="contact-form">
      <TextField
        required
        id="standard-required"
        label="Name"
        variant="standard"
        onKeyUp={(event) =>
          setFormValues((prev) => {
            prev.name = event.target.value;
            return prev;
          })
        }
      />
      <TextField
        required
        id="standard-required"
        label="Email"
        variant="standard"
        onKeyUp={(event) =>
          setFormValues((prev) => {
            prev.email = event.target.value;
            return prev;
          })
        }
        value={formValues.email}
      />
      <TextField
        required
        id="standard-required"
        label="Subject"
        variant="standard"
        onKeyUp={(event) =>
          setFormValues((prev) => {
            prev.subject = event.target.value;
            return prev;
          })
        }
      />
      <TextField
        required
        id="standard-required"
        label="Message"
        multiline
        rows={4}
        variant="standard"
        onKeyUp={(event) =>
          setFormValues((prev) => {
            prev.message = event.target.value;
            return prev;
          })
        }
      />
      <Collapse id="error" in={showError}>
        Fill all the required fields and try again.
      </Collapse>
      <Collapse id="msgSent" in={showMsgSent}>
        Message sent.
      </Collapse>
      <Button
        id="btn-send-message"
        onClick={validateFormValues}
        variant="contained"
      >
        Send Message
      </Button>
    </div>
  );
};
