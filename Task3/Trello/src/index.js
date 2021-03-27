import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Board({children}) {
    return <div className="board">{children}</div>;
}

Board.propTypes = {
    children: PropTypes.node
}

const Card = ({card}) => <div className="card">A set of tasks</div>;

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
    <Board>
        <Card card={testCards[0]}/>
    </Board>,
    document.querySelector("#root")
);