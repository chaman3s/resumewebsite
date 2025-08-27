import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAddressCard,
//   faMapMarkerAlt,
//   faMobile,
// } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import {
//   faLinkedinIn,
 
// } from "@fortawesome/free-brands-svg-icons";

export default function ContactUs({icons}) {
  return (
    <section id="contact">
      <div className="section-heading mb75px">
        <FontAwesomeIcon icon={icons[0]} /> <span>Contact</span>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-container">
          <form>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input-field"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input-field"
                required
              />
            </div>
            <div>
              <textarea
                className="input-field"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <a href="mailto:chamanggarwal@gmail.com">
                <input
                  type="button"
                  className="white-border-transparent-button"
                  id="submit"
                  value="SEND MESSAGE"
                />
              </a>
            </div>
          </form>
        </div>

        {/* Address Section */}
        <div className="address-container">
          <h2>Get in touch</h2>
          <p>
            Open to new opportunities, collaborations, and interesting conversations. Write me anytime.
          </p>

          <h2>My Address</h2>
          <div>
            <FontAwesomeIcon icon={icons[1]} /> ABC
          </div>
          <div>
            <FontAwesomeIcon icon={icons[2]} /> 9354861574
          </div>
          <div>
            <FontAwesomeIcon icon={icons[3]} /> chamanggarwal@gmail.com
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bottom-list">
        <ul className="horizontal-list text-center social-links" style={{ margin: 0 }}>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={icons[4]} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
