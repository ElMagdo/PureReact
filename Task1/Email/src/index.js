import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

function Email({email}) {
    return (
        <div className="email">
            <div><input type="checkbox"/></div>
            <div><i className="fa fa-archive"/></div>
            <div className="end">
                <Sender from={email.sender}/>
                <Subject from={email.sender} name={email.subject}/>
            </div>
        </div>
    );
}

Email.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired
}

let content = {
    sender: "React Newsletter",
    subject: "Issue 36",
    date: "Jul 15",
    message: "th 2016 Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme"
};

let Sender = ({from}) => <div className="sender">{from}</div>;

let Subject = ({from, name}) => (
    <div className="subject">
        <span>{from}</span>-<span>{name}</span>
    </div>
);

ReactDOM.render(<Email email={content}/>, document.querySelector("#root"));