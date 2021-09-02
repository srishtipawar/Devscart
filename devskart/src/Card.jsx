import React from "react";
import "./Courses.css";

import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div
      className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
      id="cards_landscape_wrap-2"
    >
      <div className="card-flyer">
        <div className="image-box">
          <img
            className="card-img-top"
            src={props.src}
            alt="Card"
            height="200px"
          />
        </div>
        <div className="card-body text-container">
          <h5 className="card-title text-start">{props.title}</h5>
          <p className="card-text text-start">
            {props.desc}
            <h4>
              {props.price} <span className="span">{props.cutprice}</span>
            </h4>
            <h3>{props.rating}</h3>
          </p>

          <Link
            onClick={() => {
              props.setProduct({
                price: props.price,
                name: props.title,
                rating: props.rating,
                desc: props.desc,
                cutprice: props.cutprice,
                img: props.src,
                type: props.type,
              });
            }}
            to="/product"
            rel="noopener noreferrer"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
