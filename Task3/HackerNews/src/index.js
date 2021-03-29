import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';
import Navbar from './navbar';
import Post from './post';
import 'font-awesome/css/font-awesome.min.css';

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
        posted_at: "2021-01-28 19:29",
        comments: 257
    },
    {
        id: 1,
        title: "Zenzizenzizenzic",
        site: "wikipedia.org",
        points: 140,
        writer: "vinchuco",
        posted_at: "2021-03-02 21:29",
        comments: 40
    },
    {
        id: 2,
        title: "A practical security guide for web developers",
        site: "github.com",
        points: 72,
        writer: "zianwar",
        posted_at: "2021-03-28 19:29",
        comments: 6
    },
    {
        id: 3,
        title: "I got arrested in Kazhakstan and represented myself in court",
        site: "medium.com",
        points: 370,
        writer: "drpp",
        posted_at: "2021-03-29 19:42",
        comments: 79
    },
    {
        id: 4,
        title: "Sculpture of Housing Prices Ripping San Francisco Apart",
        site: "dougmccune.com",
        points: 254,
        writer: "dougmccune",
        posted_at: "2021-03-21 00:00",
        comments: 149
    },
    {
        id: 5,
        title: "Practical Giude to Bare Metal C++",
        site: "gitbooks.io",
        points: 175,
        writer: "adamnemecek",
        posted_at: "2021-03-28 02:29",
        comments: 31
    },
    {
        id: 6,
        title: "Superformula",
        site: "wikipedia.org",
        points: 77,
        writer: "GuiA",
        posted_at: "2021-03-8 19:29",
        comments: 17
    },
    {
        id: 7,
        title: "Police asked 3D printing lab to recreate a dead man's fingers to unlock phone",
        site: "fusion.net",
        points: 109,
        writer: "theandrewbailey",
        posted_at: "2021-02-28 19:29",
        comments: 57
    },
    {
        id: 8,
        title: "Edward Snowden's New Research Aims to Keep Smartphones from Betraying Owners",
        site: "theintercept.com",
        points: 190,
        writer: "secfirstmd",
        posted_at: "2021-03-20 19:29",
        comments: 69
    },
    {
        id: 9,
        title: "Assesing IBM's POWER8, Part 1: A Low Level Look at Little Endian",
        site: "anandtech.com",
        points: 24,
        writer: "tambourine_man",
        posted_at: "2021-03-29 19:29",
        comments: 1
    }
];

ReactDOM.render(
    <View news={testNews}/>,
    document.querySelector("#root")
);