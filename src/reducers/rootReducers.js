import { combineReducers } from 'redux';

// import actions here
import todos from './todos';

const rootReducer = combineReducers({
    // add the imported actions here
    todos
});

export default rootReducer;