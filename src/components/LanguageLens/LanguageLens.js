import "./LanguageLens.css";

function LanguageLens() {
  const vertexLink = "https://pdf-translator-ea570.web.app/";

  return (
    <div className="lens-container">
      <img
        src="languageLens.png"
        alt="app screenshot"
        className="lens-img"
      ></img>
      <div className="vertex-text lens-text">
        <div className="lens-grad">
          <h1>LanguageLens</h1>
        </div>
        <p>
          Learning a new language through real-world materials like PDFs can be
          challenging. My tool simplifies the process by letting you easily
          select and translate text passages from any PDF using Google Gemini
          LLMs.
        </p>
        <strong className="strongbox">
          <a
            className="v-link"
            href={vertexLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here To Go To The App
          </a>
        </strong>
      </div>
    </div>
  );
}

export default LanguageLens;
