"use client";
import Link from "next/link";
// import { Link } from "react-router-dom";
import { LogoWhite } from "./SVG";
import AccordionFooter from "./AccordionFooter";

const Footer = () => {
  return (
    <>
      <footer className="footer_sec">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-4 col-lg-6">
              <Link href="/">
                <LogoWhite />
              </Link>
            </div>

            <div className="col-md-8 col-lg-6">
              <AccordionFooter />
            </div>
          </div>

          <h2>
            <span>We are Reviewed on</span>
          </h2>
          <div className="row">
            <div className="col-lg-6 footer_brand">
              <ul>
                <li>
                  <a href="/">
                    <img src="images/clutch.svg" alt="images" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/google-reviews.png" alt="images" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/glassdoor.png" alt="images" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/ambitionbox.png" alt="images" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 social_blk d-flex align-items-center justify-content-lg-end">
              <p>Connect with US</p>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright text-start text-sm-center mt-4">
            <p>
              Copyright © {new Date().getFullYear()} G Web Pro Marketing Inc |
              All Rights Reserved | <a href="/">Sitemap</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
