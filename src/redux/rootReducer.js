import { combineReducers } from 'redux';
import { cartReducer } from './reducer';

const rootReducer = combineReducers({
    reducer: cartReducer,
});

export default rootReducer;
