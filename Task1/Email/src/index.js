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
                <div className="top">
                    <Sender from={email.sender}/>
                    <Subject from={email.sender} name={email.subject}/>
                    <Date time={email.date}/>
                </div>
                <Message from={email.sender} name={email.subject}
                time={email.date} msg={email.message}/>
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

let Date = ({time}) => <div className="date">{time}</div>;

let Message = ({from, name, time, msg}) => (
    <div className="message">
        <span>{from} </span>
        <span>{name} </span>
        <span>{time}</span><span>{msg}</span>
    </div>
);

ReactDOM.render(<Email email={content}/>, document.querySelector("#root"));