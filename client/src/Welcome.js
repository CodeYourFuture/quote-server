import React from 'react'
import { Link } from "react-router-dom";

function Welcome() {
    return (
      <div className="d-flex flex-column  justify-content-center align-items-center text-warning welcome" style={{height:"786px"}}>
        <h1> Dilek's Quote Page! </h1>
        <div className="p-1 my-5 ">
        <Link to="/quotes/random">
          <button className="btn btn-warning m-2 text-white">Random Quote</button>
        </Link>
        <Link to="/quotes">
          <button className="btn btn-warning m-2 text-white">All Quotes</button>
        </Link>
        </div>
      </div> 
    )
}

export default Welcome
