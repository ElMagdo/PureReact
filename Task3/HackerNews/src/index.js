import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import Navbar from './navbar';
import Post from './post';

const View = ({news}) => (
    <div className="view">
        <Navbar>
            <span className="nav-item">new</span>|
            <span className="nav-item">threads</span>|
            <span className="nav-item">comments</span>|
            <span className="nav-item">show</span>|
            <span className="nav-item">ask</span>|
            <span className="nav-item">jobs</span>|
            <span className="nav-item">submit</span>
        </Navbar>
        <div className="feed">
            {news.map(i => <Post key={i.id} feed={i}/>)}
        </div>
    </div>
);

View.propTypes = {
    news: PropTypes.array.isRequired
}

var testNews = [
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 0
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 0,
        title: "Why I'm Suing the US Government",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    }
];

ReactDOM.render(
    <View news={testNews}/>,
    document.querySelector("#root")
);