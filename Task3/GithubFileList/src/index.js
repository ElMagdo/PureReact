import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function FileList() {
    return (
        <table className="file-list">
            <tbody><tr><td>Be ready to commit</td></tr></tbody>
        </table>
    );
}

FileList.propTypes = {
    files: PropTypes.array
}

ReactDOM.render(
    <FileList/>,
    document.querySelector("#root")
);