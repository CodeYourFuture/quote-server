import { useState, useEffect } from "react"

const CardWithQuotes = () => {
    const [data, setData] = useState({ quote: "Hello", author: "Albert Einstein" })

    useEffect(() => {
        FetchData()
    }, []);

    const FetchData = () => {
        fetch("https://olha-quote-server.glitch.me/quotes/random")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }
    const handleClick = () => {
        FetchData()
    }

    return (
        <div className="card">
            <p className="quote">Quote {data.quote}</p>
            <p>autor: {data.author}</p>
            <button onClick={handleClick}>Next Quote</button>
        </div>
    )
}

export default CardWithQuotes