import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import logo from './logo512.png';
import PropTypes from 'prop-types';

function Poster({image, title, text}) {
    return (
        <div className="poster">
            <Image src={image}/>
            <Title tag={title}/>
            <Text words={txt}/>
        </div>
    );
}

Poster.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

let img = logo;
let hdx = "REACT";
let txt = "The best thing since jQuery, probably";

let Image = ({src}) => (
<div className="image"><img src={src} alt="Poster"/></div>
);

let Title = ({tag}) => (
<div className="title">
    <span className="first">{tag[0]}</span>
    {tag.slice(1, tag.length-1)}
    <span className="last">{tag[tag.length-1]}</span>
</div>
);

let Text = ({words}) => <div className="text">{words}</div>;

ReactDOM.render(<Poster image={img} title={hdx} text={txt}/>, document.querySelector("#root"));