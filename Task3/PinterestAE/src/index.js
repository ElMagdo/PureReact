import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import Card from './card';

function Page({page}) {
    return (
        <div className="page">
            <div className="board">
                {page.body.forEach(i => <Card key={i.id} body={i}/>)}
            </div>
        </div>
    );
}

Page.propTypes = {
    page: PropTypes.shape({
        head: PropTypes.object.isRequired,
        body: PropTypes.array.isRequired
    })
};

var testPage = {
    head: {
        logo: "",
        title: "Aviation Explorer",
        boards: 37,
        pins: 8900,
        likes: 186,
        followers: 8900,
        following: 1800
    },
    body: [
        {
            id: 0,
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