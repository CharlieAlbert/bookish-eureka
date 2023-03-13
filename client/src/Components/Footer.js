import React from 'react'
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import './Footer.css'
// import img12 from "../Assets/Sanlam1.png"

function Footer() {

    var combineLink;
    var contributeLink;
    var calculatorLink;

  return (
    <div>
        <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <br />
                    <span>
                      StartupHive Tower
                      <br /> off Mombasa Road, South C
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <br />
                    <span>+254 (0)20278100</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <br />
                    <span>info@startup.co.ke</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-6 col-lg-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      StartupHive
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      {" "}
                      StartupHive is a platform that connects <br />
                      investors and developers to build innovative <br />
                      solutions. Join our community today and bring <br />
                      your ideas to life!.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <Icon className="media-icon" name="linkedin" />
                    </a>
                    <a href="#">
                      <Icon className="media-icon" name="facebook" />
                    </a>
                    <a href="#">
                      <Icon className="media-icon" name="twitter" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li><a href="/">Contacts</a></li>
                    <li><a href="/">Resources</a></li>
                    <li>
                      <a href="#" aria-disabled>
                        Developer Sign Up
                      </a>
                    </li>
                    <li><a href="/">Objectives</a></li>
                    <li>
                      <a href="#">Investor Sign Up</a>
                    </li>
                    <li>
                      <a href="#">Project Review</a>
                    </li>
                    <li>
                      <a href="#">Browse Projects</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2023, All Right Reserved |{" "}
                    <a href="/">StartupHive Limited</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer