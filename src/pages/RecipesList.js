import React from "react";
import Card from "../components/Card";

function RecipesList() {
  return (
    <div className="wrapper">
      <Card
        img="recipe-app/src/Images/rib-steak.jpg"
        title="Rib Steak served with Roast Veg"
        detail="Rich and succulent flavors of a perfectly grilled Rib Steak, accompanied by a medley of beautifully roasted seasonal vegetables"
      />
      <Card
        img="recipe-app/src/Images/chocolate-brownie.jpg"
        title="Chocolate Brownies"
        detail="Rich chocolate brownies, a delectable treat that's sure to satisfy your sweet cravings"
      />
      <Card
        img="recipe-app/src/Images/pizza.jpg"
        title="Pizza"
        detail="Crispy pizza crust adorned with vibrant Mediterranean flavors"
      />
      <Card
        img="recipe-app/src/Images/seafood-pasta.jpg"
        title="Seafood Pasta"
        detail="A delightful fusion of tender seafood and al dente pasta, elegantly tossed in a luscious sauce."
      />
      <Card
        img="recipe-app/src/Images/flapjacks.jpg"
        title="Sunshine Flapjacks"
        detail="Fluffy flapjack stack with golden honey and hearty oats infused with vibrant flavors"
      />
      <Card
        img="recipe-app/src/Images/roast-chicken.jpg"
        title="Crispy Roast Chicken"
        detail="Roast Chicken with golden skin that encases tender, succulent meat, creating a mouthwatering symphony of flavors and textures."
      />
    </div>
  );
}

export default RecipesList;
