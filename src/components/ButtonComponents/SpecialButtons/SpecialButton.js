import React from "react";
// import { tsPropertySignature } from "@babel/types";

const SpecialButton = props => {
  const handleClick = () => {
    props.setSpecial(props.button);
  }
  return (
  /* Display a button element rendering the data being passed down from the parent container on props */
    <button onClick={ handleClick } className="special">{props.button}</button>
  );
};

export default SpecialButton;