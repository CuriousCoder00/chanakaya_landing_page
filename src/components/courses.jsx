import React from "react";
import MSOFFICE from "../assets/ms-office.png";
import TALLY from "../assets/tally.png";
import DCA from "../assets/DCA.jpg";
import DCTTC from "../assets/DCTTCA.png";
import PGDCA from "../assets/PGDCA.png";

import ContactTeacherBTN from "./btnContactModal";
const Courses = () => {
  return (
    <>
      <div className="container-fluid bg-info text-center fs-4 text-light py-2">
        <strong>COURSES</strong>
      </div>
      <div className="container">
        <div className="container mt-5">
          <div className="row my-4 bg-white rounded shadow">
            <div className="col-md-3 text-center">
              <img src={MSOFFICE} alt="Loading..." style={{ width: "10rem" }} />
            </div>
            <div className="col-md-9 p-3">
              <dt className="fs-4">Basic with MS Office</dt>
              <div>
                <strong className="fs-6">Course Duration: </strong>3 Months
              </div>
              <div>
                <strong className="fs-6">Syllabus: </strong>
                Paint, Notepad, WordPad, MS Office Word, Excel, Power Point,
                Nudi, Typing Skills, Internet Concept
              </div>
              <p className="fs-4">₹ 2,000/-</p>
              <ContactTeacherBTN />
            </div>
          </div>
          <div className="row my-4 bg-white rounded shadow">
            <div className="col-md-3 text-center">
              <img src={TALLY} alt="Loading..." style={{ width: "10rem" }} />
            </div>
            <div className="col-md-9 p-3">
              <dt className="fs-4">Tally ERP 9.0 or Tally Prime</dt>
              <div>
                <strong className="fs-6">Course Duration: </strong>2 Months
              </div>
              <div>
                <strong className="fs-6">Syllabus: </strong>
                Accounting Basics, Journal Entries, Company Creation, Ledger,
                Vouchers, Trading, P and L, B/S with GST
              </div>
              <p className="fs-4">₹ 3,000/-</p>
              <ContactTeacherBTN />
            </div>
          </div>
          <div className="row my-4 bg-white rounded shadow">
            <div className="col-md-3 text-center">
              <img src={DCA} alt="Loading..." style={{ width: "10rem" }} />
            </div>
            <div className="col-md-9 p-3">
              <dt className="fs-4">DIPLOMA IN COMPUTER APPLICATION</dt>
              <div>
                <strong className="fs-6">Course Duration: </strong>6 Months
              </div>
              <div>
                <strong className="fs-6">Syllabus: </strong>
                COMPUTER BASIC WITH DESK TOP PUBLISHING
              </div>
              <p className="fs-4">₹ 3,000/-</p>
              <ContactTeacherBTN />
            </div>
          </div>
          <div className="row my-4 bg-white rounded shadow">
            <div className="col-md-3 text-center">
              <img src={PGDCA} alt="Loading..." style={{ width: "10rem" }} />
            </div>
            <div className="col-md-9 p-3">
              <dt className="fs-4">
                Post Graduation Diploma in Computer Applications
              </dt>
              <div>
                <strong className="fs-6">Course Duration: </strong>1 Year
              </div>
              <div>
                <strong className="fs-6">Syllabus: </strong>
                DOS, MS Office, Nudi, Tally ERP 9.0, DTP, Internet Concepts, Web
                Designing, C Language, C++, VB 6.0
              </div>
              <p className="fs-4">₹ 8,000/-</p>
              <ContactTeacherBTN />
            </div>
          </div>
          <div className="row my-4 bg-white rounded shadow">
            <div className="col-md-3 text-center">
              <img src={DCTTC} alt="Loading..." style={{ width: "10rem" }} />
            </div>
            <div className="col-md-9 p-3">
              <dt className="fs-4">
                Diploma in Computer Teacher Training Course
              </dt>
              <div>
                <strong className="fs-6">Course Duration: </strong>1 Year
              </div>
              <div>
                <strong className="fs-6">Syllabus: </strong>
                DOS, MS Office, Tally ERP 9.0, DTP, C Language, Internet
                Concepts
              </div>
              <p className="fs-4">₹ 5,000/-</p>
              <ContactTeacherBTN />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
