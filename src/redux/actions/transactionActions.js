import { ACTION_WITHDRAW_MONEY } from "../actionTypes/actionTypes"
import initialState from "../store/initialState"

export const withdrawMoney=(withdrawAmount)=>{
    const amount=initialState.amount-withdrawAmount;
    return{
        type:ACTION_WITHDRAW_MONEY,
        payload:amount
    }
}
export const depositMoney=(depositAmount)=>{
    const amount=initialState.amount+parseInt(depositAmount);
    return{
        type:ACTION_WITHDRAW_MONEY,
        payload:amount
    }
}
