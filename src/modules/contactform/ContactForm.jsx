import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import toast, { Toaster } from "react-hot-toast";
import CommonButton from "../commonbutton/CommonButton";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    if (
      !formData.get("first_name") ||
      !formData.get("last_name") ||
      !formData.get("user_email") ||
      !formData.get("message")
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    emailjs
      .sendForm(
        "service_qhogmo7",
        "template_db5gigb",
        form.current,
        "J1cdqNz_OmintL0cM"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Send Successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message");
          form.current.reset();
        }
      );
  };
  return (
    <div className="contact-form">
      <Toaster position="top-center" reverseOrder={false} />
      <form ref={form} onSubmit={sendEmail}>
        <div className="line-break">
          <div>
            <input
              type="text"
              id="myInput"
              name="first_name"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="myInput"
              name="last_name"
              placeholder="Last Name"
            />
          </div>
        </div>

        <input type="email" name="user_email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <div className="mt-4">
          <CommonButton
            label="Leave a message"
            bgColor="#D2042D"
            color="white"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
