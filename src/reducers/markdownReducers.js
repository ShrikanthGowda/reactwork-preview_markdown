import EDIT_MARKDOWN from '../constants';

const initialState = {
    message: 'initial state message',
}


export default function(state = initialState, {type, message}) {
    switch(type) {
        case EDIT_MARKDOWN:
            return {
                message: message,
            }
        default:
            return state;
    }
}