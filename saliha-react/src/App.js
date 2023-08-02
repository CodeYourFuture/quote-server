// import React, {useState, useEffect } from 'react'

// function App() {
//   const [quote, setQuote] = useState(null);
//   async function doFetch (){
//     setQuote(undefined);
//     const res = await fetch("https://quote-server-g1vv.onrender.com");
//     const data = await res.json();
//     setQuote(data);
//   }

//   useEffect(() => {
//     (async () => {
//       await doFetch();
//     })()
//   },[]);

//   let content = "Loading..."
//   if (quote)
// {
//   content = <div>
//     <div>{quote.quote}
//   {`-"${quote.author}`}
//   </div>
//   <button onClick={doFetch}>Fetch new quote</button>
//   </div>
// }
//   return (
//     <div>
//       {content}
//     </div>
//   )
// }

// export default App;
