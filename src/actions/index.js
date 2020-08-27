import EDIT_MARKDOWN from '../constants';

const editMarkdown = message => (
    {
    type : EDIT_MARKDOWN,
    payload: message,
    }
);

export default editMarkdown;