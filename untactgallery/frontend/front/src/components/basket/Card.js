import React, { useState } from "react";
import "./Card.css";

function Card() {
  const [product, setProduct] = useState("Product name");
  const [artist, setArtist] = useState("Artist name");
  const [size, setSize] = useState("99x99");
  const [price, setPrice] = useState("9999");

  return (
    <div className="Outer">
      <div className="Card">
        <div className="Inner">
          <table className="Info">
            <tr>
              <td className="Image">
                <img src="" alt="" height="200px" width="200px" />
              </td>
              <td className="Product">
                <h3>{product}</h3>
                <h4>{artist}</h4>
                <p>{size}</p>
              </td>
              <td className="Price">
                <h3>₩ {price}</h3>
              </td>
            </tr>
          </table>
        </div>
        <div className="Delete">Delete</div>
      </div>
    </div>
  );
}

export default Card;
