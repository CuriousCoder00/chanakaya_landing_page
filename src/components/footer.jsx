import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary pt-5 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className=" text-secondary text-decoration-underline"><b>Get in Touch</b></p>
            <ul className="list-unstyled mx-3">
              <li className="mb-3">
                <Link
                  to="https://goo.gl/maps/oAPF2e12u8BtBxV86"
                  className="text-secondary row text-decoration-none"
                >
                  <span>
                    <i class="bi bi-geo-alt-fill"></i> Chankaya Coaching Classes
                    - Bundi, College Road, in Front of Police Kotwali, New
                    Colony - 323001
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="tel:+919672204568"
                  className="text-secondary inline row text-decoration-none mt-3"
                >
                  <span>
                    <i class="bi bi-phone"></i> +91 96722 04568
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="tel:07472442027"
                  className="text-secondary row text-decoration-none mt-3"
                >
                  <span>
                    <i class="bi bi-telephone"></i> 07472 442 027
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="mailto:brijrajjangid@gmail.com"
                  className="text-secondary row text-decoration-none mt-3"
                >
                  <span>
                    <i class="bi bi-envelope"></i> brijrajjangid@gmail.com
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className=" text-secondary text-decoration-underline"><b>Quick Links</b></p>
            <ul className="list-unstyled mx-3">
              <li>
                <Link to="/" className="text-secondary text-decoration-none">
                  <i class="bi bi-chevron-right"></i> Home
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none"
                >
                  <i class="bi bi-chevron-right"></i> About
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/courses"
                  className="text-secondary text-decoration-none"
                >
                  <i class="bi bi-chevron-right"></i> Courses
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/gallery"
                  className="text-secondary text-decoration-none"
                >
                  <i class="bi bi-chevron-right"></i> Gallery
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/dashboard"
                  className="text-secondary text-decoration-none"
                >
                  <i class="bi bi-chevron-right"></i> Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className=" text-secondary text-decoration-underline"><b>Our Speciality</b></p>
            <ul>
                <li className="mb-2 text-secondary">
                    Lorem ipsum dolor sit amet.
                </li>
                <li className="mb-2 text-secondary">
                    Lorem ipsum dolor sit amet.
                </li>
                <li className="mb-2 text-secondary">
                    Lorem ipsum dolor sit amet.
                </li>
                <li className="mb-2 text-secondary">
                    Lorem ipsum dolor sit amet.
                </li>
                <li className="mb-2 text-secondary">
                    Lorem ipsum dolor sit amet.
                </li>
                <li className="mb-2 text-secondary">
                    Lorem ipsum dolor sit amet.
                </li>
            </ul>
          </div>
        </div>
        <p className="text-secondary text-center mt-2">
          Copyright &copy; 2023 chankayacoachingclasses.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
