import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

function Page({page}) {
    return <div className="avi-exp">Cool page</div>;
}

var testPage = {
    head: {
        logo: "AE",
        title: "Aviation Explorer",
        boards: 37,
        pins: 8900,
        likes: 186,
        followers: 8900,
        following: 1800
    },
    body: [
        {
            caption: "DIY: Tips Tricks Ideas Repair",
            name: "Aviation Explorer",
            cap_img: "",
            ls_img: ["", "", ""],
            pins: 4850
        },
    ]
};

ReactDOM.render(
    <Page page={testPage}/>,
    document.querySelector("#root")
);