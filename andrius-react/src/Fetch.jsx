import { useEffect ,useState} from 'react';
function FetchData(){
  const [data, setData] = useState(null)
  
 const  FetchQuote=async()=> {
    let quotes = await fetch("https://andrius-quote-server.glitch.me/quotes");
    const datax = await quotes.json()
    setData(datax)
    
  }
  
  useEffect(()=>{FetchQuote()},[]);
return (<div>
  <ul>
  {data.map((oneQuote)=>{
    <li>{oneQuote.qoute}</li>
  })}
  </ul>
</div>)
}


export default FetchData;
