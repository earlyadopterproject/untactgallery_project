import React, { useState } from "react";
import "./Total.css";

function Total() {
  const [totalprice, setTotalprice] = useState("9999");
  return (
    <div className="Total-outer">
      <div className="Total-inner">
        <table className="Total-Info">
          <tr>
            <td className="Total-price">
              <h3>₩ {totalprice}</h3>
            </td>
            <td className="Total-button">
              <button>결제하기</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Total;
