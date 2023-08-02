import './Format.css';

function Format({ leftContent, rightContent }) {
    return (
        <div className="flex-container">
            <div className="Format-container">
                <div className="f-left">{leftContent}</div>
                <div className="f-right">{rightContent}</div>
            </div>
        </div>
    );
}

export default Format;
