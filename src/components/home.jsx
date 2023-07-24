import React, { useEffect } from "react";

import ClassRoomBG from "../assets/banner1.jpg";
import CARD1 from '../assets/card1.png';
import CARD2 from '../assets/card2.png';
import Typed from "typed.js";

const Header = () => {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "RS-CIT",
        "Tally ERP 9.0",
        "Basic with MS Office",
        "Diploma in Computer Application",
        "Post Graduation Diploma in Computer Applications",
      ],
      typeSpeed: 30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="container mt-3">
      <div className="row mb-5 p-3">
        <div className="col-md-6 mb-2">
          <img src={ClassRoomBG} alt="ClassRoom" className="w-100 rounded" />
        </div>
        <div className="col-md-6 my-auto">
          <p className="h1">
            Welcome to
            <span className="text-primary"> Chankya Coaching Classes</span>
          </p>
          <p className="h3">We are happy to help you!</p>
          <p className="h5">
            We provide the best coaching for{" "}
            <span className="text-primary">Computer Courses</span> in{" "}
            <span className="text-primary">Bundi</span>.
          </p>
          <p className="h3">
            Enroll now in <span className="text-danger">New Batches</span>
          </p>

          <span className="h4 text-secondary" id="element"></span>
        </div>
      </div>
      <hr className="text-secondary" />

      <div className="text-center my-3 row">
        <h1 className="text-center my-4">OUR SPECIALITIES</h1>
        <div className="col-md-3">
          <div className="card mb-3" style={{ minWidth: '12rem' }}>
            <img src={CARD1} className="card-img-top mx-auto" alt="..." style={{ width: '10rem' }} />
            <div className="card-body">
              <p className="card-text text-center">
                Recognised by Rajasthan Govt and RKCL
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card mb-3" style={{ minWidth: '12rem' }}>
            <img src={CARD2} className="card-img-top mx-auto" alt="..." style={{ width: '10rem' }} />
            <div className="card-body">
              <p className="card-text text-center">
                Planned Execution of Education
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3" style={{ minWidth: '12rem' }}>
            <i className="bi bi-buildings-fill text-center text-primary" style={{ fontSize: '7rem' }}></i>
            <div className="card-body">
              <p className="card-text text-center">
                Good Infrastructure
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3" style={{ minWidth: '12rem' }}>
            <i className="bi bi-pc-display text-center text-warning" style={{ fontSize: '7rem' }}></i>
            <div className="card-body">
              <p className="card-text text-center">
                Well Equipped Labs
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center">ABOUT US</h3>
      <div className="text-center">
        <span className="text-primary">Chankya Coaching Classes</span> is a
        leading coaching institute in{" "}
        <span className="text-primary">Bundi</span> for
        <span className="text-primary"> Computer Courses</span>. We provide
        coaching for <span className="text-primary">RS-CIT</span>,{" "}
        <span className="text-primary">Tally ERP 9.0</span>,{" "}
        <span className="text-primary">Basic with MS Office</span>,{" "}
        <span className="text-primary">Diploma in Computer Application</span>,{" "}
        <span className="text-primary">
          Post Graduation Diploma in Computer Applications
        </span>
        . We have a team of highly qualified and experienced faculties, who
        provide the best coaching to the students. We have a good infrastructure
        and a good environment for the students. We also provide the best
        facilities to the students like
        <span className="text-primary"> Free Study Material, </span> 
        <span className="text-primary">Free Online Test Series.</span> 
      </div>
      <br />
      <p className="text-center">
        We started our journey in 2012 and ever since, we have ensured that the
        customer remains at the center of our business operations and
        philosophy. We are located in a favourable neighbourhood, exactly at{" "}
        <br />
        <span className="text-success">
          Chankaya Coaching Classes - Bundi, College Road, in Front of Police
          Kotwali, New Colony - 323001
        </span>
      </p>
    </div>
  );
};

export default Header;
