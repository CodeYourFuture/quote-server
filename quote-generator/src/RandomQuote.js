import { useState, useEffect } from "react";

const RandomQuote = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    const handleClick = () => {
        getRandomQuote();
    };

    useEffect(()=>{
        getRandomQuote();
    }, []);

    const getRandomQuote = ()=>{
        fetch('https://quotes-server-by-tony.glitch.me/quotes/random')
        .then((response)=> response.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => console.log (error));
    };
    return (
        <div className="all-quote">
            {loading? ('Loading Quote') : (
                <section className="quote-container">
                    <p>{data.quote}</p>
                    <span>{data.author} </span>
                </section>
            )}
                <section>
                    <button onClick={handleClick} className='button'>New Quote
                    </button>
                </section>
        </div>
    );
};


export default RandomQuote;


