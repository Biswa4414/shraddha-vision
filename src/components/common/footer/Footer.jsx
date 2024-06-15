import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribeClick = () => {
    // Redirect to the contact page
    window.location.reload();
    window.location.href = "/contact"; // Update the URL with your contact page URL

    // Reload the page after redirecting
  };

  return (
    <div className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Get in Touch
                </h3>
                <p>Let's Collab with Shraddha's Vision</p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  noValidate="true"
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <Link to="/contact">
                    <button
                      className="btn btn_get btn_get_two"
                      type="submit"
                      onClick={handleSubscribeClick}
                    >
                      Subscribe
                    </button>
                  </Link>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  ></p>
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © darkCoder Inc.. 2024 All rights reserved by darkCoder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
