import React from 'react';
import PropTypes from 'prop-types';

const Post = ({feed}) => (
    <div className="post">Just posted</div>
);

Post.propTypes = {
    feed: PropTypes.object.isRequired
}

export default Post;