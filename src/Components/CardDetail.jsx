import React from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../Data"

import "../Styles/Details.css";

const CardDetail = () => {
  const { id } = useParams();
  const card = cardData.find((card) => String(card.id) === id); // safer string comparison

  if (!card) return <h2>Tour not found</h2>;

  return (
    <div className="Details_page">
      <img
        src={card.image}
        alt={card.title}
        className="img-fluid mb-5"

      />
      <h1 className="Detail_Title">{card.title}</h1>
      <p className="Detail_Para">{card.description}</p>

      <h3 className="Tour_plan_Title"> Tour Plans</h3>
      <ul className="list-group">
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
