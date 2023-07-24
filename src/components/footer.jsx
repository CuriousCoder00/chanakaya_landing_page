import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-light p-5 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className=" text-secondary text-decoration-underline">
              <b>Get in Touch</b>
            </p>
            <ul className="list-unstyled mx-3">
              <li className="mb-3">
                <Link
                  to="https://goo.gl/maps/oAPF2e12u8BtBxV86"
                  className="text-secondary row text-decoration-none"
                >
                  <span>
                    <i className="bi bi-geo-alt-fill"></i> Chankaya Coaching
                    Classes - Bundi, College Road, in Front of Police Kotwali,
                    New Colony - 323001
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="tel:+919672204568"
                  className="text-secondary row text-decoration-none mt-3"
                >
                  <span>
                    <i className="bi bi-phone"></i> +91 96722 04568
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="tel:07472442027"
                  className="text-secondary row text-decoration-none mt-3"
                >
                  <span>
                    <i className="bi bi-telephone"></i> 07472 442 027
                  </span>
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="mailto:brijrajjangid@gmail.com"
                  className="text-secondary row text-decoration-none mt-3"
                >
                  <span>
                    <i className="bi bi-envelope"></i> brijrajjangid@gmail.com
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className=" text-secondary text-decoration-underline">
              <b>Quick Links</b>
            </p>
            <ul className="list-unstyled mx-3">
              <li>
                <Link to="/" className="text-secondary text-decoration-none">
                  <i className="bi bi-chevron-right"></i> Home
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none"
                >
                  <i className="bi bi-chevron-right"></i> About
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/courses"
                  className="text-secondary text-decoration-none"
                >
                  <i className="bi bi-chevron-right"></i> Courses
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/gallery"
                  className="text-secondary text-decoration-none"
                >
                  <i className="bi bi-chevron-right"></i> Gallery
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  to="/dashboard"
                  className="text-secondary text-decoration-none"
                >
                  <i className="bi bi-chevron-right"></i> Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className=" text-secondary text-decoration-underline">
              <b>Our Speciality</b>
            </p>
            <ul>
              <li className="mb-2 text-secondary">
              RKCL & Govt. Certified Institute
              </li>
              <li className="mb-2 text-secondary">
              Good Infrastructure
              </li>
              <li className="mb-2 text-secondary">
              Well Equiped Lab
              </li>
              <li className="mb-2 text-secondary">
              Experienced Faculty
              </li>
              <li className="mb-2 text-secondary">
              Free Study Materials
              </li>
              <li className="mb-2 text-secondary">
              Intenet Connectivity
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-secondary text-center">
        Copyright &copy; 2023 chankayacoachingclasses.com
      </div>
    </footer>
  );
};

export default Footer;
