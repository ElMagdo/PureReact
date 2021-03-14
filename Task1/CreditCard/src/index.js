import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';

function CreditCard({cardInfo}) {
    return(
        <div className="card">NO CREDIT!!....</div>
    );
}

CreditCard.propTypes = {
    cardInfo: PropTypes.shape({
        bankName: PropTypes.string.isRequired,
        personName: PropTypes.string.isRequired,
        expDate: PropTypes.string.isRequired,
        cardNum: PropTypes.string.isRequired
    }).isRequired
}

let info = {
    bankName: "Big Bank, Inc",
    cardNum: "1234 5678 8765 4321",
    expDate: "08/19",
    personName: "CARDHOLDER NAME"
}

ReactDOM.render(<CreditCard cardInfo={info}/>, document.querySelector("#root"));