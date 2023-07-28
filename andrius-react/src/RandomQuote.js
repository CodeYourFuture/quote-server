import { useEffect, useState } from "react";
const RandomQuote = () => {
  const [newData, setNewData] = useState({
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  });
  useEffect(() => {
    FetchQuote();
  }, []);
  const FetchQuote = async () => {
    try {
      let allQuotes = await fetch(
        "https://andrius-quote-server.glitch.me/quotes/random"
      );
      let data = await allQuotes.json();
      setNewData(data);
      console.log(newData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="quote">
      <h2>{newData.quote}</h2>
      <p>{newData.author}</p>
      <button onClick={FetchQuote}>NEW QUOTE</button>
    </div>
  );
};
export default RandomQuote;
