import React from "react";

const Quote = ({ quote }) => {
  return (
    <div>
      <h1>" {quote.quote} "</h1>
      <h2>{quote.author}</h2>
    </div>
  );
};

export default Quote;
