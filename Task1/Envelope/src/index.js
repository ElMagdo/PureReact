import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

function Envelope({toPerson, fromPerson}) {
    return (
        <div className="envelope">
          <div className="top">
            <AddressLabel label={fromPerson} />
            <Stamp/>
          </div>
          <div className="btm">
            <AddressLabel label={toPerson} />
          </div>
        </div>
    );
}

Envelope.propTypes = {
  toPerson: PropTypes.object.isRequired,
  fromPerson: PropTypes.object.isRequired
}

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

let Stamp = () => (
<div className="stamp-icon">
  <i className="fa fa-podcast fa-4x"/>
</div>
);

let sender = {
  fullName: "Mr Sender",
  address: {
    street: "123 Fake St.",
    city: "Boston",
    postalCode: "MA 02118"
  }
};

let receiver = {
  fullName: "Mrs Receiver",
  address: {
    street: "123 Fake St.",
    city: "San Francisco",
    postalCode: "CA 94101"
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

ReactDOM.render(<Envelope toPerson={receiver} fromPerson={sender}/>, document.querySelector('#root'));