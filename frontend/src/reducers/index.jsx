import { combineReducers } from 'redux';
import comments from './comments.jsx';

const commentApp = combineReducers({
  comments,
});

export default commentApp;
