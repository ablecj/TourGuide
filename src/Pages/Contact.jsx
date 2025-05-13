import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // make sure this is installed
import "../Styles/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Phone validation function (basic: 10 digits only)
  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      setStatus("Please fill out all fields.");
      setStatusType("error");
      return;
    }

    if (!isValidPhone(phone)) {
      setStatus("Please enter a valid 10-digit phone number.");
      setStatusType("error");
      return;
    }

    emailjs
      .send(
        "service_xvssoz9", // Replace with your actual EmailJS service ID
        "template_m61794e", // Replace with your EmailJS template ID
        { name, phone, message },
        "V_cyOYwtxR7k9H2F3" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setStatusType("success");
          setFormData({ name: "", phone: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
          setStatusType("error");
        }
      );
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

      {status && <p className={`contact_form_stat ${statusType}`}>{status}</p>}
    </div>
  );
};

export default ContactForm;
