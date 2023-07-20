import React from "react";

const Button = ({getRandomQuote}) => {
    return <button onClick={getRandomQuote} >Get Random Quote</button>
}

export default Button;