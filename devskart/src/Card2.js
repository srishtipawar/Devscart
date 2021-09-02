import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div
      className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
      id="cards_landscape_wrap-2"
    >
      <div class="card-flyer" style={{ height: 430 }}>
        <div class="image-box">
          <img
            class="card-img-top"
            src={props.src}
            alt="Card"
            height="200px"
            style={{ height: 230 }}
          />
        </div>
        <div class="card-body text-container">
          <h5 class="card-title text-start">{props.title}</h5>
          <p class="card-text text-start">
            <h4>
              {props.price} <span>{props.cutprice}</span>
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
                img2: props.img2,
                img3: props.img3,
                img4: props.img4,
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
