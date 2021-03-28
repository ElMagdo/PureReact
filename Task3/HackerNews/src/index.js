import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

const View = () => (
    <div className="view">The latest coming up...</div>
);

ReactDOM.render(
    <View/>,
    document.querySelector("#root")
);