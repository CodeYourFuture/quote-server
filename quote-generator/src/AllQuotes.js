import { useState, useEffect } from "react";

function AllQuotes(){
    const [quotes, setQuotes] =useState([]);
    const [loading, setLoading] = useState(true);

    const generator = () => {
    fetch('https://quotes-server-by-tony.glitch.me/quotes')
    .then((response) =>{
      return response.json();
    })
    .then((data)=> {
      setQuotes(data);
      setLoading(false);
    })
    .catch((error) => console.log(error));
  };

  useEffect(()=>{
    generator();
  },[]);
  
  return (
    <div className="all-quote">
    {loading? ('Loading Now...') : (
        <section>
        {quotes.map((item) =>{
        return(
          <div key={item} className='quote-container'>
            <p className='quote'>{item.quote}</p>
            <p className="author">{item.author}</p>
          </div>
        );
      })}
      </section>
    )}
      
      
    </div>
  );

}

export default AllQuotes;
