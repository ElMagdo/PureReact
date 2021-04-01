import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

function Explorer() {
    return <div className="avi-exp">Cool page</div>;
}

ReactDOM.render(
    <Explorer/>,
    document.querySelector("#root")
);