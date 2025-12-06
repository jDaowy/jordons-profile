import "./FirstPage.css";
import IntroContent from "../IntroContent/IntroContent";
import GitStuff from "../GitStuff/GitStuff";
import CharacterScreen from "../CharacterScreen/CharacterScreen";
import LanguageLens from "../LanguageLens/LanguageLens";

function FirstPage({ currentState, setCurrentState }) {
  return (
    <div className="page-container">
      <div className="content">
        {currentState === 0 && <IntroContent />}
        {currentState === 1 && <LanguageLens />}
        {currentState === 2 && <GitStuff userName="jDaowy" />}
        {currentState === 3 && <CharacterScreen />}
      </div>
    </div>
  );
}

export default FirstPage;
