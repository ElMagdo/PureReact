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

Card.propTypes = {
    card: PropTypes.shape({
        head: PropTypes.string.isRequired,
        list: PropTypes.array.isRequired
    }).isRequired
}

var testCards = [
{
    head: "Phone Features",
    list: [
        {id: 0, item: "Subwoofer"}, {id: 1, item: "Non-porous, washable"},
        {id: 2, item: "Wings"}, {id: 3, item: "Beveled Bezel"},
        {id: 4, item: "Bezeled Bevel"}, {id: 5, item: "Seedless"}
    ]
},
{
    head: "Phone Features",
    list: [
        {id: 0, item: "Subwoofer"}, {id: 1, item: "Non-porous, washable"},
        {id: 2, item: "Wings"}, {id: 3, item: "Beveled Bezel"},
        {id: 4, item: "Bezeled Bevel"}, {id: 5, item: "Seedless"}
    ]
}
];

ReactDOM.render(
    <Board>
        <Card card={testCards[0]}/>
    </Board>,
    document.querySelector("#root")
);