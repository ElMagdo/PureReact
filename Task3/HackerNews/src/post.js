import React from 'react';
import PropTypes from 'prop-types';

const Post = ({feed}) => (
    <div className="post">Just posted</div>
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