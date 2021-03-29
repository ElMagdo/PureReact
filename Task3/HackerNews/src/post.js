import React from 'react';
import PropTypes from 'prop-types';

const Post = ({feed}) => (
    <div className="post">
        <div className="left">
            <span className="num">{feed.id}</span>
            <span className="up"><i className="fa fa-triangle"/></span>
        </div>
        <div className="post-ryt">
            <div className="top">
                <span className="caption">{feed.title}</span>
                <span className="src"> ({feed.site})</span>
            </div>
            <div className="btm">
                <span className="pts">{feed.points} points </span>
                <span className="writer">by {feed.writer} </span>
                <span className="time">{moment(feed.posted_at).fromNow()} </span>
            </div>
        </div>
    </div>
);

Post.propTypes = {
    feed: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        site: PropTypes.string.isRequired,
        points: PropTypes.number.isRequired,
        writer: PropTypes.string.isRequired,
        posted_at: PropTypes.string.isRequired,
        comments: PropTypes.number.isRequired
    }).isRequired
}

export default Post;