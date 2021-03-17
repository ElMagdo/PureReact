import React from 'react';
import ReactDOM from 'react-dom';

function ErrorBox() {
    return (
        <div className="err-box">
            <i className="fa fa-star"/>
            Wait for the ERROR (@-@)
        </div>
    );
}

ReactDOM.render(<ErrorBox/>, document.querySelector("#root"));