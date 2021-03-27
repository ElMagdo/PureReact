import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let Board = () => <div className="board">Trello coming soon</div>;

var testCards = [
{
    id: 0,
    head: "Phone Features",
    list: [
        "Subwoofer", "Non-porous, washable", "Wings",
        "Beveled Bezel", "Bezeled Bevel", "Seedless"
    ]
},
{
    id: 1,
    head: "Phone Features",
    list: [
        "Subwoofer", "Non-porous, washable", "Wings",
        "Beveled Bezel", "Bezeled Bevel", "Seedless"
    ]
}
];

ReactDOM.render(
    <Board/>,
    document.querySelector("#root")
);