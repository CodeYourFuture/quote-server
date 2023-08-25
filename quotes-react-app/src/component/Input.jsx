import React from "react";

const Input = ({onChangeHandler, placeholder}) => {
    return <input onChange={e => onChangeHandler(e.target.value)} placeholder={placeholder} />;
}

export default Input;

