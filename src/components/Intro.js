import './Intro.css'; // Import the CSS file for additional styling (if needed)

const Intro = () => {
    return (
        <div className="intro-flex">
            <div className="intro-grid">
                <div className="i-left">
                    <h1>Jordon-Luc Dao</h1>
                    <p>
                        Hello, I'm Jordon a highly motivated and skilled individual seeking to learn new things and be creative.
                        With a strong background in computer science I am eager to build things and make the world a more fun place.
                        This website was made by me using React.js and css.
                    </p>
                </div>
                <div className="i-right">
                    <img src="/images/me.png" alt="Jordon Dao" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
