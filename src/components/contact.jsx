import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container-fluid bg-info text-center fs-4 text-light py-2">
        <strong>CONTACT</strong>
      </div>
      <div className="container bg-light my-5 py-5">
        <div className="row  justify-content-center">
          <div className="col-lg-5 mx-3">
            <div className="row py-2 rounded shadow my-3 bg-white align-middle border">
              <Link
                to="tel:+919672204568"
                className="text-secondary row text-decoration-none mt-3"
              >
                <span>
                  <i className="bi bi-phone mx-2"></i> +91 96722 04568
                </span>
              </Link>
            </div>
            <div className="row py-2 rounded shadow my-3 bg-white align-middle border">
              <Link
                to="tel:07472442027"
                className="text-secondary row text-decoration-none mt-3"
              >
                <span>
                  <i className="bi bi-telephone mx-2"></i> 07472 442 027
                </span>
              </Link>
            </div>
            <div className="row py-2 rounded shadow my-3 bg-white align-middle border">
              <Link
                to="mailto:brijrajjangid@gmail.com"
                className="text-secondary text-decoration-none mt-3"
              >
                <span>
                  <i className="bi bi-envelope mx-2"></i> brijrajjangid@gmail.com
                </span>
              </Link>
            </div>
            <div className="row py-2 rounded shadow my-3 bg-white align-middle border">
              <Link
                to="https://www.facebook.com/chankayaeducationgroup/"
                className="text-secondary row text-decoration-none"
              >
                <span>
                  <i className="bi bi-facebook mx-2"></i> Chankaya Coaching Classes -
                  @chankayaeducationgroup
                </span>
              </Link>
            </div>
            <div className="row py-2 rounded shadow my-3 bg-white align-middle border">
              <Link
                to="https://goo.gl/maps/oAPF2e12u8BtBxV86"
                className="text-secondary row text-decoration-none"
              >
                <span>
                  <i className="bi bi-geo-alt-fill mx-2"></i>Bundi, College Road, in
                  Front of Police Kotwali, New Colony - 323001
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ms-2 p-3 bg-white">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1005625967887!2d75.64386467521958!3d25.434901277558648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f094b61cbc461%3A0xba7c306c491af72!2sChankaya%20Coaching%20Classes-%20Bundi!5e0!3m2!1sen!2sin!4v1690194200518!5m2!1sen!2sin" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map" className="w-100 h-100 rounded"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
