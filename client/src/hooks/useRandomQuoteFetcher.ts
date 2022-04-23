import { useState, useEffect } from "react";
import Quote from "../entities/Quote";

const API_URL = process.env.API_URL || "http://localhost:4002"

function useRandomQuoteFetcher (searchTrigger:boolean) {
    const [quote, setQuote] = useState<Quote | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    console.log(`${API_URL}/api/quotes/random`)
    useEffect(() => {
        fetch(`${API_URL}/api/quotes/random`)
            .then(res => res.json())
            .then(res => {
                setQuote(res);
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