import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

function Tweets() {
    return <div className="tweets">Tweeter Loading... </div>
}

ReactDOM.render(
    <Tweets/>,
    document.querySelector("#root")
);