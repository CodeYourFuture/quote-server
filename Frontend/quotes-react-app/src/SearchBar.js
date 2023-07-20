import { useEffect, useState } from "react"

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("")
    const handleChanges = (e) => {
        setInputValue(e.target.value)
    }

    const [listOfQuotes, setListOfQuotes] = useState([]);

    useEffect(() => {
        if (inputValue !== "") {
            fetch(`https://olha-quote-server.glitch.me/quotes/search?terms=${inputValue}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setListOfQuotes(data)
                    console.log(listOfQuotes)
                })
        }
    }, [inputValue])


    return (
        <div className="search-container">
            <div className="search-input">
                <p className="input-lable">Search the Quotes</p>
                <input onChange={handleChanges} id="search" type="search" placeholder="Search..." autoFocus required />
            </div>

            <div className="list-of-quotes-container">
                {
                    listOfQuotes.length > 0 && inputValue !== "" && listOfQuotes.map(quote => {
                        return (
                            <li key={quote.id} className="one-quote">
                                <h4>{quote.quote}</h4>
                                <p >{quote.author}</p>
                                <p></p>
                            </li>

                        )
                    })
                }


            </div>
        </div>
    )
}
export default SearchBar