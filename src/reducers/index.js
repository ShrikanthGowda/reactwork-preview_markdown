import { combineReducers } from 'redux';
import markdownReducer from './markdownReducers';

export default combineReducers({
    markdown: markdownReducer,
});

