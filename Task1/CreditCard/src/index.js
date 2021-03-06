import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';

function CreditCard({cardInfo}) {
    return(
        <div className="card">
            <BankName name={cardInfo.bankName}/>
            <CardNum num={cardInfo.cardNum}/>
            <div className="sub">1234</div>
            <Date date={cardInfo.expDate}/>
            <PersonName name={cardInfo.personName}/>
        </div>
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
    bankName: "Big Bank, Inc.",
    cardNum: "1234 5678 8765 4321",
    expDate: "08/19",
    personName: "CARDHOLDER NAME"
}

let BankName = ({name}) => <div className="bank">{name}</div>;

let CardNum = ({num}) => <div className="number">{num}</div>;

let Date = ({date}) => (
    <div className="exp-date">
        <div className="lef">
            <div>VALID</div>
            <div>THRU</div>
        </div>
        <div className="ryt">{date}</div>
    </div>
);

let PersonName = ({name}) => <div className="person">{name}</div>;

ReactDOM.render(<CreditCard cardInfo={info}/>, document.querySelector("#root"));