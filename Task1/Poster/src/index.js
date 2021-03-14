import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

function Poster({image, title, text}) {
    return (
        <div className="poster">WATCHOUT!!!......(+_+)</div>
    );
}

let img = "./post.png";
let hdx = "REACT";
let txt = "The best thing since jQuery, probably";

ReactDOM.render(<Poster image={img} title={hdx} text={txt}/>, document.querySelector("#root"));