import { useState, useEffect } from "react";
import Quote from "../entities/Quote";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4002"

function useRandomQuoteFetcher (searchTrigger:boolean) {
    const [quote, setQuote] = useState<Quote | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        fetch(`${API_URL}/quotes/random`)
            .then((res)=> res.json())
            .then((data:Quote) => {
                setQuote(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [searchTrigger])
    return {quote, isLoading, error};
}

export default useRandomQuoteFetcher