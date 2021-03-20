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

ReactDOM.render(
    <DialogBox>
        <Title title={hdx}/>
    </DialogBox>,
    document.querySelector("#root")
);