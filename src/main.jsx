import React from "react";
import { createRoot } from 'react-dom/client';
import SubheaderRestaurant from "./components/SubheadRest";
import HeaderRestaurant from "./components/HeaderRest";
import CardContainer from "./components/CardContainer";
import './style/main.css'


function RestaurantApp() {
  const forSubhead = "About Cafe Dine";
  const forHead = "We Are A Modern Restaurant In The Center Of The City";
  return (
    <div className="restaurant-app">
      <SubheaderRestaurant subheader={forSubhead}/>
      <HeaderRestaurant header={forHead}/>
      <CardContainer/>
    </div>  
  )
}

const root = document.getElementById('root');
const container = createRoot(root);
container.render(<RestaurantApp/>);