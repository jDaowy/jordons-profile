import "./FirstPage.css";
import IntroContent from "./IntroContent";
import GitStuff from "./GitStuff";
import CharacterScreen from "./CharacterScreen";
import Streamlit from "./Streamlit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function FirstPage({ currentState, setCurrentState }) {
  const MAX_STATE = 3; // Maximum value for currentState

  const handleGoBack = () => {
    setCurrentState((prev) => Math.max(0, prev - 1));
  };

  const handleGoForward = () => {
    setCurrentState((prev) => Math.min(MAX_STATE, prev + 1));
  };

  return (
    <div className="page-container">
      <div class="logo">
        <b>
          Jord<span>o</span>n's Portfo<span>l</span>io
        </b>
      </div>
      <div className="content">
        {currentState === 0 && <IntroContent />}
        {currentState === 1 && <GitStuff userName="jDaowy" />}
        {currentState === 2 && <CharacterScreen />}
        {currentState === 3 && <Streamlit />}
      </div>

      <div className="nav-buttons">
        <FontAwesomeIcon
          className="arrow"
          icon={faArrowLeft}
          onClick={handleGoBack}
        />
        <span className="page-num">
          {currentState + 1}/{MAX_STATE + 1}
        </span>
        <FontAwesomeIcon
          className="arrow"
          icon={faArrowRight}
          onClick={handleGoForward}
        />
      </div>
    </div>
  );
}

export default FirstPage;
