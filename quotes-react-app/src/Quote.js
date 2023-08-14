import React from "react";

const Quote = ({ text, author }) => {
  return (
    <div >
      <blockquote>{text}</blockquote>
      <p>- {author}</p>
    </div>
  );
};

export default Quote;
