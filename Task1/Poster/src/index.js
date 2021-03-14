import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';

function Poster({image, title, text}) {
    return (
        <div className="poster">
            <Image src={image}/>
        </div>
    );
}

Poster.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

let img = "./post.png";
let hdx = "REACT";
let txt = "The best thing since jQuery, probably";

let Image = (src) => (
<div className="image"><img src={src} alt="Poster"/></div>
);

ReactDOM.render(<Poster image={img} title={hdx} text={txt}/>, document.querySelector("#root"));