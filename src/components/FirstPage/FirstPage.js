import "./FirstPage.css";
import IntroContent from "../IntroContent/IntroContent";
import GitStuff from "../GitStuff/GitStuff";
import CharacterScreen from "../CharacterScreen/CharacterScreen";
import Streamlit from "../Streamlit/Streamlit";
import VertexAI from "../VertexAI/VertexAI";
import LanguageLens from "../LanguageLens/LanguageLens";

function FirstPage({ currentState, setCurrentState }) {
  return (
    <div className="page-container">
      <div className="content">
        {currentState === 0 && <IntroContent />}
        {currentState === 1 && <LanguageLens />}
        {currentState === 2 && <VertexAI />}
        {currentState === 3 && <GitStuff userName="jDaowy" />}
        {currentState === 4 && <CharacterScreen />}
        {currentState === 5 && <Streamlit />}
      </div>
    </div>
  );
}

export default FirstPage;
