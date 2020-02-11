import initialState from "../store/initialState";
import { ACTION_WITHDRAW_MONEY, ACTION_DEPOSIT_MONEY } from "../actionTypes/actionTypes";


const transactionsReducer=(state=initialState.amount,action)=>{
    switch(action.type){
        case ACTION_WITHDRAW_MONEY:
            return action.payload
        case ACTION_DEPOSIT_MONEY:
            return action.payload
        default:
            return state;
    }
}

export default transactionsReducer;