import React,{Component} from 'react';
import TransactionForm from '../../CommonComponents/TransactionForm';
// import { bindActionCreators } from 'redux';
// import { depositMoney } from '../../redux/actions/transactionActions';
// import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import routes from '../../routes/routes';
import { postDetails } from '../../services/postDetails';
import { DEPOSIT_MONEY_API } from '../../constants/serverUrls';
class depositCash extends Component
{
    state={
        amount_deposited:0,
        isDeposited:false,
        message:""
    }
    // componentDidUpdate(prevProps,prevState){
    //     console.log(this.props.amount);
    //     if(prevProps.amount!==this.props.amount){
    //     if(prevProps.amount+parseInt(prevState.amount_to_deposit)===this.props.amount){
    //         this.setState({message:"Money Deposited"})
    //         console.log(this.props.amount);
    //     }
    //     else{
    //         this.setState({message:"Something went wrong"})
    //         }
    //     }
    // }
    addAmount=async()=>{
        const {amount_to_deposit}=this.state;
            const requestBody = {
                amount:parseInt(amount_to_deposit)
            };
            const resp = await postDetails(DEPOSIT_MONEY_API, "POST", requestBody);
            if(resp.status===200){
                this.setState({message:"Money Deposited"})
            }
            else{
                this.setState({message:"Something went wrong"})
            }
    }
    // addAmount=()=>{
    //     const {amount_deposited}=this.state;
    //     const {depositMoney}=this.props;
    //     depositMoney(amount_deposited);
    //     this.clear();   
    // }
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
        const {amount_to_deposit,message}=this.state;
        return(
            <div>
                <TransactionForm id={"amount_to_deposit"} customInputLabel={"Enter the Amount"} value={amount_to_deposit} onFieldChange={this.onFieldChange} 
                                    message={message}onSubmit={this.addAmount}></TransactionForm>
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
//         depositMoney:bindActionCreators(depositMoney,dispatch)
//     })
// }
export default depositCash;