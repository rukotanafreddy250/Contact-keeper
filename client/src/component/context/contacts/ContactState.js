import React, { useReducer } from "react";
import uuid from 'uuid';
import ContactContext from './ContactContext';
import  contactReducer from './ContactReducer';
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
} from '../Types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                _id: "6150b9b17364c9c7fd3f8721",
                user: "6149b453259b1c4172aeb8f4",
                name: "Frederick",
                email: "FrederickPro@gmail.com",
                phone: "078593030",
                type: "Personal",
                date: "2021-09-26T18:19:29.841Z",
                __v: 0
            },
            {
                _id: "6150b99ef3153afc1885c4a6",
                user: "6149b453259b1c4172aeb8f4",
                name: "Frederick",
                email: "FrederickPro@gmail.com",
                phone: "078593030",
                type: "personal",
                date: "2021-09-26T18:19:10.859Z",
                __v: 0
            },
            {
                _id: "6150b80cf3153afc1885c4a4",
                user: "6149b453259b1c4172aeb8f4",
                name: "Shadow",
                email: "ShadowEvansPro@gmail.com",
                phone: "Evaro",
                type: "",
                date: "2021-09-26T18:12:28.896Z",
                __v: 0
            }
        ]
    }

}

const [state, dispatch] = useReducer();
