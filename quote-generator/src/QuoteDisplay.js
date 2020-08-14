import React,{useEffect, useState} from 'react'; 
import Button from './Button.js'


function QuoteDisplay(){

    const [quotes, setQuotes] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    
    

    function onClickButton(status){ 
        setIsClicked(status);                    
    }

    
    
    useEffect(()=>{      

        
        const proxy ="https://cors-anywhere.herokuapp.com/";
        const url = "https://farhana-quote-generator.glitch.me/quotes/random";
        fetch(proxy + url)
        .then((res) => res.json())
        .then((data) => {
            setQuotes(data);                       
        })
        setIsClicked(false);

        
        
    },[isClicked])
    
    

    return(
        <div className="image">
        <div className="quote">
        <p> {quotes.quote}</p>
        <p> {quotes.author}</p>
        </div>
        <Button onClickButton = {onClickButton} isClicked = {isClicked} />
        </div>
    )
    

}

export default QuoteDisplay;