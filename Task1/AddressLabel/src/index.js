import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function AddressLabel({label}) {
  return (
    <div className="label">
      <Name fullName={label.fullName}/>
      <Address address={label.address}/>
    </div>
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

let Name = ({fullName}) => (<div className="names">{fullName}</div>);

Name.propTypes = {
  fullName: PropTypes.string.isRequired
}

function Address({address}) {
  let {street, city, postalCode} = address;
  return (
    <div className="address">
      <div className="street">{street}</div>
      <div className="city">{`${city}, ${postalCode}`}</div>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.shape({
    str: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  })
}

ReactDOM.render(<AddressLabel label={person}/>, document.querySelector('#root'));