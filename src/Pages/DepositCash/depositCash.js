import React,{Component} from 'react';
import TransactionForm from '../../CommonComponents/TransactionForm';
import {Redirect} from 'react-router-dom';
import routes from '../../routes/routes';
import { postDetails } from '../../services/postDetails';
import { DEPOSIT_MONEY_API } from '../../constants/serverUrls';
class depositCash extends Component
{
    state={
        amount_deposited:0,
        isDeposited:false,
        message:"",
        reLogin:false
    }
    addAmount=async()=>{
        const {amount_to_deposit}=this.state;
        if(Number.isInteger(parseInt(amount_to_deposit))){
            const requestBody = {
                amount:parseInt(amount_to_deposit)
            };
            const resp = await postDetails(DEPOSIT_MONEY_API, "POST", requestBody);
            if(resp.status===200){
                this.setState({message:"Money is Deposited"})
            }
            else if(resp.status===440){
                this.setState({
                    reLogin:true
                })
            }
            else{
                this.setState({message:"Something went wrong"})
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
            amount_deposited:0
        })
    }
    componentDidMount(){
        console.log("component Mounted");
        
    }
    render(){
        const {amount_to_deposit,message,reLogin}=this.state;
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
                <TransactionForm id={"amount_to_deposit"} customInputLabel={"Enter the Amount"} value={amount_to_deposit} onFieldChange={this.onFieldChange} 
                                    message={message}onSubmit={this.addAmount}></TransactionForm>
                
                </>
                }
            </div>
        )
    }
}
export default depositCash;