// src/components/TourCard.jsx
import React from "react";
import "../Styles/TourCard.css";
import { Link } from "react-router-dom";

const TourCard = ({
  id,
  image,
  title,
  days,
  nights,
  stars,
  // includes,
  // detailsLink,
}) => {
  const filledStars = Math.round(stars);
  const emptyStars = 5 - filledStars;

  return (
    <div className="card-item-col col-12 col-sm-6 col-md-4 col-lg-4">
      <div id={`tour-card-${id}`} className="card card-item tour-card-item">
        {/* <a href={''} className="card-link"> */}
        <picture className="post-thumbnail entry-media card-image featured-media">
          <img
            src={image}
            className="img-fluid"
            alt={title}
            width="350"
            height="350"
            loading="lazy"
          />
          <div className="tour-durations">
            <ul className="list-group list-group-horizontal list-unstyled m-0 p-0">
              <li className="item list-group-item border-0 bg-transparent">
                <span className="inner d-block">
                  <i className="fas fa-cloud-sun"></i>
                  <strong className="duration">{days}</strong>
                  <span className="text">Days</span>
                </span>
              </li>
              <li className="item list-group-item border-0 bg-transparent">
                <span className="inner d-block">
                  <i className="fas fa-cloud-moon"></i>
                  <strong className="duration">{nights}</strong>
                  <span className="text">Nights</span>
                </span>
              </li>
            </ul>
          </div>
        </picture>
        {/* </a> */}

        <div className="card-body">
          <div className="star-ratings mt-0 mb-2" title={`${stars} stars`}>
            <span className="sr-only">{stars}/5</span>
            <span className="star-wrapper">
              {[...Array(filledStars)].map((_, i) => (
                <i key={`filled-${i}`} className="fas fa-star"></i>
              ))}
              {[...Array(emptyStars)].map((_, i) => (
                <i key={`empty-${i}`} className="far fa-star"></i>
              ))}
            </span>
          </div>
          <h3 className="card-title m-0">5 Nights 6 Days Kerala Package</h3>
        </div>
        <div className="card-footer">
          <hr className="mt-0" />
          {/* <div className="tour-includes">
            <h4 className="title">Includes</h4>
            <ul className="list-group list-group-horizontal bg-transparent list-unstyled m-0 p-0">
              {includes.map((item, index) => (
                <li
                  key={index}
                  className="item col-print-12 list-group-item border-0 flex-fill"
                >
                  <span className="inner d-block">
                    <i className={`fas ${item.icon}`}></i>
                    <strong>{item.text}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </div> */}
          {/* <hr /> */}
          <Link
            to={`/tour/${id}`}
            className="d-block btn btn-lg btn-tour btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
