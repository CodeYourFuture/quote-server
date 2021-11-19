import React,{ useState, useEffect } from 'react'
import './App.css';





function Quotes() {

    const [quotes, setQuotes] = useState([]);


useEffect(() => {
   fetch('http://localhost:5000/quotes')
   .then(res => res.json())
   .then(data => {
    console.log(data)
    setQuotes(data)
   })
}, [])

    return (
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center  bg-light  m-2">
    <a href="/"> <button className="btn btn-link text-info ">HOME PAGE</button></a>
       <h2 style={{width:"90%" }} className="d-flex justify-content-center text-info"> There are {quotes.length} Quotes.</h2>
        {quotes.map((quote, i) => (
          <div key={i} className="card m-2 d-flex align-items-center justify-content-center quote-cart " style={{ width: "30%", height:"250px" }}>
            <div className="card-body flex-column d-flex align-items-center justify-content-evenly ">
              <p className="card-text">"{quote.quote}"</p>
              <h3 className="card-title">{quote.author}</h3>
            </div>
          </div>
        ))}
      
   
      
      
      </div>

    );
}

export default Quotes
