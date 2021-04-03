import React from 'react';
import PropTypes from 'prop-types';

const Card = ({body}) => (
    <div className="card">
        <div className="caption">{body.caption}</div>
        <div className="name">{body.name}</div>
        <div className="big">
            <div className="cap_img"></div>
            <div className="pin">{body.pins}</div>
        </div>
    </div>
);

Card.propTypes = {
    body: PropTypes.shape({
        caption: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cap_img: PropTypes.string.isRequired,
        ls_img: PropTypes.array.isRequired,
        pins: PropTypes.number.isRequired
    })
}

export default Card;