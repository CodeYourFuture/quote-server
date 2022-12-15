import React, { useState, useEffect } from "react";
import "../App.css";


const Search = () => {
  const [searchQuote, setSearchQuote] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  useEffect(() => {
    if (searchTerm && search) {
      fetch(`/quotes/search?term=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSearchQuote(data);
          setSearch(false);
        });
    }
  }, [searchTerm, search]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setSearch(true);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} />
      <button onClick={() => setSearch(true)}>Search</button>
      {searchQuote.map((quote) => (
        <div className={!search ? "search" : "hide"}>
          <div className="quote-search">
            <p>
              <span>&#8220;</span>
              {quote.quote}
            </p>
            <p>{quote.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
