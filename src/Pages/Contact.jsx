import React, { useState } from "react";
// import emailjs from 'emailjs-com';
import "../Styles/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, message } = formData;

    if (name && phone && message) {
      // Send email using EmailJS
      emailjs
        .sendForm(
          "your_service_id",
          "your_template_id",
          e.target,
          "your_user_id"
        )
        .then(
          (result) => {
            setStatus("Message sent successfully!");
            setFormData({ name: "", phone: "", message: "" });
          },
          (error) => {
            setStatus("Failed to send message. Please try again later.");
          }
        );
    } else {
      setStatus("Please fill out all fields.");
    }
  };

  return (
    <div className="pt-section contact_container">
      <h2 className="contact_title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="form_cont">
        <div className="form_inner_cont">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Please Enter Your Name"
            autoComplete="name"
          />
        </div>

        <div className="form_inner_cont">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Please Enter Your Phone Number"
            autoComplete="tel"
          />
        </div>

        <div className="form_inner_cont">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter Your Messages"
            autoComplete="off"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
