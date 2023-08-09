import React from "react";
import Card from "../components/Card";
import img from "../Images/img1.jpg";

function RecipesList() {
  return (
    <div className="wrapper">
      <Card
        img="recipe-app/src/Images/img1.jpg"
        title="Steak served with rost veg"
        detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, sunt."
      />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default RecipesList;
