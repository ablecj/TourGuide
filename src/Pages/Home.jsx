import React from "react";
import Banner from "../Components/Banner";
import "../Styles/Home.css";
import { cardData } from "../Data";
import TourCard from "../Components/TourCard";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* popular section */}
      <section className="container popularSection font_family">
        <div className="popular_section_container">
          <div className="popularSectionHeading">
            <h2 className="popularSection_title">Popular Tour packages</h2>
            <p className="page-section-desc mb-0">
              Explore our popular tour packages{" "}
            </p>
          </div>
        </div>
        {/* card row */}
        <div className="row card-items mt-5">
          {cardData.map((card) => (
            <TourCard key={card.id} {...card} />
          ))}
        </div>
        <div className="view_all_btn mt-5">
          <a href="#" className="page-section-link btn btn-outline-dark ">
            View All<i className="fas fa-chevron-right ms-1"></i>
          </a>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container Popular_Destination">
        <div className="page-section-header">
          <h2 className="page-section-title">Popular Destinations </h2>
          <p className="page-section-desc mb-0">
            Explore our popular destinations{" "}
          </p>
          <a
            href="https://www.fundayholidays.com/destinations/"
            className="page-section-link btn btn-outline-dark "
          >
            View All<i className="fas fa-chevron-right ms-1"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
