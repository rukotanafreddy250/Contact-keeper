import React, { useState, useContext } from 'react';
import ContactContext from '../context/ContactContext';

export const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '', 
        email: '',
        phone: '',
        type: 'personel'
    });
    const { name, email, phone, type} = contact;

    const onChange = e =>
    setContact({ ...contact, [e.target.name]: [e.target.value]})

    const onSubmit = e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '', 
            email: '',
            phone: '',
            type: 'personel'
        })
    }


    return (
        <form onSubmit={onSubmit}> 
            <h2  className="text-primary">
                Contact Form
            </h2>
            <input
                    type="text" 
                    placeholder="name" 
                    name="name" 
                    value={name} 
                    onChange={onChange} 
                />
                <input
                    type="email" 
                    placeholder="email" 
                    name="email" 
                    value={email} 
                    onChange={onChange} 
                />
                <input
                    type="text" 
                    placeholder="Phone" 
                    name="phone" 
                    value={phone} 
                    onChange={onChange} 
                />
                <h5>Contact Type</h5>
                <input type="radio" name="type" value='personel' checked={type === 'personel'} onChange={onChange} />{' '}
                Personel{' '}
                <input 
                    type="radio" 
                    name="type" 
                    value='professional'
                    // checked= {type === 'professional'}
                    onChange={onChange} 
                />
                professional{' '}
                <div>
                <input
                    type='submit'
                    // value={current ? 'Update Contact' : 'Add Contact'}
                    className='btn btn-primary btn-block'
                    onSubmit={onSubmit}
                />
                </div>
        </form>
    )
}
