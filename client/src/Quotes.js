import React, { useState, useEffect } from 'react';
import AllQuotes from './AllQuotes';

const Quotes = () => {
  const URL = "http://localhost:5000/quotes";

  const [state, setState] = useState({
    status: 'loading',
    quotes: null,
    error: null,
  });

  useEffect(() => {
    fetch(URL)
      .then(
        response => response.json(),
        () => {
          return {
            status: 'loading',
            quotes: null,
            error: 'Unable to fetch!',
          };
        }
      )
      .then(result => {
        setState({
          status: 'complete',
          quotes: result,
          error: result.error,
        });
      });
  }, []);

  if (state.error) {
    return (
      <div>
        <h1>{state.error}</h1>
      </div>
    );
  } else if (state.status === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <AllQuotes quotes={state.quotes} />;
        </div>
      </div>
    );
  }
};

export default Quotes
