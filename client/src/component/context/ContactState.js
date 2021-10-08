import React, { Children, useReducer } from "react";
import {v4 as uuidv4} from 'uuid';
import ContactContext from "./ContactContext";
import contactReducer from './ContactReducer';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from './Types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                _id: "1",
                user: "6149b453259b1c4172aeb8f4",
                name: "Frederick",
                email: "FrederickPro@gmail.com",
                phone: "078593030",
                type: "personel ",
                date: "2021-09-26T18:19:29.841Z",
                __v: 0
            },
            {      
                _id: "2",
                user: "6149b453259b1c4172aeb8f4",
                name: "Frederick",
                email: "FrederickPro@gmail.com",
                phone: "078593030",
                type: "personel",
                date: "2021-09-26T18:19:10.859Z",
                __v: 0
            },
            {
                _id: "3",
                user: "6149b453259b1c4172aeb8f4",
                name: "Shadow",
                email: "ShadowEvansPro@gmail.com",
                phone: "0785760457",
                type: "professional",
                date: "2021-09-26T18:12:28.896Z",
                __v: 0
            }
        ]
    }
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // add contact
    const  addContact = (contacts) => {
        // contacts.id = uuidv4();
        dispatch({
            type: ADD_CONTACT,
            payload: contacts
        })
    }
    
    // delete contact
    function deleteContact () {

    }

    // set current contact
    function setCurrent () {
      
    }

    // clear Current Contact
    
    // Update contact 

    // filter contact

    // clear filter
   

    return ( 
        <ContactContext.Provider value={{
            contacts: state.contacts,
            addContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;

