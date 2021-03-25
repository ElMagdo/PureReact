import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './styles.css';
import 'font-awesome/css/font-awesome.min.css';
import Icon from './icon-type';

function FileList({files}) {
    return (
    <div className="file-list">
        {files.map(file => <FileListItem key={file.id} file={file}/>)}
    </div>
    );
}

FileList.propTypes = {
    files: PropTypes.array
}

const FileListItem = ({file}) =>(
<div className="item">{file.name}</div>
);

FileList.propTypes = {
    files: PropTypes.array
};

const testFiles = [{
    id: 1,
    name: 'build',
    type: 'folder',
    updated_at: "2021-01-11 21:24:00",
    latestCommit: {
        message: 'Close #1687, replace es3ify with Babel ES3 tranforms (#1688)'
    }
},
{
    id: 2,
    name: 'docs',
    type: 'folder',
    updated_at: "2021-03-24 21:24:00",
    latestCommit: {
        message: 'Mention that we\'re Observable in the API.'
    }
},
{
    id: 3,
    name: 'examples',
    type: 'folder',
    updated_at: "2021-03-06 21:24:00",
    latestCommit: {
        message: 'Update doc to test with Enzyme (#1692)'
    }
},
{
    id: 4,
    name: 'logos',
    type: 'folder',
    updated_at: "2021-01-18 21:24:00",
    latestCommit: {
        message: 'Use Redux logo as favicon on GitBook docs (#1761)'
    }
},
{
    id: 5,
    name: 'src',
    type: 'folder',
    updated_at: "2021-03-02 21:24:00",
    latestCommit: {
        message: 'Only warn for unexpected once per key (#1818)'
    }
},
{
    id: 6,
    name: 'test',
    type: 'folder',
    updated_at: "2021-03-02 21:24:00",
    latestCommit: {
        message: 'Only warn for unexpected once per key (#1818)'
    }
},
{
    id: 7,
    name: '.babelrc',
    type: 'file',
    updated_at: "2021-01-18 21:24:00",
    latestCommit: {
        message: 'Close #1687, replace es3ify with Babel ES3 tranforms (#1688)'
    }
},
{
    id: 8,
    name: '.editorconfig',
    type: 'file',
    updated_at: "2020-10-18 21:24:00",
    latestCommit: {
        message: 'editorconfig: do not trim trailing spaces in Markdown files'
    }
},
{
    id: 9,
    name: '.eslintignore',
    type: 'file',
    updated_at: "2020-11-18 21:24:00",
    latestCommit: {
        message: 'Really ignore all node_modules and dist in eslint.'
    }
},
{
    id: 10,
    name: '.eslintrc',
    type: 'file',
    updated_at: "2020-06-18 21:24:00",
    latestCommit: {
        message: 'Bump eslint version'
    }
},
{
    id: 11,
    name: '.flowconfig',
    type: 'file',
    updated_at: "2020-01-18 21:24:00",
    latestCommit: {
        message: 'Add Flow type annotations'
    }
},
];

ReactDOM.render(
    <FileList files={testFiles}/>,
    document.querySelector("#root")
);