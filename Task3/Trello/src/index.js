import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import Title from './title';
import 'font-awesome/css/font-awesome.min.css';
import Item from './item';

function Board({children}) {
    return <div className="board">{children}</div>;
}

Board.propTypes = {
    children: PropTypes.node
}

const Card = ({card}) => (
    <div className="card">
        <div className="inner">
            <Title title={card.head}/>
            {card.list.map(i => <Item key={i.id} item={i.item}/>)}
            <div className="foot">Add a card...</div>
        </div>
    </div>
);

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
    head: "App Features",
    list: [
        {id: 0, item: "Login"}, {id: 1, item: "User Interface"},
        {id: 2, item: "Settings"}, {id: 3, item: "Profile"},
        {id: 4, item: "Response"}, {id: 5, item: "Navigation"}
    ]
},
{
    head: "React Features",
    list: [
        {id: 0, item: "Components"}, {id: 1, item: "Interactions"},
        {id: 2, item: "Props"}, {id: 3, item: "States"},
        {id: 4, item: "Children"}, {id: 5, item: "Packages"}
    ]
}
];

ReactDOM.render(
    <Board>
        <Card card={testCards[0]}/>
        <Card card={testCards[1]}/>
        <Card card={testCards[2]}/>
    </Board>,
    document.querySelector("#root")
);