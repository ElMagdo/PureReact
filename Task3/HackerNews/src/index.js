import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

const View = ({news}) => (
    <div className="view">The latest coming up...</div>
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