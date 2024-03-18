import "./IntroContent.css";

function IntroContent() {
  return (
    <div className="content">
      <img src="/me.png" alt="AI Generated Me" className="me" />
      <div className="intro-text">
        <div className="gradient-container">
          <h1 className="name">Jordon-Luc Dao</h1>
        </div>

        <p className="speel">
          Fueled by green tea and a love for creative problem-solving, I turn
          lines of code into captivating web experiences. I'm always eager to
          learn new technologies and tackle exciting challenges. Let's build
          something awesome together!
        </p>
        <img
          src="/umlogo.jpg"
          alt="University of Manitoba Logo"
          className="UM"
        />
      </div>
    </div>
  );
}

export default IntroContent;
