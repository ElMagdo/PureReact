import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

function ErrorBox({children}) {
    return (
        <div className="err-box">
            <div><i className="fa fa-warning fa-2x"/></div>
            <div>{children}</div>
        </div>
    );
}

ReactDOM.render(
<ErrorBox>
    <span>The world is ending</span>
</ErrorBox>,
document.querySelector("#root")
);