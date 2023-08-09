import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} alt="Steak and veg" />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-detail">{props.detail}</p>
      </div>
      <button className="class-btn">View Recipe</button>
    </div>
  );
}
