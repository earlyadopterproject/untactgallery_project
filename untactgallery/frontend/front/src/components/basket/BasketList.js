import React from "react";
import "./BasketList.css";
import Card from "./Card.js";
import Total from "./Total.js";
import axios from "axios";

axios
  .get("http://localhost:10002/api/basket/show")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

function BasketList() {
  return (
    <div>
      <div className="Title">
        <h1>장바구니</h1>
      </div>
      <Card />
      <Card />
      <Total />
    </div>
  );
}

export default BasketList;
