import React from 'react';
import ReactDOM from 'react-dom';

function FileList() {
    return (
        <table className="file-list">
            <tbody><tr><td>Be ready to commit</td></tr></tbody>
        </table>
    );
}

ReactDOM.render(
    <FileList/>,
    document.querySelector("#root")
);