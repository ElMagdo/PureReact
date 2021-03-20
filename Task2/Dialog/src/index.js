import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function DialogBox({children}) {
    return (
        <div className="dlg">{children}</div>
    );
}
let hdx = "This Is Important";
let Title = ({title}) => <div className="title">{title}</div>;

let txt = "Here is an important text or error or something";
let Body = ({body}) => <div className="bdy">{body}</div>;

ReactDOM.render(
    <DialogBox>
        <Title title={hdx}/>
        <Body body={txt}/>
    </DialogBox>,
    document.querySelector("#root")
);