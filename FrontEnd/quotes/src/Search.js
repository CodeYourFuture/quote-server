import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleChanges = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== "") {
      fetch(
        `https://junita-quote-server.glitch.me/quotes//search?term=${inputValue}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setList(data);
        });
    }
  };

  return (
    <div className="search">
      <div>
        <p className="search_title">Search your favourite Quotes</p>
        <input
          className="search_input"
          onChange={handleChanges}
          id="search"
          type="search"
          placeholder="Search..."
        />
      </div>

      <div className="list">
        {list.length > 0 &&
          inputValue !== "" &&
          list.map((quote) => {
            return (
              <li key={quote.id}>
                <h4>{quote.quote}</h4>
                <p>{quote.author}</p>
                <p></p>
              </li>
            );
          })}
      </div>
    </div>
  );
};
export default SearchBar;
