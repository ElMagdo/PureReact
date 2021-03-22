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

const testFiles = [{
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
        message: 'Initial commit'
    }
},
{
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
        message: 'Initial commit'
    }
},
{
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
        message: 'Added a readme'
    }
},
];

ReactDOM.render(
    <FileList/>,
    document.querySelector("#root")
);