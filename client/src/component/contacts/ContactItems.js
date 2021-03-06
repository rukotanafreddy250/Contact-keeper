import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ContactItems = ({ contact }) => {
    const { id, name, email, phone, type } = contact;

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name} <span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type.charAt().toUpperCase() + type.slice(1)}</span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fas fa-envelope-open"></i>{email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"></i>{phone}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-small">Edit</button>
                <button className="btn btn-danger btn-small">Delete</button>
            </p>
        </div>
    )
}
ContactItems.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItems;
