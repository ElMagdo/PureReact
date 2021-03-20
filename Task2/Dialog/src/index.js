import React from 'react';
import ReactDOM from 'react-dom';

function DialogBox() {
    return (
        <div className="dlg">Lets Start DIALOGING (*=*) ......</div>
    );
}

ReactDOM.render(
    <DialogBox/>,
    document.querySelector("#root")
);