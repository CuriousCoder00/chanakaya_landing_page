import React from "react";
import { Link } from "react-router-dom";
const ContactTeacherBTN = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#contactTeacherModal"
      >
        Contact Teacher
      </button>
      <div
        className="modal fade"
        id="contactTeacherModal"
        tabIndex="-1"
        aria-labelledby="contactTeacherModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered text-start">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="contactTeacherModalLabel">
                Contact Teacher
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTeacherBTN;
