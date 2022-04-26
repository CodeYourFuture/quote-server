import React, { useEffect, useState } from "react";

const ShowQuotes = () => {
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    allQuotes.length === 0 &&
      fetch("https://peaceful-aback-drive.glitch.me/quotes")
        .then((res) => res.json())
        .then((data) => setAllQuotes(data));
  }, [allQuotes]);

  return <div></div>;
};

export default ShowQuotes;
