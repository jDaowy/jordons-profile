import Sidenav from "./Sidenav";
import "./Main.css";
import FirstPage from "./FirstPage";
import React, { useState } from "react";

function Main() {
  const [currentState, setCurrentState] = useState(0);

  return (
    <div className="main-container">
      <Sidenav currentState={currentState} setCurrentState={setCurrentState} />
      <FirstPage
        currentState={currentState}
        setCurrentState={setCurrentState}
      />
    </div>
  );
}

export default Main;
