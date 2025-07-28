import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser"; // make sure this is installed
import "../Styles/Contact.css";
// import AOS from "aos";
// import "aos/dist/aos.css";




const ContactForm = () => {
  // sideeffect run for aos
//   useEffect(() => {
//   AOS.init({
//     duration: 1000, 
//     once: true,     
//   });
// }, []);

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

  // Optional: Add timestamp if using {{time}} in your EmailJS template
  // const time = new Date().toLocaleString();

  // Send email
  emailjs
    .send(
      "service_fcmmklf", // Your EmailJS service ID
      "template_h7kvp0e", // Your template ID
      { name, phone, message  }, // Make sure this matches your template
      "EBLGFLCgsbzL7HoAU" // Your EmailJS public key
    )
    .then(
      () => {
        setStatus("Message sent successfully!");
        setStatusType("success");

        // ✅ Clear form fields
        setFormData({
          name: "",
          phone: "",
          message: "",
        });

        // Optional: Clear status message after a few seconds
        setTimeout(() => {
          setStatus("");
          setStatusType("");
        }, 5000);
      },
      () => {
        setStatus("Failed to send message. Please try again later.");
        setStatusType("error");
      }
    );
};


  return (
    <div className="pt-section contact_container" data-aos="fade-down">
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
