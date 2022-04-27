import React, { useState, useEffect } from "react";
import Quotes from "./Quotes";
import Random from "./Random";
import "../../styles/random.css";
import Footer from "./Footer";
const Home = () => {
  const [allData, setAllData] = useState([]);
  const [random, setRandom] = useState("x");
  const [choose, setChoose] = useState(true);

  useEffect(() => {
    allData.length === 0 &&
      fetch("https://ali-jahankah-quote-server.glitch.me/quotes")
        .then((res) => res.json())
        .then((data) => setAllData(data));
  }, []);
  useEffect(() => {
    choose === true &&
      fetch("https://ali-jahankah-quote-server.glitch.me/quotes/random")
        .then((res) => res.json())
        .then((data) => setRandom(data));
  }, [choose]);
  return (
    <>
      <article className="container">
        <button className="quote_btn" onClick={() => setChoose(!choose)}>
          {choose ? "See all the quotes" : "See a random quote"}
        </button>
        {choose ? (
          <div className="single_quote_div">
            <Random random={random}></Random>
          </div>
        ) : (
          <Quotes allData={allData}></Quotes>
        )}
      </article>
      <Footer></Footer>
    </>
  );
};

export default Home;
