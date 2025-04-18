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
            {/* <div className="view_all_btn">
               <a href="#" class="page-section-link btn btn-outline-dark ">
                View All<i class="fas fa-chevron-right ms-1"></i></a>
            </div> */}
          </div>
          
        </div>
        {/* card row */}
        <div className="row card-items mt-5">
          {
            cardData.map((card)=> (
              <TourCard key={card.id} {...card} />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Home;
