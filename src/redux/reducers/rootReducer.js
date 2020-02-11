import {combineReducers} from 'redux';
import transactionsReducer from './transactionsReducer';

const rootReducer=combineReducers({
    amount:transactionsReducer
})
export default rootReducer;
