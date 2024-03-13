import React from "react";
import CardList from "./CardList";
import { datafoods } from "../utils/data";

function CardContainer () {
  const foods = datafoods();
  return (
    <div className="card-container">
      {
        foods.map(food => (
          <CardList title={food.title}
          imageUrl={food.imageUrl}
          description={food.description}
          key={food.id}
          ></CardList>
        ))
      }
    </div>
  )
  
}

export default CardContainer;