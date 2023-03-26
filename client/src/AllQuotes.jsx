import { useState, useEffect } from "react";

function AllQuotes() {
  const [allQuotes, setAllQuotes] = useState([]);

  const getAllQuotes = () => {
    fetch("https://react-full-stack-ebb3.onrender.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        setAllQuotes(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllQuotes();
  }, []);

  return (
    <div className="quote-author">
      {allQuotes.map((item) => (
        <section key={item.id} className="each-quote">
          <p>{item.quote}</p>
          <p>~ {item.author}</p>
        </section>
      ))}
    </div>
  );
}

export default AllQuotes;
