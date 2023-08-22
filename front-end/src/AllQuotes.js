import { useEffect, useState } from "react";

export const AllQuotes = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4444/quotes`)
      // fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="quotes-wrapper">
      <h1>Quotes...</h1>
      {data?.map((item) => {
        return (
          <div className="quote-content">
            <p>"{item.quote}"</p>
            <p>Author: {item.author}</p>
          </div>
        );
      })}
    </div>
  );
};
