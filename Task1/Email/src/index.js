import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Email(email) {
    return (
        <div className="email">YOUR NEW EMAIL (%^%)</div>
    );
}

let content = {
    sender: "React Newsletter",
    subject: "Issue 36",
    date: "Jul 15",
    message: "th 2016 Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme"
};

ReactDOM.render(<Email email={content}/>, document.querySelector("#root"));