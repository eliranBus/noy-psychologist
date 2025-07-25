import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { TextField, TextareaAutosize } from "@mui/material";
import { validateString, validateEmail } from "../utilities";

init("user_0j1a6D9rvtHlXSxC8781G");

const Contact = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const form = useRef();

  useEffect(() => {
    validateInputs();
  }, [firstName, lastName, email]);

  const validateInputs = () => {
    validateString(firstName)
      ? setValidFirstName(true)
      : setValidFirstName(false);
    validateString(lastName) ? setValidLastName(true) : setValidLastName(false);
    validateEmail(email) ? setValidEmail(true) : setValidEmail(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validFirstName && validLastName) {
      emailjs
        .sendForm(
          "service_dpen1vf",
          "template_aoe8nbn",
          form.current,
          "user_0j1a6D9rvtHlXSxC8781G"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setEmailSent(true);
    } else {
    }
  };

  return (
    <div className="contact-wrapper" id="contact">
      {emailSent ? (
        <div className="thanks">
          <h3>תודה על פנייתך!</h3>
          <p>אחזור אליך בהקדם האפשרי.</p>
        </div>
      ) : (
        <>
          <h2>צור קשר</h2>
          <div className="contact-details">
            <p>טלפון: 054-6818155</p>
            <p>מייל: noytal0546@gmail.com</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="top">
              <div className="input-wrapper">
                <TextField
                  label={"שם פרטי"}
                  type="text"
                  name="user_firstname"
                  required
                  variant="standard"
                  error={!validFirstName && firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  helperText={
                    !validFirstName && firstName && "אנא הקלד שם פרטי תקין"
                  }
                />
              </div>
              <div className="input-wrapper">
                <TextField
                  label={"שם משפחה"}
                  type="text"
                  name="user_lastname"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  variant="standard"
                  error={!validLastName && lastName ? true : false}
                  helperText={
                    !validLastName && lastName && "אנא הקלד שם משפחה תקין"
                  }
                />
              </div>
            </div>
            <div className="top">
              <div className="input-wrapper">
                <TextField
                  label={"מספר טלפון"}
                  type="number"
                  name="user_phone"
                  required
                  variant="standard"
                />
              </div>
              <div className="input-wrapper">
                <TextField
                  label={"כתובת אימייל"}
                  type="email"
                  name="user_email"
                  required
                  variant="standard"
                  error={!validEmail && email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={
                    !validEmail && email && "אנא הקלד כתובת אימייל תקינה"
                  }
                />
              </div>
            </div>
            <div className="bottom">
              <div className="input-wrapper textArea-input-wrapper">
                <label>הודעה</label>
                <TextareaAutosize
                  variant="standard"
                  name="message"
                  minRows={7}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                fontFamily: "MPLUSRounded1c",
              }}
            >
              שלח
            </button>
          </form>
        </>
      )}
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
        <path
          d="M-314,267 C105,364 400,100 812,279"
          fill="none"
          stroke="white"
          stroke-width="120"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Contact;
