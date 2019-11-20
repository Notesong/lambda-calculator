import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here. Once the state hooks are in place write some actions to hold data in state and update that data depending on what it needs to be doing. Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state. Don't forget to pass the functions (and any additional data needed) to the components as props
  const [operator, setOperator] = useState('0');
  const [special, setSpecial] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [firstNumComplete, setfirstNumComplete] = useState(false);

  // calculator logic
  function createFirstNum(button) {
    if(firstNumber === '0') {
      setFirstNumber(button);
    } else {
      setFirstNumber(firstNumber + button);
    }
  }
  function createSecondNum(button) {
    setSecondNumber(secondNumber + button);
  }

  function calculate() { 
    return null;
  }
  

  return (
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
          <div className="screen">
            <Display firstNumber={firstNumber} />
          </div>
          <div className="buttons">
            <div className="leftColumn">
              <div className="specials">
                <Specials 
                  // setSpecial = {setSpecial}
                />
              </div>
              <div className="numbers">
                <Numbers 
                 createFirstNum = {createFirstNum}
                 createSecondNum = {createSecondNum}
                 firstNumComplete = {firstNumComplete}
                />
              </div>
            </div>
            <div className="rightColumn">
              <Operators 
                // setOperator = {setOperator}
                setfirstNumComplete = {setfirstNumComplete}
              /> 
            </div>
                     
          </div>
      </div>
    </div>
  );
}

export default App;