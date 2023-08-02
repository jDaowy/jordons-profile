import React from 'react';
import './Header.css'; // Import the CSS file for additional styling (if needed)

function Header({ logo }) {
    return (
        <div className="header-flex">
            <div className="header-grid">
                <div className="page-name">
                    <p>Jordon Luc's Portfolio</p>
                </div>
                <div className="extra">
                </div>
            </div>
        </div>
        
        //<header className='App-header'>
        //    <img src={logo} className='App-logo'  alt='logo' />
        //</header>
    );
}

export default Header;
