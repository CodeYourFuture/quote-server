import { useState, useEffect } from "react";

function SearchArea() {
  const [input, setInput] = useState("");
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSearch(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    fetch(
      `https://react-full-stack-ebb3.onrender.com/quotes/search?term=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [input]);

  return (
    <section className="search-area">
      <aside className="search">
        <label>Search quotes</label>
        <span> </span>
        <input
          type="text"
          value={input}
          onChange={handleSearch}
          placeholder="Type a word or author"
        />
      </aside>
      {loading ? (
        "Please wait while we load quotes"
      ) : (
        <aside className="search-results">
          {input
            ? quotes.map((eachQuote) => (
                <div key={eachQuote.id}>
                  <p>{eachQuote.quote}</p>
                  <p>~ {eachQuote.author}</p>
                </div>
              ))
            : null}
        </aside>
      )}
    </section>
  );
}

export default SearchArea;
