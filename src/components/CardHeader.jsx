import React from "react";

function CardHeader ({imageUrl}) {
  return (
    <div className="card-header">
      <img src={imageUrl} alt="foods image"/>
    </div>
  )
}

export default CardHeader;