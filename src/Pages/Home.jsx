import React from "react";
import Banner from "../Components/Banner";
import "../Styles/Home.css";
import { cardData } from "../Data";
import TourCard from "../Components/TourCard";
import OwlSlider from "../Components/OwlSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* popular section */}
      <section
        id="Popular_Tour"
        className="container-fluid pt-section  popularSection font_family"
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
              to="/TourPackage"
              className="page-section-link btn btn-outline-dark"
            >
              View All<i className="fas fa-chevron-right ms-1"></i>
            </Link>
          </div>
        </div>

        {/* card row */}
        <div className="row card-items mt-5">
          {cardData.slice(0, 6).map((card) => (
            <TourCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section
        id="Destinations"
        className="container-fluid pt-section  Popular_Destination"
      >
        <div className="page-section-header">
          <h2 className="page-section-title">Popular Destinations </h2>
          <p className="page-section-desc mb-0">
            Explore our popular destinations{" "}
          </p>
          {/* <Link
            to="/popular-destinations"
            className="page-section-link btn btn-outline-dark "
          >
            View All<i className="fas fa-chevron-right ms-1"></i>
          </Link> */}
        </div>
        {/* owl carousel */}
        <div className="owl_slider ">
          <OwlSlider />
        </div>
      </section>
      {/* about section */}
      <section id="About" className="container-fluid   page-section">
        <div className="entry-content">
          <h2>About Travelinds</h2>
          <p>
            At Travelinds, <strong>we bring over 20 years of experience</strong>  in the travel
            and tourism industry, delivering exceptional service and
            unforgettable travel experiences to our valued clients. What sets us
            apart is our unwavering commitment to customer satisfaction-every
            journey we curate is tailored with care, precision, and a personal
            touch.
          </p>
          <p>
            We understand that every traveller is unique, and so are their
            dreams. That’s why we specialize in crafting customized holiday
            packages that suit individual preferences, whether it’s a romantic
            honeymoon, a relaxing houseboat cruise in Alleppey, or an
            adventurous group tour. Our wide network of trusted
            partners-including hotels, resorts, homestays, and tour
            drivers-ensures you receive the best deals and services, every step
            of the way.
          </p>
          <p>
            Our dedicated team of travel experts are available <strong>24/7 to support</strong> 
            you before, during, and even after your trip. We don’t just plan
            vacations-we create meaningful memories. From the moment you reach
            out to us, to the time you return home, our mission is to make your
            journey seamless, safe, and filled with joy.
          </p>
          <p>
            Travelinds is more than a travel service provider-we’re your trusted
            companion in exploring the beauty and culture of India, one
            unforgettable trip at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
