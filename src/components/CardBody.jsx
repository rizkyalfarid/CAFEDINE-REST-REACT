import React from "react";

function CardBody ({title, description}) {
  return (
    <div className="card-body">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default CardBody;