import './Logo.css';

function Logo({ logo }) {
    return (
        <div className="logo-flex">
            <div className="logo-grid">
                <div className="logo-display">
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <div className="logo-extra">
                </div>
            </div>
        </div>
    );
};

export default Logo;