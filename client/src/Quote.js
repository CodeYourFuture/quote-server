import React from 'react';

function Quote({quotes}) {
  return (
    <div>  
      {quotes.map(el => {
        return (
          <div style={{border: "1px solid", margin:"1rem", padding: '1rem'}}>
            <p>{el.quote}</p>
            <h5>{el.author}</h5>
          </div>  
        )        
      })
      }
    </div>
  )
}

export default Quote
