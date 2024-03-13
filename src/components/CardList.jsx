import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

function CardList ({imageUrl, title, description, id}) {
  return (
    <div className="card-list" key={id}>
      <CardHeader imageUrl={imageUrl}/>
      <CardBody title={title} description={description}/>
    </div>
  )
}

export default CardList;