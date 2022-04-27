import React from "react";
import "../../styles/random.css";
const Random = ({ random }) => {
  return (
    <div className="quote_div">
      <h3>{random.quote}</h3>
      <hr />
      <h6>{random.author}</h6>
    </div>
  );
};

export default Random;
