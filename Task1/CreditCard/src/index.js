import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function CreditCard({cardInfo}) {
    return(
        <div className="card">NO CREDIT!!....</div>
    );
}

let info = {
    bankName: "Big Bank, Inc",
    cardNum: "1234 5678 8765 4321",
    expDate: "08/19",
    personName: "CARDHOLDER NAME"
}

ReactDOM.render(<CreditCard cardInfo={info}/>, document.querySelector("#root"));