import "./Main.css";
import Sidenav from "../Sidenav/Sidenav";
import { useState, useEffect } from "react";
import FirstPage from "../FirstPage/FirstPage";
import Arrows from "../Arrows/Arrows";
import { isMobileScreen } from "../Utils/Utils";
import IntroContent from "../IntroContent/IntroContent";
import VertexAI from "../VertexAI/VertexAI";
import GitStuff from "../GitStuff/GitStuff";
import CharacterScreen from "../CharacterScreen/CharacterScreen";
import Streamlit from "../Streamlit/Streamlit";
import LanguageLens from "../LanguageLens/LanguageLens";

function Main() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [currentState, setCurrentState] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileScreen());

    // Optional: Add event listener to re-check on window resize
    const handleResize = () => setIsMobile(isMobileScreen());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Main">
      <div
        className={`container ${isSidebarExpanded ? "" : "sidebar-collapsed"}`}
      >
        <div className={`sidebar ${isSidebarExpanded ? "" : "collapsed"}`}>
          {!isMobile ? (
            <div
              className={`mobile-display ${
                isSidebarExpanded ? "" : "collapsed"
              }`}
            >
              <Sidenav
                currentState={currentState}
                setCurrentState={setCurrentState}
                isExpanded={isSidebarExpanded}
                setIsExpanded={setIsSidebarExpanded}
              />
              <div class="title">
                <div class="logo">
                  <b>
                    Jord<span>o</span>n's Portfo<span>l</span>io
                  </b>
                </div>
              </div>
              <div class="page">
                <FirstPage
                  currentState={currentState}
                  setCurrentState={setCurrentState}
                />
              </div>
              <div class="arrows">
                <Arrows
                  currentState={currentState}
                  setCurrentState={setCurrentState}
                />
              </div>
            </div> //end mobile-display
          ) : (
            <div className="phone">
              <div class="logo">
                <b>
                  Jord<span>o</span>n's Portfo<span>l</span>io
                </b>
              </div>
              <IntroContent className="phone-intro" />
              <LanguageLens />
              <VertexAI />
              <GitStuff userName="jDaowy" />
              <CharacterScreen isMobile={isMobile} />
              <Streamlit />
            </div> //end phone
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
