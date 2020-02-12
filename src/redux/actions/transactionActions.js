import { ACTION_WITHDRAW_MONEY } from "../actionTypes/actionTypes"
import initialState from "../store/initialState"
import { updateAccount } from "../../services/updateAccount";
import { WITHDRAW_MONEY_API, DEPOSIT_MONEY_API } from "../../constants/serverUrls";

export const withdrawMoney=(withdrawAmount)=>{
    // const requestBody = {
    //             amount:parseInt(withdrawAmount)
    //         };
    //         const resp=await fetchData(GET_BALANCE_API,"GET");
    //         //const resp = await updateAccount(WITHDRAW_MONEY_API, 'POST', requestBody)
    //         console.log(resp);
    //         dispatch(updateState(10));
    return async dispatch=>{
        try{
            const amt=parseInt(withdrawAmount);
            const requestBody = {
                amount:amt
            };
            const resp = await updateAccount(WITHDRAW_MONEY_API, "POST", requestBody)
            console.log(resp);
            dispatch(updateState(10));
        }
        catch{
            console.log("An error occured");
        }
    }
}
export const updateState=(amount)=>{
    return{
        type:ACTION_WITHDRAW_MONEY,
        payload:amount
    }
}
export const depositMoney=(depositAmount)=>{
    return async dispatch=>{
        try{
            const amt=parseInt(depositAmount);
            const requestBody = {
                amount:amt
            };
            await updateAccount(DEPOSIT_MONEY_API, "POST", requestBody)
            .then((result)=>console.log(result))
            dispatch(updateState(10));
        }
        catch(error){
            console.log("An error occured",error);
        }
    }
}
