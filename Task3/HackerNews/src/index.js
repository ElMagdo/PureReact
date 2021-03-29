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
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 1,
        title: "Zenzizenzizenzic",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 2,
        title: "A practical security guide for web developers",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 0
    },
    {
        id: 3,
        title: "I got arrested in Kazhakstan and represented myself in court",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 4,
        title: "Sculpture of Housing Prices Ripping San Francisco Apart",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 5,
        title: "Practical Giude to Bare Metal C++",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 6,
        title: "Superformula",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 7,
        title: "Police asked 3D printing lab to recreate a dead man's fingers to unlock phone",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 8,
        title: "Edward Snowden's New Research Aims to Keep Smartphones from Betraying Owners",
        site: "bunniestudios.com",
        points: 1346,
        writer: "Ivank",
        posted_at: "2021-03-28 19:29",
        comments: 257
    },
    {
        id: 9,
        title: "Assesing IBM's POWER8, Part 1: A Low Level Look at Little Endian",
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