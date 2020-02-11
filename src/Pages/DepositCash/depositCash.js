import React,{Component} from 'react';
import CustomInputField from '../../CommonComponents/CustomInputField';
import { bindActionCreators } from 'redux';
import { depositMoney } from '../../redux/actions/transactionActions';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import routes from '../../routes/routes';
class depositCash extends Component
{
    state={
        amount_deposited:0,
        isDeposited:false,
        message:""
    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.props.amount);
        if(prevProps.amount!==this.props.amount){
        if(prevProps.amount+parseInt(prevState.amount_deposited)===this.props.amount){
            this.setState({message:"Money Deposited"})
            console.log(this.props.amount);
        }
        else{
            this.setState({message:"Something went wrong"})
            }
        }
    }
    addAmount=()=>{
        const {amount_deposited}=this.state;
        const {depositMoney}=this.props;
        depositMoney(amount_deposited);
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
        const {amount_deposited,message}=this.state;
        return(
            <div>
                <CustomInputField id={"amount_deposited"} customInputLabel={"Enter the Amount"} value={amount_deposited} onFieldChange={this.onFieldChange} 
                                    message={message}onSubmit={this.addAmount}></CustomInputField>
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
        depositMoney:bindActionCreators(depositMoney,dispatch)
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(depositCash);