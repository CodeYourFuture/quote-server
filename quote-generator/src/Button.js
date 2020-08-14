import React from 'react';

function Button({ onClickButton, isClicked }){
        

  function handleOnClick(event){
   
   onClickButton(event.target.value);
  }
        return(
       <button id="btn" value="true" onClick={handleOnClick}> New Quote</button>
        )

}

export default Button;