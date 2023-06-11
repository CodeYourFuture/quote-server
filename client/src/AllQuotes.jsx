import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function AllQuotes() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllQuotes = () => {
    fetch("https://react-full-stack-ebb3.onrender.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        setAllQuotes(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllQuotes();
  }, []);

  return (
    <div className="quote-author">
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
        <aside>
          {allQuotes.map((item) => (
            <section key={item.id} className="each-quote">
              <p>{item.quote}</p>
              <p>~ {item.author}</p>
            </section>
          ))}
        </aside>
      )}
    </div>
  );
}

export default AllQuotes;
