import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function AddressLabel({label}) {
  return (
    <div className="label"></div>
  );
}

AddressLabel.propTypes = {
  person: PropTypes.object.isRequired
}

let person = {
  fullName: "Full Name",
  address: {
    street: "123 Fake St.",
    city: "Boston",
    postalCode: "MA 02118"
  }
};

ReactDOM.render(<AddressLabel label={person}/>, document.querySelector('#root'));