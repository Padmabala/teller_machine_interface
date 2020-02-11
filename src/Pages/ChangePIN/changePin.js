import React,{Component} from 'react';
import CustomInputField from '../../CommonComponents/CustomInputField';
class ChangePIN extends Component
{
    state={
        pin:"",
        isValid:false,
        inputLabel:"Enter the Old PIN",
        message:""
    }
    addAmount=()=>{
        this.clear();
    }
    onFieldChange=(event,targetField)=>{
        this.setState({
          [targetField]:event.target.value
        })
      }
    validate=(event)=>{
        if(this.state.isValid){
            // this.setState({
        //     isValid:false,
        //      message:"You have entered a incorrect old PIN"
        // })
        }
        else{
            this.setState({
                isValid:true,
                inputLabel:"Enter the New PIN",
                message:"Your PIN is updated"
        })
        }
    }
    clear=()=>{
        this.setState({
            amount:0
        })
    }
    render(){
        const {amount,isDeposited,inputLabel,pin,message}=this.state;
        return(
            <div>
                
                <CustomInputField id={"amount"} customInputLabel={inputLabel} value={pin} onFieldChange={this.onFieldChange} 
                                    message={message} onSubmit={this.validate}></CustomInputField>
                
            </div>
        )
    }
}
export default ChangePIN;