import React, {useContext, Fragment} from 'react';
import ContactItems from './ContactItems';

import ContactContext from '../context/ContactContext';

export const Contacts = () => {

    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;


    return (
        <Fragment>
            {contacts.map( (contact) => (
                <ContactItems key={contact.id} contact={contact}/>
            ))}
        </Fragment>
    )
}
