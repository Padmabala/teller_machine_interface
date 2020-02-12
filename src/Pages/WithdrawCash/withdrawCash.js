import React,{Component} from 'react';
import TransactionForm from '../../CommonComponents/TransactionForm';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { withdrawMoney } from '../../redux/actions/transactionActions';

import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import { WITHDRAW_MONEY_API } from '../../constants/serverUrls';
import { postDetails } from '../../services/postDetails';
class WithdrawCash extends Component
{
    state={
        amount_to_withdraw:0,
        isWithDrawn:false,
        message:"",
    }
    // componentDidUpdate(prevProps,prevState){
    //     console.log(this.props.amount);
    //     if(prevProps.amount!==this.props.amount){
    //     if(prevProps.amount-prevState.amount_withdrawn===this.props.amount){
    //         this.setState({message:"Kindly Collect the Cash"})
    //     }
    //     else{
    //         this.setState({message:"Something went wrong"})
    //         }
    //     }
    // }
    deductAmount=async()=>{
        const {amount_to_withdraw}=this.state;
            const requestBody = {
                amount:parseInt(amount_to_withdraw)
            };
            const resp = await postDetails(WITHDRAW_MONEY_API, "POST", requestBody);
            if(resp.status===200){
                this.setState({message:"Kindly Collect the Cash"})
            }
            else{
                this.setState({message:"No Sufficient Balance or something went wrong. Contact the Bank POC"})
            }
            this.clear();  
    }
    // deductAmount=()=>{
    //     const {amount_withdrawn}=this.state;
    //     const {withdrawMoney}=this.props;
    //     withdrawMoney(amount_withdrawn);
    //     this.clear();   
    //     }

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
        const {amount_to_withdraw,message}=this.state;
        return(
            <div>
                <TransactionForm id={"amount_to_withdraw"} customInputLabel={"Enter the Amount"} value={amount_to_withdraw} onFieldChange={this.onFieldChange} 
                                    onSubmit={this.deductAmount} message={message}></TransactionForm>  
                <NavLink to={routes.home}>Go to Home Page</NavLink>
                
                
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//     return({
//         amount:state.amount
//     })
// }
// const mapDispatchToProps=(dispatch)=>{
//     return({
//         withdrawMoney:bindActionCreators(withdrawMoney,dispatch)
//     })
// }
export default WithdrawCash;//connect(mapStateToProps,mapDispatchToProps)(WithdrawCash);