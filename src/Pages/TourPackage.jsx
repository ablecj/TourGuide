import React from "react";
import { cardData } from "../Data";
import TourCard from "../Components/TourCard";
import { Link } from "react-router-dom";

const TourPackage = () => {
  return (
    <section
    //   id="Popular_Tour"
      className="container-fluid pt-5 pb-5 popularSection font_family"
    >
      <div className="popular_section_container">
        <div className="popularSectionHeading d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <h2 className="popularSection_title ">Popular Tour packages</h2>
            <p className="page-section-desc mb-0">
              Explore our popular tour packages
            </p>
          </div>
          {/* <a href="#" className="page-section-link btn btn-outline-dark">
          View All<i className="fas fa-chevron-right ms-1"></i>
        </a> */}
          <Link
            to="/"
            className="page-section-link btn btn-outline-dark"
          >
            Back<i className="fas fa-chevron-right ms-1"></i>
          </Link>
        </div>
      </div>

      {/* card row */}
      <div className="row card-items mt-5">
        {cardData.map((card) => (
          <TourCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default TourPackage;
