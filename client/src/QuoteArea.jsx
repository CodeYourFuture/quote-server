import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const QuoteArea = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    getRandomQuote();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    fetch("https://react-full-stack-ebb3.onrender.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="quote-area">
      {loading ? (
        <aside>
          <FontAwesomeIcon
            icon={faSpinner}
            spinPulse
            style={{ color: "#b5afc5" }}
            className="load"
          />
          <p>Please wait while we load quotes</p>
        </aside>
      ) : (
        <aside className="quotes">
          <p>{data.quote}</p>
          <span>{data.author}</span>
        </aside>
      )}

      <aside>
        <button onClick={handleClick} className="generate">
          Regenerate Quote
        </button>
      </aside>
    </div>
  );
};

export default QuoteArea;
