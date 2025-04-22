import React from "react";
import Banner from "../Components/Banner";
import "../Styles/Home.css";
import { cardData } from "../Data";
import TourCard from "../Components/TourCard";
import OwlSlider from "../Components/OwlSlider";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* popular section */}
      {/* <section className="container popularSection font_family">
        <div className="popular_section_container">
          <div className="popularSectionHeading">
            <h2 className="popularSection_title">Popular Tour packages</h2>
            <p className="page-section-desc mb-0">
              Explore our popular tour packages{" "}
            </p>
          </div>
        </div>
        card row
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
      </section> */}
      <section className="container popularSection font_family">
        <div className="popular_section_container">
          <div className="popularSectionHeading d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <h2 className="popularSection_title ">
                Popular Tour packages
              </h2>
              <p className="page-section-desc mb-0">
                Explore our popular tour packages
              </p>
            </div>
            <a href="#" className="page-section-link btn btn-outline-dark">
              View All<i className="fas fa-chevron-right ms-1"></i>
            </a>
          </div>
        </div>

        {/* card row */}
        <div className="row card-items mt-5">
          {cardData.map((card) => (
            <TourCard key={card.id} {...card} />
          ))}
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
        {/* owl carousel */}
        <div className="owl_slider ">
          <OwlSlider />
        </div>
      </section>
      {/* about section */}
      <section className="container page-section">
      {/* <div className="entry-header sr-only">
        <h2 className="entry-title page-section-title mb-2 text-start">
          Funday Holidays
        </h2>
        <p className="entry-tagline mb-0">
          Top Rated Travel Agency in Kochi, Kerala.
        </p>
        <div className="post-meta-wrapper post-meta-single post-meta-single-top entry-meta">
          <ul className="post-meta list-group list-unstyled m-0 p-0 list-group-horizontal">
            <li className="item list-group-item border-0 posted-on post-date mb-2">
              <span className="screen-reader-text sr-only">Posted on:</span>
              <i className="fas fa-calendar-alt meta-icon"></i>
              <time className="entry-date published dt-published" dateTime="2023-01-18T17:26:52+05:30">
                January 18, 2023
              </time>
              <time className="entry-date updated dt-updated screen-reader-text sr-only" dateTime="2025-03-14T17:00:58+05:30">
                March 14, 2025
              </time>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="entry-content">
        <h2>Top-rated Kerala tour operator Funday Holidays; travel agency in Kochi</h2>
        <p>
          Funday Holidays, a travel agency in Kochi, Kerala considered one of the leading <strong>Kerala travel agencies</strong> is your perfect travel partner.
          We are the top-rated tours and travels in Kochi, Kerala. With 12+ years of expertise in travel and tourism Funday Holidays have emerged as one among
          Kerala’s most reputable tour operator in Kochi. Our seasoned tourism professionals are focused on giving you the experience of a lifetime.
          Whether it is planning a family vacation, a solo journey, or a business trip, Funday Holidays understands your needs and opens up the best
          possibilities for you. This is why we are one of the leading tour and travel agencies in Kerala, India.
        </p>
        <p>
          Do you love to travel around the globe and experience the world? To get away from all the noise and stress of daily life and relax is everyone’s dream.
          The changes in outlook, broadening of horizons, and most importantly, the cherish-able memories formed are a few of the benefits of traveling.
        </p>
        <p>
          But it is not easy to make a good travel plan. Not everyone enjoys planning out days, and places to visit, and calculating the amount to spend.
          For many, it will take the fun out of the whole trip. However, if you have professional help, you will find the process much more enjoyable.
        </p>
        <p>
          We offer some of the best Kerala tour packages and international tour packages that take you to the most exciting experiences of the destination.
          As a <strong>leading Kerala tour operator</strong>, we make sure to unravel all the attractions in the land for you without lighting your wallet.
          Funday Holidays also allow you to customize the package to suit your needs.
        </p>
      </div>
    </section>
    </div>
  );
};

export default Home;
