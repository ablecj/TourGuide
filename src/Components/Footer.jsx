import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="container-fluid footer_container">
        <div className="footer-top">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-4">
              <div className="footer-col">
                <h4 className="footer-col-title">Funday Tours &amp; Travels Pvt. Ltd.</h4>
                <ul className="list-unstyled contact-address">
                  <li className="address">
                    SF Arcade, Kunnumpuram Lane,<br />
                    Kakkanad Kochi, Kerala,<br />
                    India 682030
                  </li>
                  <li className="phone my-3">
                    <i className="fas fa-phone-alt me-2"></i>
                    <a href="tel:+919847151979">+91 984715 1979</a>,{' '}
                    <a href="tel:+919656913336">+91 9656 91 3336</a>
                  </li>
                  <li className="email">
                    <i className="fas fa-envelope me-2"></i>
                    <a href="mailto:info@fundayholidays.com">info@fundayholidays.com</a>
                  </li>
                </ul>

                {/* Social Links */}
                <ul className="social-links nav mb-3">
                  <li className="nav-item">
                    <a href="https://www.facebook.com/fundayholidays/" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://twitter.com/FundayHolidays" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.instagram.com/fundayholidays/" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://in.pinterest.com/fundayholidays/" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://in.linkedin.com/pub/funday-holidays/ab/b12/718/" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.youtube.com/channel/UCj08BRJtexeusZ9vVfoZiMg" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://wa.me/919847151979" className="nav-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Useful Links + Destinations */}
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-col">
                    <h4 className="footer-col-title">Useful Links</h4>
                    <ul className="footer-col-nav nav flex-row mb-3">
                      {[
                        ["Home", "/"],
                        ["Tours", "/tours"],
                        ["Holiday Packages", "/packages"],
                        ["Holiday Destinations", "/destinations"],
                        ["About Us", "/about-us"],
                        ["Blog", "/blog"],
                        ["Photo Galleries", "/gallery"],
                        ["Vehicle Rentals", "/services/vehicle-rentals"],
                        ["Houseboat Booking", "/services/house-boats-backwater-tourism-in-kerala"],
                        ["Contact Us", "/contact-us"],
                        ["Careers", "/careers"],
                        ["Privacy Policy", "/privacy-policy"],
                        ["Tour Booking Policy", "/tour-booking-policy"]
                      ].map(([text, url], index) => (
                        <li className="nav-item" key={index}>
                          <a href={`https://www.fundayholidays.com${url}`} className="nav-link">{text}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
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
                </div>
              </div>

              {/* Subscription Form */}
              <div className="email-sub-form">
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
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr />
        <div className="site-info">
          <p id="site-generator" className="text-center footer-copy">
            <span>© 2025 <a href="https://www.fundayholidays.com/" className="site-name">Funday Holidays</a></span>
            <span> | All rights reserved</span>
            <span> | <a href="https://www.codeaweb.com/" className="imprint">Developed by Codeaweb</a></span>
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
