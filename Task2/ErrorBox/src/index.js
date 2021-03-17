import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

function ErrorBox() {
    return (
        <div className="err-box">
            <i className="fa fa-warning"/>
            Wait for the ERROR (@-@)
        </div>
    );
}

ReactDOM.render(<ErrorBox/>, document.querySelector("#root"));