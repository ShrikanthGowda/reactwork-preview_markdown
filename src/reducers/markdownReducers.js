import EDIT_MARKDOWN from '../constants';

const initialState = {
    message: 'initial state message',
}


export default function(state = initialState, {type, payload}) {
    switch(type) {
        case EDIT_MARKDOWN:
            return {
                message: payload,
            }
        default:
            return state;
    }
}