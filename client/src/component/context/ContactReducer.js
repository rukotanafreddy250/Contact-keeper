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


export default (action, state) => {
    switch (action.type) {
        case ADD_CONTACT: 
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        default:
            return state;
    }
}
