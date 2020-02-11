import React,{Component} from 'react';
import CustomInputField from '../../CommonComponents/CustomInputField';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { withdrawMoney } from '../../redux/actions/transactionActions';

import { Router,NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
class WithdrawCash extends Component
{
    state={
        amount_withdrawn:0,
        isWithDrawn:false,
        message:"",
    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.props.amount);
        if(prevProps.amount!==this.props.amount){
        if(prevProps.amount-prevState.amount_withdrawn===this.props.amount){
            this.setState({message:"Kindly Collect the Cash"})
        }
        else{
            this.setState({message:"Something went wrong"})
            }
        }
    }
    deductAmount=()=>{
        const {amount_withdrawn}=this.state;
        const {withdrawMoney}=this.props;
        withdrawMoney(amount_withdrawn);
        this.clear();   
        }

    onFieldChange=(event,targetField)=>{
        this.setState({
          [targetField]:event.target.value
        })
      }
    clear=()=>{
        this.setState({
            amount_withdrawn:0
        })
    }
    render(){
        const {amount_withdrawn,message}=this.state;
        return(
            <div>
                <CustomInputField id={"amount_withdrawn"} customInputLabel={"Enter the Amount"} value={amount_withdrawn} onFieldChange={this.onFieldChange} 
                                    onSubmit={this.deductAmount} message={message}></CustomInputField>  
                <NavLink to={routes.home}>Go to Home Page</NavLink>
                
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return({
        amount:state.amount
    })
}
const mapDispatchToProps=(dispatch)=>{
    return({
        withdrawMoney:bindActionCreators(withdrawMoney,dispatch)
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(WithdrawCash);