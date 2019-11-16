import React from "react";

const OperatorButton = props => {
  const handleClick = () => {
    props.setOperator(props.button.char);
  }
  return (
      /* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick={ handleClick } className="operator">{props.button.char}</button>
  )
};

export default OperatorButton;
