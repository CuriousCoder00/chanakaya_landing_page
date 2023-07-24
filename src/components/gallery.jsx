import React from "react";
import IMG1 from "../assets/gallery-1.png";
import IMG2 from "../assets/gallery-2.png";
import IMG3 from "../assets/gallery-3.png";
import IMG4 from "../assets/gallery-4.jpg";
import IMG5 from "../assets/gallery-5.png";
import IMG6 from "../assets/gallery-14png.png";
import IMG7 from "../assets/logo.png";
const Gallery = () => {
  return (
    <>
      <div className="container-fluid bg-info text-center fs-4 text-light py-2">
        <strong>GALLERY</strong>
      </div>
      <div className="container rounded card bg-light shadow p-3 my-5">
        <div className="row mx-auto">
          <div className="col-sm-4">
            <img src={IMG1} alt="" className="w-100 shadow" />
          </div>
          <div className="col-sm-5">
            <img src={IMG2} alt="" className= "w-100 shadow" />
          </div>
          <div className="col-sm-2">
            <img src={IMG4} alt="" className="w-100 shadow" />
          </div>
          <div className="col-md-1">
            <img src={IMG3} alt="" className="w-100 shadow" />
          </div>
        </div>
        <div className="row justify-content-center mx-auto mt-3">
          <div className="col-md-2">
            <div className="row">
              <img src={IMG7} alt="" className="w-100 shadow" />
            </div>
            <div className="row">
              <img src={IMG7} alt="" className="w-100 shadow" />
            </div>
            <div className="row">
              <img src={IMG7} alt="" className="w-100 shadow" />
            </div>
          </div>
          <div className="col-md-1">
            <img src={IMG3} alt="" className="w-100 shadow" />
          </div>
          <div className="col-md-1">
            <img src={IMG6} alt="" className="w-100 shadow" />
          </div>
          <div className="col-md-4">
            <img src={IMG5} alt="" className="w-100 shadow" />
          </div>
          <div className="col-md-1">
            <img src={IMG6} alt="" className="w-100 shadow" />
          </div>
          <div className="col-md-1">
            <img src={IMG3} alt="" className="w-100 shadow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
