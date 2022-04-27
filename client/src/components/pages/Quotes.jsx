import React from "react";
import Random from "./Random";
const Quotes = ({ allData }) => {
  return (
    <>
      {allData.map((item) => {
        return <Random random={item}></Random>;
      })}
    </>
  );
};

export default Quotes;
