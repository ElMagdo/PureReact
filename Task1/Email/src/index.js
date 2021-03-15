import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';

function Email(email) {
    return (
        <div className="email"></div>
    );
}

Email.propTypes = {
    email: PropTypes.style({
        sender: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    })
}

let content = {
    sender: "React Newsletter",
    subject: "Issue 36",
    date: "Jul 15",
    message: "th 2016 Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme"
};

let Sender = ({from}) => <div className="sender">{from}</div>;

ReactDOM.render(<Email email={content}/>, document.querySelector("#root"));