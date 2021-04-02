import React from 'react';
import PropTypes from 'prop-types';

const Card = ({body}) => (
    <div className="card">I'm one of me</div>
);

Card.propTypes = {
    body: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cap_img: PropTypes.string.isRequired,
        ls_img: PropTypes.array.isRequired,
        pins: PropTypes.number.isRequired
    }))
}

export default Card;