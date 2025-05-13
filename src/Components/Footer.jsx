import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="container-fluid footer_container">
        <div className="footer-top">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-4">
              <div className="footer-col">
                <h4 className="footer-col-title">
                  Funday Tours &amp; Travels Pvt. Ltd.
                </h4>
                <ul className="list-unstyled contact-address">
                  <li className="address">
                    SF Arcade, Kunnumpuram Lane,
                    <br />
                    Kakkanad Kochi, Kerala,
                    <br />
                    India 682030
                  </li>
                  <li className="phone my-3">
                    <i className="fas fa-phone-alt me-2"></i>
                    <a href="tel:+916238888326">+91 6238888326</a>,{" "}
                    {/* <a href="tel:+919656913336">+91 9656 91 3336</a> */}
                  </li>
                  {/* <li className="email">
                    <i className="fas fa-envelope me-2"></i>
                    <a href="mailto:info@fundayholidays.com">info@fundayholidays.com</a>
                  </li> */}
                </ul>

                {/* Social Links */}
                <ul className="social-links nav mb-3">
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a href="https://in.pinterest.com/fundayholidays/" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://wa.me/+916238888326"
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Useful Links + Destinations */}
            <div className="col-md-4">
              <div className="row">
                <div className="col-12">
                  <div className="footer-col">
                    <h4 className="footer-col-title">Useful Links</h4>
                    <ul className="footer-col-nav nav flex-row mb-3">
                      {[
                        ["Home", "/"],
                        ["Tour Packages", "/TourPackage"],
                        ["Contact Us", "/ContactUs"],
                      ].map(([text, url], index) => (
                        <li className="nav-item" key={index}>
                          <a href={`${url}`} className="nav-link">
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* <div className="col-md-6">
                  <div className="footer-col">
                    <h4 className="footer-col-title">Top Destinations</h4>
                    <ul className="footer-col-nav nav flex-row mb-3">
                      {[
                        "India", "Kerala", "Munnar", "Kochi", "Alappuzha", "Thekkady",
                        "Kovalam", "Thiruvananthapuram", "Agra", "Delhi", "Jaipur",
                        "Kanyakumari", "Valparai", "Malaysia", "Singapore", "Thailand"
                      ].map((name, index) => (
                        <li className="nav-item" key={index}>
                          <a
                            href={`https://www.fundayholidays.com/destinations/${name.toLowerCase().replace(/\s+/g, "-")}/`}
                            className="nav-link"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
              </div>

              {/* Subscription Form */}
              {/* <div className="email-sub-form">
                <p>Get Latest Deals, Upcoming Offers and Travel Guides</p>
                <form action="https://fundayholidays.us4.list-manage.com/subscribe/post" method="post">
                  <input type="hidden" name="u" value="8ab65d2d49e9af5cf82fc8582" />
                  <input type="hidden" name="id" value="d8726cac99" />
                  <input type="hidden" name="b_8ab65d2d49e9af5cf82fc8582_d8726cac99" tabIndex="-1" />
                  <label htmlFor="mce-EMAIL" className="sr-only">Enter your email address</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email address" name="EMAIL" id="mce-EMAIL" required />
                    <button type="submit" className="btn btn-secondary" name="subscribe">Subscribe</button>
                  </div>
                </form>
              </div> */}
            </div>

            {/* map */}
            <div className="col-md-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1594729755684!2d76.34901409999999!3d10.0036829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d00327c94f5%3A0x2d9a3e71598e7ce8!2sSpazehive!5e0!3m2!1sen!2sin!4v1746779525323!5m2!1sen!2sin"
                 width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr />
        <div className="site-info">
          <p id="site-generator" className="text-center footer-copy">
            <span>
              © 2025{" "}
              <a href="https://www.fundayholidays.com/" className="site-name">
                Travelinds
              </a>
            </span>
            <span> | All rights reserved</span>
            <span>
              {" "}
              |{" "}
              <a href="https://www.codeaweb.com/" className="imprint">
                Developed by Moxoyo
              </a>
            </span>
          </p>
          {/* <div className="text-center">
            <a
              href="http://www.dmca.com/Protection/Status.aspx?ID=7dfc17da-9724-469b-bc59-a8f022702e7a&refurl=https://www.fundayholidays.com/"
              target="_blank"
              rel="nofollow noreferrer"
            >
              DMCA PROTECTED
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
