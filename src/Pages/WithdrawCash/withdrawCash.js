import React,{Component} from 'react';
import TransactionForm from '../../CommonComponents/TransactionForm';
import { Redirect } from 'react-router-dom';
import routes from '../../routes/routes';
import { WITHDRAW_MONEY_API } from '../../constants/serverUrls';
import { postDetails } from '../../services/postDetails';
class WithdrawCash extends Component
{
    state={
        amount_to_withdraw:0,
        isWithDrawn:false,
        message:"",
        reLogin:false
    }
    
    deductAmount=async()=>{
        const {amount_to_withdraw}=this.state;
            if(Number.isInteger(parseInt(amount_to_withdraw))){
            const requestBody = {
                amount:amount_to_withdraw
            };
            const resp = await postDetails(WITHDRAW_MONEY_API, "POST", requestBody);
            if(resp.status===200){
                this.setState({message:"Kindly Collect the Cash"})
            }
            else if(resp.status===440){
                this.setState({
                    reLogin:true
                })
            }
            else{
                this.setState({message:"No Sufficient Balance or something went wrong."})
            }
        }
        else{
            this.setState({message:"Please enter only numbers"})
        }
            this.clear();  
    }

    onFieldChange=(event,targetField)=>{
        this.setState({
          [targetField]:event.target.value
        })
      }
    clear=()=>{
        this.setState({
            amount_to_withdraw:0
        })
    }
    render(){
        const {amount_to_withdraw,message,reLogin}=this.state;
        return(
            <div>
                {
                reLogin
                ?
                <Redirect to={{
                    pathname:routes.login,
                    state:{validUser:false,message:"Your Session has expired ! Please Login again"}}}/>
                :
                <>
                <TransactionForm id={"amount_to_withdraw"} customInputLabel={"Enter the Amount"} value={amount_to_withdraw} onFieldChange={this.onFieldChange} 
                                    onSubmit={this.deductAmount} message={message}></TransactionForm>  
                
                </>
                }
                
                
            </div>
        )
    }
}
export default WithdrawCash;