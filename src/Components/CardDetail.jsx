import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../Data"

import "../Styles/Details.css";

const CardDetail = () => {
  const { id } = useParams();
  const card = cardData.find((card) => String(card.id) === id); // safer string comparison

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!card) return <h2>Tour not found</h2>;

  return (
    <div className="Details_page" data-aos="fade-down">
      <img
        src={card.image}
        alt={card.title}
        className="img-fluid mb-5"
      
      />
      <h1 className="Detail_Title" data-aos="fade-down">{card.title}</h1>
      <p className="Detail_Para" data-aos="fade-down">{card.description}</p>

      <h3 className="Tour_plan_Title" data-aos="fade-down"> Tour Plans</h3>
      <ul className="list-group" data-aos="fade-down">
        {card.itenary.map((item, index) => (
          <li key={index} className="list-group-item details_itenary">
            <strong className="Details_day">{item.day}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDetail;
