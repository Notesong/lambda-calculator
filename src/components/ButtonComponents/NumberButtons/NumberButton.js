import React from "react";

const NumberButton = props => {
  const handleClick = () => {
    if(props.firstNumComplete === false) {
      props.createFirstNum(props.button);
    } else {
      props.createSecondNum(props.button);
    }
    
    
  }
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
    <button onClick={ handleClick } className="number">{props.button}</button>
  )
};

export default NumberButton;